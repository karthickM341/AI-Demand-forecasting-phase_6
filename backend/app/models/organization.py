from datetime import datetime
from enum import Enum

from sqlalchemy import (
    Boolean,
    DateTime,
    Enum as SqlEnum,
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


class OrganizationStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    SUSPENDED = "suspended"


class Organization(Base):
    """
    Enterprise Organization Model

    Supports:
    - Multi-tenancy
    - Organization settings
    - User segregation
    - Forecast ownership
    - Governance controls
    """

    __tablename__ = "organizations"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    name: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    code: Mapped[str] = mapped_column(
        String(50),
        unique=True,
        nullable=False,
        index=True,
    )

    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    industry: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    contact_email: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    contact_phone: Mapped[str | None] = mapped_column(
        String(50),
        nullable=True,
    )

    settings: Mapped[dict] = mapped_column(
        JSON,
        default=dict,
        nullable=False,
    )

    status: Mapped[OrganizationStatus] = mapped_column(
        SqlEnum(OrganizationStatus),
        default=OrganizationStatus.ACTIVE,
        nullable=False,
        index=True,
    )

    is_active: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
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

    # Relationships
    users = relationship(
        "User",
        back_populates="organization",
        cascade="all, delete-orphan",
    )

    forecasts = relationship(
        "Forecast",
        back_populates="organization",
        cascade="all, delete-orphan",
    )

    kpis = relationship(
        "KPI",
        cascade="all, delete-orphan",
    )

    notifications = relationship(
        "Notification",
        cascade="all, delete-orphan",
    )

    # Helper Properties
    @property
    def is_operational(self) -> bool:
        return (
            self.status == OrganizationStatus.ACTIVE
            and self.is_active
        )

   # Business Methods
    def activate(self) -> None:
        self.status = OrganizationStatus.ACTIVE
        self.is_active = True

    def suspend(self) -> None:
        self.status = OrganizationStatus.SUSPENDED

    def deactivate(self) -> None:
        self.status = OrganizationStatus.INACTIVE
        self.is_active = False

    def update_settings(
        self,
        values: dict,
    ) -> None:
        self.settings.update(values)

    def __repr__(self) -> str:
        return (
            f"<Organization("
            f"id={self.id}, "
            f"name='{self.name}', "
            f"status='{self.status.value}'"
            f")>"
        )