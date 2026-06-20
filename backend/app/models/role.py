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
)
from app.core.database import Base


class RoleType(str, Enum):
    ADMIN = "admin"
    MANAGER = "manager"
    ANALYST = "analyst"
    EXECUTIVE = "executive"
    VIEWER = "viewer"


class Role(Base):
    """
    Enterprise Role Model

    Supports:
    - RBAC
    - Permission Management
    - Organization Security
    - Governance Controls
    """

    __tablename__ = "roles"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    name: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        nullable=False,
        index=True,
    )

    role_type: Mapped[RoleType] = mapped_column(
        SqlEnum(RoleType),
        nullable=False,
        unique=True,
    )

    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    permissions: Mapped[dict] = mapped_column(
        JSON,
        default=dict,
        nullable=False,
    )

    is_system_role: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
        nullable=False,
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

    @property
    def permission_count(self) -> int:
        """
        Number of assigned permissions.
        """
        return len(self.permissions or {})

    def has_permission(
        self,
        permission: str,
    ) -> bool:
        """
        Check permission access.
        """
        return bool(
            self.permissions.get(permission)
        )

    def add_permission(
        self,
        permission: str,
    ) -> None:
        """
        Grant permission.
        """
        self.permissions[permission] = True

    def remove_permission(
        self,
        permission: str,
    ) -> None:
        """
        Revoke permission.
        """
        self.permissions.pop(
            permission,
            None,
        )

    def deactivate(self) -> None:
        """
        Disable role.
        """
        self.is_active = False

    def activate(self) -> None:
        """
        Enable role.
        """
        self.is_active = True

    def __repr__(self) -> str:
        return (
            f"<Role("
            f"id={self.id}, "
            f"name='{self.name}', "
            f"type='{self.role_type.value}'"
            f")>"
        )