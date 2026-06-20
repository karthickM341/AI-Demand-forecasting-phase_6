from datetime import datetime
from enum import Enum
from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
)


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

# Create Notification
class NotificationCreate(BaseModel):
    user_id: int = Field(..., gt=0)
    title: str = Field(
        ...,
        min_length=3,
        max_length=255,
    )
    message: str = Field(
        ...,
        min_length=5,
        max_length=2000,
    )
    notification_type: NotificationType
    priority: NotificationPriority = (NotificationPriority.MEDIUM)
    action_url: str | None = Field(default=None,max_length=500,)
    metadata_json: dict | None = None

# Bulk Notification
class BulkNotificationCreate(BaseModel):
    user_ids: list[int]
    title: str
    message: str
    notification_type: NotificationType
    priority: NotificationPriority = (
        NotificationPriority.MEDIUM
    )

# Notification Response
class NotificationResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    id: int
    organization_id: int
    user_id: int
    title: str
    message: str
    notification_type: NotificationType
    priority: NotificationPriority
    is_read: bool
    action_url: str | None
    metadata_json: dict | None
    read_at: datetime | None
    created_at: datetime

# Notification Summary
class NotificationSummary(BaseModel):
    id: int
    title: str
    notification_type: NotificationType
    priority: NotificationPriority
    is_read: bool
    created_at: datetime

# Notification Metrics
class NotificationMetrics(BaseModel):
    total_notifications: int
    unread_notifications: int
    critical_alerts: int

# Notification Dashboard
class NotificationDashboard(BaseModel):
    metrics: NotificationMetrics
    recent_notifications: list[
        NotificationSummary
    ]

# Mark Read
class NotificationReadResponse(BaseModel):
    success: bool
    message: str

# Notification Preferences
class NotificationPreferences(BaseModel):
    email_notifications: bool = True
    forecast_alerts: bool = True
    approval_notifications: bool = True
    kpi_alerts: bool = True
    executive_reports: bool = False
    workflow_notifications: bool = True

# Notification Filter
class NotificationFilter(BaseModel):
    notification_type: (
        NotificationType | None
    ) = None

    priority: (
        NotificationPriority | None
    ) = None

    is_read: bool | None = None

    class NotificationPreferences(BaseModel):  
        email_notifications: bool = True
        forecast_alerts: bool = True
        approval_notifications: bool = True
        kpi_alerts: bool = True
        executive_reports: bool = False
        workflow_notifications: bool = True


class NotificationPreferenceUpdate(BaseModel):
    email_notifications: bool | None = None
    forecast_alerts: bool | None = None
    approval_notifications: bool | None = None
    kpi_alerts: bool | None = None
    executive_reports: bool | None = None
    workflow_notifications: bool | None = None

    model_config = ConfigDict(
        extra="ignore"
    )