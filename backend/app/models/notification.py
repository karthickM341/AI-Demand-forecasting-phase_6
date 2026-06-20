from datetime import datetime
from enum import Enum

from sqlalchemy import (
    Boolean,
    DateTime,
    Enum as SqlEnum,
    ForeignKey,
    Integer,
    JSON,
    String,
    Text,
)

from sqlalchemy.orm import (
    Mapped,
    mapped_column,
)

from app.core.database import Base


class NotificationType(str, Enum):
    FORECAST = "forecast"
    APPROVAL = "approval"
    KPI = "kpi"
    WORKFLOW = "workflow"
    GOVERNANCE = "governance"
    QUALITY = "quality"
    EXECUTIVE = "executive"
    SYSTEM = "system"


class NotificationPriority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class Notification(Base):
    """
    Enterprise Notification Model
    """

    __tablename__ = "notifications"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    organization_id: Mapped[int] = mapped_column(
        ForeignKey("organizations.id"),
        nullable=False,
        index=True,
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
        index=True,
    )

    title: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    message: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )

    notification_type: Mapped[NotificationType] = mapped_column(
        SqlEnum(NotificationType),
        nullable=False,
        index=True,
    )

    priority: Mapped[NotificationPriority] = mapped_column(
        SqlEnum(NotificationPriority),
        default=NotificationPriority.MEDIUM,
        nullable=False,
        index=True,
    )

    is_read: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False,
    )

    action_url: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    metadata_json: Mapped[dict | None] = mapped_column(
        JSON,
        nullable=True,
    )

    read_at: Mapped[datetime | None] = mapped_column(
        DateTime,
        nullable=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
        index=True,
    )

    def mark_as_read(self) -> None:
        """
        Mark notification as read.
        """
        self.is_read = True
        self.read_at = datetime.utcnow()

    @property
    def is_unread(self) -> bool:
        """
        Check unread status.
        """
        return not self.is_read

    @property
    def requires_attention(self) -> bool:
        """
        Critical and high priority alerts.
        """
        return self.priority in (
            NotificationPriority.HIGH,
            NotificationPriority.CRITICAL,
        )

    def __repr__(self) -> str:
        return (
            f"<Notification("
            f"id={self.id}, "
            f"type='{self.notification_type.value}', "
            f"priority='{self.priority.value}'"
            f")>"
        )