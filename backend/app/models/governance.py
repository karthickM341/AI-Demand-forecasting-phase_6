from datetime import datetime
from enum import Enum

from sqlalchemy import (
    Boolean,
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


class GovernanceStatus(str, Enum):
    COMPLIANT = "compliant"
    REVIEW_REQUIRED = "review_required"
    NON_COMPLIANT = "non_compliant"


class LifecycleStage(str, Enum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    APPROVED = "approved"
    ACTIVE = "active"
    ARCHIVED = "archived"


class GovernanceRecord(Base):
    """
    Forecast Governance & Compliance Record
    """

    __tablename__ = "forecast_governance"

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

    version_id: Mapped[int | None] = mapped_column(
        ForeignKey("forecast_versions.id"),
        nullable=True,
    )

    governance_status: Mapped[GovernanceStatus] = mapped_column(
        SqlEnum(GovernanceStatus),
        default=GovernanceStatus.COMPLIANT,
        nullable=False,
        index=True,
    )

    lifecycle_stage: Mapped[LifecycleStage] = mapped_column(
        SqlEnum(LifecycleStage),
        default=LifecycleStage.DRAFT,
        nullable=False,
        index=True,
    )

    approval_required: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )

    approved_by: Mapped[int | None] = mapped_column(
        ForeignKey("users.id"),
        nullable=True,
    )

    compliance_notes: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    last_reviewed_at: Mapped[datetime | None] = mapped_column(
        DateTime,
        nullable=True,
    )

    reviewed_by: Mapped[int | None] = mapped_column(
        ForeignKey("users.id"),
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

    @property
    def requires_attention(self) -> bool:
        """
        Indicates governance review requirement.
        """
        return self.governance_status != GovernanceStatus.COMPLIANT

    @property
    def is_compliant(self) -> bool:
        return self.governance_status == GovernanceStatus.COMPLIANT

    def mark_reviewed(
        self,
        reviewer_id: int,
    ) -> None:
        """
        Update governance review details.
        """
        self.reviewed_by = reviewer_id
        self.last_reviewed_at = datetime.utcnow()

    def mark_non_compliant(
        self,
        notes: str,
    ) -> None:
        """
        Mark governance violation.
        """
        self.governance_status = GovernanceStatus.NON_COMPLIANT
        self.compliance_notes = notes

    def __repr__(self) -> str:
        return (
            f"<GovernanceRecord("
            f"id={self.id}, "
            f"forecast_id={self.forecast_id}, "
            f"status='{self.governance_status.value}'"
            f")>"
        )