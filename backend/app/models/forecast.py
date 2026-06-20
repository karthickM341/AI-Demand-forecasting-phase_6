from datetime import datetime
from enum import Enum

from sqlalchemy import (
    Date,
    DateTime,
    Enum as SqlEnum,
    ForeignKey,
    Integer,
    Numeric,
    String,
    Text,
)

from sqlalchemy.orm import (
    Mapped,
    mapped_column,
    relationship,
)

from app.core.database import Base


class ForecastStatus(str, Enum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    APPROVED = "approved"
    REJECTED = "rejected"
    ACTIVE = "active"
    ARCHIVED = "archived"


class Forecast(Base):
    """
    Enterprise Forecast Model
    """

    __tablename__ = "forecasts"

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

    forecast_period_start: Mapped[Date] = mapped_column(
        Date,
        nullable=False,
    )

    forecast_period_end: Mapped[Date] = mapped_column(
        Date,
        nullable=False,
    )

    predicted_demand: Mapped[float] = mapped_column(
        Numeric(18, 2),
        nullable=False,
    )

    confidence_score: Mapped[float | None] = mapped_column(
        Numeric(5, 2),
        nullable=True,
    )

    accuracy_score: Mapped[float | None] = mapped_column(
        Numeric(5, 2),
        nullable=True,
    )

    model_name: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    status: Mapped[ForecastStatus] = mapped_column(
        SqlEnum(ForecastStatus),
        default=ForecastStatus.DRAFT,
        nullable=False,
        index=True,
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

    # Relationships
    versions = relationship(
        "ForecastVersion",
        back_populates="forecast",
        cascade="all, delete-orphan",
    )

    approvals = relationship(
        "Approval",
        cascade="all, delete-orphan",
    )

    # Helper Properties
    @property
    def is_approved(self) -> bool:
        return self.status == ForecastStatus.APPROVED

    @property
    def is_active(self) -> bool:
        return self.status == ForecastStatus.ACTIVE

    @property
    def is_archived(self) -> bool:
        return self.status == ForecastStatus.ARCHIVED

    # Business Methods
    def submit(self) -> None:
        self.status = ForecastStatus.SUBMITTED

    def approve(
        self,
        approver_id: int,
    ) -> None:
        self.status = ForecastStatus.APPROVED
        self.approved_by = approver_id
        self.approved_at = datetime.utcnow()

    def reject(self) -> None:
        self.status = ForecastStatus.REJECTED

    def activate(self) -> None:
        self.status = ForecastStatus.ACTIVE

    def archive(self) -> None:
        self.status = ForecastStatus.ARCHIVED

    def __repr__(self) -> str:
        return (
            f"<Forecast("
            f"id={self.id}, "
            f"name='{self.name}', "
            f"status='{self.status.value}'"
            f")>"
        )