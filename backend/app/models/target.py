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


class TargetType(str, Enum):
    REVENUE = "revenue"
    DEMAND = "demand"
    SALES = "sales"
    INVENTORY = "inventory"
    KPI = "kpi"


class TargetStatus(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"
    ACHIEVED = "achieved"
    MISSED = "missed"
    ARCHIVED = "archived"


class BusinessTarget(Base):
    """
    Enterprise Business Target Model

    Supports:
    - Annual Targets
    - Quarterly Targets
    - KPI Targets
    - Forecast Comparison
    - Strategic Planning
    """

    __tablename__ = "business_targets"

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

    planning_id: Mapped[int | None] = mapped_column(
        ForeignKey("planning.id"),
        nullable=True,
        index=True,
    )

    name: Mapped[str] = mapped_column(
        String(200),
        nullable=False,
        index=True,
    )

    target_type: Mapped[TargetType] = mapped_column(
        SqlEnum(TargetType),
        nullable=False,
        index=True,
    )

    target_value: Mapped[float] = mapped_column(
        Numeric(18, 2),
        nullable=False,
    )

    actual_value: Mapped[float] = mapped_column(
        Numeric(18, 2),
        default=0,
        nullable=False,
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

    status: Mapped[TargetStatus] = mapped_column(
        SqlEnum(TargetStatus),
        default=TargetStatus.DRAFT,
        nullable=False,
        index=True,
    )

    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    owner_id: Mapped[int] = mapped_column(
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
    def achievement_percentage(self) -> float:
        """
        Target achievement percentage.
        """

        if float(self.target_value) <= 0:
            return 0.0

        return round(
            (float(self.actual_value) /
             float(self.target_value)) * 100,
            2,
        )

    @property
    def variance(self) -> float:
        """
        Difference between target and actual.
        """

        return round(
            float(self.actual_value) -
            float(self.target_value),
            2,
        )

    @property
    def is_on_track(self) -> bool:
        """
        Business target health.
        """

        return self.achievement_percentage >= 90

    def activate(self) -> None:
        self.status = TargetStatus.ACTIVE

    def mark_achieved(self) -> None:
        self.status = TargetStatus.ACHIEVED

    def mark_missed(self) -> None:
        self.status = TargetStatus.MISSED

    def archive(self) -> None:
        self.status = TargetStatus.ARCHIVED

    def __repr__(self) -> str:
        return (
            f"<BusinessTarget("
            f"id={self.id}, "
            f"name='{self.name}', "
            f"achievement={self.achievement_percentage}%"
            f")>"
        )