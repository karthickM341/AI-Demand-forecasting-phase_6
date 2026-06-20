from datetime import datetime
from enum import Enum

from sqlalchemy import (
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
)

from app.core.database import Base


class PlanningPeriod(str, Enum):
    ANNUAL = "annual"
    QUARTERLY = "quarterly"


class PlanningStatus(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"
    COMPLETED = "completed"
    ARCHIVED = "archived"


class Planning(Base):
    """
    Enterprise Strategic Planning Model

    Supports:
    - Annual Planning
    - Quarterly Planning
    - Business Targets
    - Forecast Alignment
    - Executive Planning
    """

    __tablename__ = "planning"

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

    title: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
        index=True,
    )

    period_type: Mapped[PlanningPeriod] = mapped_column(
        SqlEnum(PlanningPeriod),
        nullable=False,
        index=True,
    )

    fiscal_year: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        index=True,
    )

    quarter: Mapped[int | None] = mapped_column(
        Integer,
        nullable=True,
    )

    target_revenue: Mapped[float] = mapped_column(
        Numeric(18, 2),
        nullable=False,
    )

    target_demand: Mapped[float] = mapped_column(
        Numeric(18, 2),
        nullable=False,
    )

    forecasted_demand: Mapped[float | None] = mapped_column(
        Numeric(18, 2),
        nullable=True,
    )

    achievement_percentage: Mapped[float | None] = mapped_column(
        Numeric(5, 2),
        nullable=True,
    )

    status: Mapped[PlanningStatus] = mapped_column(
        SqlEnum(PlanningStatus),
        default=PlanningStatus.DRAFT,
        nullable=False,
        index=True,
    )

    recommendations: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    created_by: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
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
    def demand_gap(self) -> float:
        """
        Difference between target and forecast.
        """
        if self.forecasted_demand is None:
            return 0.0

        return round(
            float(self.target_demand) -
            float(self.forecasted_demand),
            2,
        )

    @property
    def is_on_track(self) -> bool:
        """
        Planning health indicator.
        """
        if self.achievement_percentage is None:
            return False

        return float(self.achievement_percentage) >= 90

    def activate(self) -> None:
        self.status = PlanningStatus.ACTIVE

    def complete(self) -> None:
        self.status = PlanningStatus.COMPLETED

    def archive(self) -> None:
        self.status = PlanningStatus.ARCHIVED

    def __repr__(self) -> str:
        return (
            f"<Planning("
            f"id={self.id}, "
            f"title='{self.title}', "
            f"year={self.fiscal_year}"
            f")>"
        )