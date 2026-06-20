from sqlalchemy import desc, func, select, update
from sqlalchemy.orm import Session
from app.models.notification import (
    Notification,
    NotificationPriority,
)


class NotificationRepository:
    """
    Enterprise Notification Repository

    Features:
    - User Notifications
    - Organization Notifications
    - Read/Unread Tracking
    - Priority Alert Monitoring
    - Notification Analytics
    """

    def __init__(self, db: Session):
        self.db = db

    # CRUD Operations
    def create(
        self,
        notification: Notification,
    ) -> Notification:
        self.db.add(notification)
        self.db.commit()
        self.db.refresh(notification)

        return notification

    def bulk_create(
        self,
        notifications: list[Notification],
    ) -> None:
        self.db.add_all(notifications)
        self.db.commit()

    def get_by_id(
        self,
        notification_id: int,
        organization_id: int,
    ) -> Notification | None:
        stmt = select(Notification).where(
            Notification.id == notification_id,
            Notification.organization_id == organization_id,
        )

        return self.db.scalar(stmt)

    def delete(
        self,
        notification: Notification,
    ) -> None:
        self.db.delete(notification)
        self.db.commit()

    # User Notifications
    def get_user_notifications(
        self,
        user_id: int,
        organization_id: int,
        limit: int = 50,
    ) -> list[Notification]:
        stmt = (
            select(Notification)
            .where(
                Notification.user_id == user_id,
                Notification.organization_id == organization_id,
            )
            .order_by(desc(Notification.created_at))
            .limit(limit)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def get_unread_notifications(
        self,
        user_id: int,
        organization_id: int,
    ) -> list[Notification]:
        stmt = (
            select(Notification)
            .where(
                Notification.user_id == user_id,
                Notification.organization_id == organization_id,
                Notification.is_read.is_(False),
            )
            .order_by(desc(Notification.created_at))
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Priority Alerts
    def get_priority_alerts(
        self,
        organization_id: int,
    ) -> list[Notification]:
        stmt = (
            select(Notification)
            .where(
                Notification.organization_id
                == organization_id,
                Notification.priority.in_(
                    [
                        NotificationPriority.HIGH,
                        NotificationPriority.CRITICAL,
                    ]
                ),
            )
            .order_by(desc(Notification.created_at))
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Read Status
    def mark_as_read(
        self,
        notification: Notification,
    ) -> Notification:
        notification.mark_as_read()

        self.db.commit()
        self.db.refresh(notification)

        return notification

    def mark_all_as_read(
        self,
        user_id: int,
        organization_id: int,
    ) -> int:
        stmt = (
            update(Notification)
            .where(
                Notification.user_id == user_id,
                Notification.organization_id == organization_id,
                Notification.is_read.is_(False),
            )
            .values(
                is_read=True,
            )
        )
        result = self.db.execute(stmt)
        self.db.commit()
        return result.rowcount

    # Analytics
    def get_metrics(
        self,
        organization_id: int,
    ) -> dict:
        total = self.db.scalar(
            select(func.count(Notification.id))
            .where(
                Notification.organization_id
                == organization_id
            )
        ) or 0

        unread = self.db.scalar(
            select(func.count(Notification.id))
            .where(
                Notification.organization_id
                == organization_id,
                Notification.is_read.is_(False),
            )
        ) or 0

        critical = self.db.scalar(
            select(func.count(Notification.id))
            .where(
                Notification.organization_id
                == organization_id,
                Notification.priority
                == NotificationPriority.CRITICAL,
            )
        ) or 0

        return {
            "total_notifications": total,
            "unread_notifications": unread,
            "critical_alerts": critical,
        }

    def unread_count(
        self,
        user_id: int,
        organization_id: int,
    ) -> int:
        return (
            self.db.scalar(
                select(func.count(Notification.id))
                .where(
                    Notification.user_id == user_id,
                    Notification.organization_id
                    == organization_id,
                    Notification.is_read.is_(False),
                )
            )
            or 0
        )