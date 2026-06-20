from enum import Enum
from fastapi import Depends, HTTPException, status
from app.services.auth_service import AuthService

class Role(str, Enum):
    ADMIN = "admin"
    MANAGER = "manager"
    ANALYST = "analyst"
    EXECUTIVE = "executive"
    VIEWER = "viewer"


class Permission:
    """
    Enterprise RBAC permission checker.
    """

    def __init__(self, allowed_roles: list[str]):
        self.allowed_roles = allowed_roles

    def __call__(
        self,
        current_user=Depends(AuthService.get_current_user),
    ):
        if current_user.role not in self.allowed_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Insufficient permissions",
            )

        return current_user

# Common Permissions
AdminOnly = Permission([
    Role.ADMIN,
])

ManagerOnly = Permission([
    Role.MANAGER,
    Role.ADMIN,
])

AnalystAccess = Permission([
    Role.ANALYST,
    Role.MANAGER,
    Role.ADMIN,
])

ExecutiveAccess = Permission([
    Role.EXECUTIVE,
    Role.MANAGER,
    Role.ADMIN,
])

ReadOnlyAccess = Permission([
    Role.VIEWER,
    Role.ANALYST,
    Role.EXECUTIVE,
    Role.MANAGER,
    Role.ADMIN,
])

# Module Permissions
ForecastPermission = Permission([
    Role.ANALYST,
    Role.MANAGER,
    Role.ADMIN,
])

ApprovalPermission = Permission([
    Role.MANAGER,
    Role.ADMIN,
])

WorkflowPermission = Permission([
    Role.ADMIN,
    Role.MANAGER,
])

GovernancePermission = Permission([
    Role.ADMIN,
    Role.MANAGER,
])

KpiPermission = Permission([
    Role.EXECUTIVE,
    Role.MANAGER,
    Role.ADMIN,
])

OrganizationPermission = Permission([
    Role.ADMIN,
])

ExecutivePermission = Permission([
    Role.EXECUTIVE,
    Role.ADMIN,
])

QualityPermission = Permission([
    Role.ANALYST,
    Role.MANAGER,
    Role.ADMIN,
])