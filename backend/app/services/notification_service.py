from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.models.notification import (
    Notification,
    NotificationPriority,
)
from app.repositories.notification_repo import (
    NotificationRepository,
)
from app.services.audit_service import (
    AuditService,
)


class NotificationService:
    """
    Enterprise Notification Service

    Features:
    - User Notifications
    - Organization Announcements
    - KPI Alerts
    - Workflow Alerts
    - Approval Notifications
    - Notification Analytics
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.repo = NotificationRepository(db)
        self.audit_service = AuditService(db)

    # Create Notification
    def create_notification(
        self,
        notification: Notification,
        actor_id: int | None = None,
    ) -> Notification:
        """
        Create notification.
        """

        created = self.repo.create(
            notification
        )

        if actor_id:
            self.audit_service.log_event(
                organization_id=created.organization_id,
                user_id=actor_id,
                action="notification_created",
                entity_type="notification",
                entity_id=created.id,
            )

        return created

    # Bulk Notifications
    def send_bulk_notification(
        self,
        organization_id: int,
        user_ids: list[int],
        title: str,
        message: str,
        notification_type: str,
        priority: NotificationPriority = (
            NotificationPriority.MEDIUM
        ),
    ) -> int:
        """
        Send notifications to multiple users.
        """

        notifications = [
            Notification(
                organization_id=organization_id,
                user_id=user_id,
                title=title,
                message=message,
                notification_type=notification_type,
                priority=priority,
            )
            for user_id in user_ids
        ]

        self.repo.bulk_create(
            notifications
        )

        return len(notifications)

    # User Notifications
    def user_notifications(
        self,
        user_id: int,
        organization_id: int,
    ):
        return (
            self.repo.get_user_notifications(
                user_id=user_id,
                organization_id=organization_id,
            )
        )

    def unread_notifications(
        self,
        user_id: int,
        organization_id: int,
    ):
        return (
            self.repo.get_unread_notifications(
                user_id=user_id,
                organization_id=organization_id,
            )
        )

    # Read Management
    def mark_as_read(
        self,
        notification_id: int,
        organization_id: int,
    ) -> Notification:
        """
        Mark notification as read.
        """

        notification = self.repo.get_by_id(
            notification_id,
            organization_id,
        )

        if not notification:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Notification not found",
            )

        return self.repo.mark_as_read(
            notification
        )

    def mark_all_as_read(
        self,
        user_id: int,
        organization_id: int,
    ) -> int:
        """
        Mark all notifications as read.
        """

        return self.repo.mark_all_as_read(
            user_id=user_id,
            organization_id=organization_id,
        )

    # Alert Notifications
    def send_kpi_alert(
        self,
        organization_id: int,
        user_id: int,
        kpi_name: str,
        message: str,
    ) -> Notification:

        notification = Notification(
            organization_id=organization_id,
            user_id=user_id,
            title=f"KPI Alert: {kpi_name}",
            message=message,
            notification_type="kpi",
            priority=NotificationPriority.HIGH,
        )

        return self.repo.create(
            notification
        )

    def send_approval_alert(
        self,
        organization_id: int,
        user_id: int,
        forecast_name: str,
    ) -> Notification:

        notification = Notification(
            organization_id=organization_id,
            user_id=user_id,
            title="Forecast Approval Required",
            message=(
                f"Forecast '{forecast_name}' "
                "requires review."
            ),
            notification_type="approval",
            priority=NotificationPriority.HIGH,
        )

        return self.repo.create(
            notification
        )

    def send_system_alert(
        self,
        organization_id: int,
        user_id: int,
        title: str,
        message: str,
    ) -> Notification:

        notification = Notification(
            organization_id=organization_id,
            user_id=user_id,
            title=title,
            message=message,
            notification_type="system",
            priority=NotificationPriority.CRITICAL,
        )

        return self.repo.create(
            notification
        )

    # Executive Analytics
    def dashboard_metrics(
        self,
        organization_id: int,
    ) -> dict:
        """
        Notification dashboard.
        """

        return self.repo.get_metrics(
            organization_id
        )

    def executive_alerts(
        self,
        organization_id: int,
    ):
        """
        High-priority notifications.
        """

        return (
            self.repo.get_priority_alerts(
                organization_id
            )
        )

    # Notification Statistics
    def unread_count(
        self,
        user_id: int,
        organization_id: int,
    ) -> int:
        return self.repo.unread_count(
            user_id=user_id,
            organization_id=organization_id,
        )