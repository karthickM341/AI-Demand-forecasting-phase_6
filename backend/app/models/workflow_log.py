from datetime import datetime
from enum import Enum
from sqlalchemy import (
    DateTime,
    Enum as SqlEnum,
    ForeignKey,
    Integer,
    JSON,
    Numeric,
    String,
    Text,
)
from sqlalchemy.orm import (
    Mapped,
    mapped_column,
)
from app.core.database import Base


class WorkflowStatus(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"


class WorkflowLog(Base):
    """
    Enterprise Workflow Execution Log

    Supports:
    - Workflow Monitoring
    - Execution History
    - Failure Tracking
    - Performance Metrics
    - Audit Compliance
    """

    __tablename__ = "workflow_logs"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    workflow_id: Mapped[int] = mapped_column(
        ForeignKey("workflows.id"),
        nullable=False,
        index=True,
    )

    organization_id: Mapped[int] = mapped_column(
        ForeignKey("organizations.id"),
        nullable=False,
        index=True,
    )

    execution_id: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
        unique=True,
        index=True,
    )

    workflow_name: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    status: Mapped[WorkflowStatus] = mapped_column(
        SqlEnum(WorkflowStatus),
        default=WorkflowStatus.PENDING,
        nullable=False,
        index=True,
    )

    triggered_by: Mapped[int | None] = mapped_column(
        ForeignKey("users.id"),
        nullable=True,
    )

    execution_time_seconds: Mapped[float | None] = mapped_column(
        Numeric(10, 2),
        nullable=True,
    )

    input_data: Mapped[dict | None] = mapped_column(
        JSON,
        nullable=True,
    )

    output_data: Mapped[dict | None] = mapped_column(
        JSON,
        nullable=True,
    )

    error_message: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    started_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    completed_at: Mapped[datetime | None] = mapped_column(
        DateTime,
        nullable=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    @property
    def is_successful(self) -> bool:
        return self.status == WorkflowStatus.COMPLETED

    @property
    def has_failed(self) -> bool:
        return self.status == WorkflowStatus.FAILED

    def start(self) -> None:
        """
        Mark workflow as running.
        """
        self.status = WorkflowStatus.RUNNING
        self.started_at = datetime.utcnow()

    def complete(
        self,
        execution_time: float,
        output: dict | None = None,
    ) -> None:
        """
        Mark workflow as completed.
        """
        self.status = WorkflowStatus.COMPLETED
        self.execution_time_seconds = execution_time
        self.output_data = output
        self.completed_at = datetime.utcnow()

    def fail(
        self,
        error: str,
    ) -> None:
        """
        Mark workflow as failed.
        """
        self.status = WorkflowStatus.FAILED
        self.error_message = error
        self.completed_at = datetime.utcnow()

    def cancel(self) -> None:
        """
        Cancel workflow execution.
        """
        self.status = WorkflowStatus.CANCELLED
        self.completed_at = datetime.utcnow()

    def __repr__(self) -> str:
        return (
            f"<WorkflowLog("
            f"id={self.id}, "
            f"workflow='{self.workflow_name}', "
            f"status='{self.status.value}'"
            f")>"
        )