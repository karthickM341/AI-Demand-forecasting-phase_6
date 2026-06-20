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
)
from sqlalchemy.orm import (
    Mapped,
    mapped_column,
    relationship,
)
from app.core.database import Base


class UserStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    SUSPENDED = "suspended"
    LOCKED = "locked"


class User(Base):
    """
    Enterprise User Model

    Supports:
    - Authentication
    - Multi-Organization Access
    - RBAC
    - Notification Preferences
    - Audit Tracking
    """

    __tablename__ = "users"

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

    role_id: Mapped[int] = mapped_column(
        ForeignKey("roles.id"),
        nullable=False,
        index=True,
    )

    first_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    last_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    username: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        nullable=False,
        index=True,
    )

    password_hash: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    phone_number: Mapped[str | None] = mapped_column(
        String(30),
        nullable=True,
    )

    status: Mapped[UserStatus] = mapped_column(
        SqlEnum(UserStatus),
        default=UserStatus.ACTIVE,
        nullable=False,
        index=True,
    )

    is_verified: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False,
    )

    notification_preferences: Mapped[dict] = mapped_column(
        JSON,
        default=dict,
        nullable=False,
    )

    last_login_at: Mapped[datetime | None] = mapped_column(
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
    organization = relationship(
        "Organization",
        back_populates="users",
    )

    role = relationship(
        "Role",
        lazy="joined",
    )

    # Computed Properties
    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}"

    @property
    def is_active(self) -> bool:
        return self.status == UserStatus.ACTIVE

    @property
    def is_admin(self) -> bool:
        return (
            self.role is not None
            and self.role.name.lower() == "admin"
        )

    # Business Methods
    def activate(self) -> None:
        self.status = UserStatus.ACTIVE

    def suspend(self) -> None:
        self.status = UserStatus.SUSPENDED

    def deactivate(self) -> None:
        self.status = UserStatus.INACTIVE

    def lock_account(self) -> None:
        self.status = UserStatus.LOCKED

    def update_last_login(self) -> None:
        self.last_login_at = datetime.utcnow()

    def update_preferences(
        self,
        preferences: dict,
    ) -> None:
        self.notification_preferences.update(
            preferences
        )

    def __repr__(self) -> str:
        return (
            f"<User("
            f"id={self.id}, "
            f"email='{self.email}', "
            f"status='{self.status.value}'"
            f")>"
        )