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
    relationship,
)

from app.core.database import Base


class WorkflowType(str, Enum):
    FORECAST_GENERATION = "forecast_generation"
    REPORT_GENERATION = "report_generation"
    KPI_MONITORING = "kpi_monitoring"
    DATA_QUALITY = "data_quality"
    APPROVAL_PROCESS = "approval_process"
    NOTIFICATION = "notification"
    MODEL_RETRAINING = "model_retraining"


class WorkflowStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    PAUSED = "paused"


class Workflow(Base):
    """
    Enterprise Workflow Definition

    Supports:
    - Workflow Automation
    - Scheduled Execution
    - Event-Based Triggers
    - Multi-Organization Workflows
    - Governance Monitoring
    """

    __tablename__ = "workflows"

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

    name: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
        index=True,
    )

    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    workflow_type: Mapped[WorkflowType] = mapped_column(
        SqlEnum(WorkflowType),
        nullable=False,
        index=True,
    )

    status: Mapped[WorkflowStatus] = mapped_column(
        SqlEnum(WorkflowStatus),
        default=WorkflowStatus.ACTIVE,
        nullable=False,
        index=True,
    )

    trigger_type: Mapped[str] = mapped_column(
        String(50),
        default="schedule",
    )

    schedule_expression: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    configuration: Mapped[dict] = mapped_column(
        JSON,
        default=dict,
        nullable=False,
    )

    is_enabled: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
        nullable=False,
    )

    created_by: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    last_executed_at: Mapped[datetime | None] = mapped_column(
        DateTime,
        nullable=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )

    # Relationships
    logs = relationship(
        "WorkflowLog",
        cascade="all, delete-orphan",
        lazy="select",
    )

    # Helper Properties
    @property
    def can_execute(self) -> bool:
        return (
            self.status == WorkflowStatus.ACTIVE
            and self.is_enabled
        )

    # Business Methods
    def activate(self) -> None:
        self.status = WorkflowStatus.ACTIVE
        self.is_enabled = True

    def pause(self) -> None:
        self.status = WorkflowStatus.PAUSED

    def deactivate(self) -> None:
        self.status = WorkflowStatus.INACTIVE
        self.is_enabled = False

    def mark_executed(self) -> None:
        self.last_executed_at = datetime.utcnow()

    def update_configuration(
        self,
        config: dict,
    ) -> None:
        self.configuration.update(config)

    def __repr__(self) -> str:
        return (
            f"<Workflow("
            f"id={self.id}, "
            f"name='{self.name}', "
            f"type='{self.workflow_type.value}'"
            f")>"
        )