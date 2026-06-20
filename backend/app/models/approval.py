from datetime import datetime
from enum import Enum

from sqlalchemy import (
    DateTime,
    Enum as SqlEnum,
    ForeignKey,
    Integer,
    String,
    Text,
)

from sqlalchemy.orm import (
    Mapped,
    mapped_column,
)

from app.core.database import Base


class ApprovalStatus(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"


class Approval(Base):
    """
    Forecast Approval Workflow Model
    """

    __tablename__ = "forecast_approvals"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    forecast_id: Mapped[int] = mapped_column(
        ForeignKey("forecasts.id"),
        nullable=False,
        index=True,
    )

    organization_id: Mapped[int] = mapped_column(
        ForeignKey("organizations.id"),
        nullable=False,
        index=True,
    )

    submitted_by: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    reviewed_by: Mapped[int | None] = mapped_column(
        ForeignKey("users.id"),
        nullable=True,
    )

    status: Mapped[ApprovalStatus] = mapped_column(
        SqlEnum(ApprovalStatus),
        default=ApprovalStatus.PENDING,
        nullable=False,
    )

    comments: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    submitted_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )

    reviewed_at: Mapped[datetime | None] = mapped_column(
        DateTime,
        nullable=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )

    def approve(
        self,
        reviewer_id: int,
        comments: str | None = None,
    ) -> None:
        """
        Approve forecast.
        """
        self.status = ApprovalStatus.APPROVED
        self.reviewed_by = reviewer_id
        self.reviewed_at = datetime.utcnow()
        self.comments = comments

    def reject(
        self,
        reviewer_id: int,
        comments: str,
    ) -> None:
        """
        Reject forecast.
        """
        self.status = ApprovalStatus.REJECTED
        self.reviewed_by = reviewer_id
        self.reviewed_at = datetime.utcnow()
        self.comments = comments

    @property
    def is_pending(self) -> bool:
        return self.status == ApprovalStatus.PENDING

    @property
    def is_approved(self) -> bool:
        return self.status == ApprovalStatus.APPROVED

    @property
    def is_rejected(self) -> bool:
        return self.status == ApprovalStatus.REJECTED

    def __repr__(self) -> str:
        return (
            f"<Approval("
            f"id={self.id}, "
            f"forecast_id={self.forecast_id}, "
            f"status='{self.status.value}'"
            f")>"
        )