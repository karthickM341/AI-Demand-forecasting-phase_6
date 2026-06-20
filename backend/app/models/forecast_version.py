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
)

from sqlalchemy.orm import (
    Mapped,
    mapped_column,
)

from app.core.database import Base


class VersionStatus(str, Enum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    APPROVED = "approved"
    REJECTED = "rejected"
    ARCHIVED = "archived"


class ForecastVersion(Base):
    """
    Forecast Version Control Model
    """

    __tablename__ = "forecast_versions"

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

    version_number: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        default=1,
    )

    status: Mapped[VersionStatus] = mapped_column(
        SqlEnum(VersionStatus),
        default=VersionStatus.DRAFT,
        nullable=False,
        index=True,
    )

    forecast_value: Mapped[float] = mapped_column(
        Numeric(18, 2),
        nullable=False,
    )

    accuracy_score: Mapped[float | None] = mapped_column(
        Numeric(5, 2),
        nullable=True,
    )

    change_summary: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    metadata_json: Mapped[dict | None] = mapped_column(
        JSON,
        nullable=True,
    )

    created_by: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    approved_by: Mapped[int | None] = mapped_column(
        ForeignKey("users.id"),
        nullable=True,
    )

    approved_at: Mapped[datetime | None] = mapped_column(
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

    @property
    def is_latest(self) -> bool:
        """
        Used by service layer to identify
        the most recent version.
        """
        return self.status != VersionStatus.ARCHIVED

    @property
    def is_approved(self) -> bool:
        return self.status == VersionStatus.APPROVED

    @property
    def is_draft(self) -> bool:
        return self.status == VersionStatus.DRAFT

    def approve(
        self,
        approver_id: int,
    ) -> None:
        """
        Approve forecast version.
        """
        self.status = VersionStatus.APPROVED
        self.approved_by = approver_id
        self.approved_at = datetime.utcnow()

    def archive(self) -> None:
        """
        Archive forecast version.
        """
        self.status = VersionStatus.ARCHIVED

    def __repr__(self) -> str:
        return (
            f"<ForecastVersion("
            f"id={self.id}, "
            f"forecast_id={self.forecast_id}, "
            f"version={self.version_number}, "
            f"status='{self.status.value}'"
            f")>"
        )