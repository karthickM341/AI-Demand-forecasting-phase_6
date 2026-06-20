from datetime import datetime
from enum import Enum

from sqlalchemy import (
    Boolean,
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


class KPIStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    ARCHIVED = "archived"


class KPI(Base):
    """
    Enterprise KPI Management Model
    """

    __tablename__ = "kpis"

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
        String(150),
        nullable=False,
        index=True,
    )

    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    category: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
        index=True,
    )

    unit: Mapped[str | None] = mapped_column(
        String(50),
        nullable=True,
    )

    target_value: Mapped[float] = mapped_column(
        Numeric(18, 2),
        nullable=False,
    )

    current_value: Mapped[float] = mapped_column(
        Numeric(18, 2),
        default=0,
    )

    warning_threshold: Mapped[float | None] = mapped_column(
        Numeric(18, 2),
        nullable=True,
    )

    critical_threshold: Mapped[float | None] = mapped_column(
        Numeric(18, 2),
        nullable=True,
    )

    status: Mapped[KPIStatus] = mapped_column(
        SqlEnum(KPIStatus),
        default=KPIStatus.ACTIVE,
        nullable=False,
        index=True,
    )

    forecast_linked: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
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
    def achievement_percentage(self) -> float:
        """
        KPI achievement percentage.
        """

        if self.target_value <= 0:
            return 0.0

        return round(
            (float(self.current_value) /
             float(self.target_value)) * 100,
            2,
        )

    @property
    def is_warning(self) -> bool:
        """
        Warning threshold check.
        """

        if self.warning_threshold is None:
            return False

        return (
            float(self.current_value)
            < float(self.warning_threshold)
        )

    @property
    def is_critical(self) -> bool:
        """
        Critical threshold check.
        """

        if self.critical_threshold is None:
            return False

        return (
            float(self.current_value)
            < float(self.critical_threshold)
        )

    def update_value(
        self,
        value: float,
    ) -> None:
        """
        Update KPI value.
        """

        self.current_value = value

    def archive(self) -> None:
        """
        Archive KPI.
        """

        self.status = KPIStatus.ARCHIVED

    def __repr__(self) -> str:
        return (
            f"<KPI("
            f"id={self.id}, "
            f"name='{self.name}', "
            f"achievement={self.achievement_percentage}%"
            f")>"
        )