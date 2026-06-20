from datetime import datetime
from enum import Enum

from pydantic import (
    BaseModel,
    ConfigDict,
    EmailStr,
    Field,
)


class UserStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    SUSPENDED = "suspended"


class UserRole(str, Enum):
    SUPER_ADMIN = "super_admin"
    ADMIN = "admin"
    ANALYST = "analyst"
    VIEWER = "viewer"


# Create User
class UserCreate(BaseModel):
    full_name: str = Field(
        ...,
        min_length=3,
        max_length=255,
    )

    email: EmailStr

    password: str = Field(
        ...,
        min_length=6,
        max_length=128,
    )

    organization_id: int
    role_id: int


# Update User
class UserUpdate(BaseModel):
    full_name: str | None = Field(
        default=None,
        min_length=3,
        max_length=255,
    )

    email: EmailStr | None = None
    role_id: int | None = None
    status: UserStatus | None = None


# Change Password
class PasswordChange(BaseModel):
    current_password: str
    new_password: str = Field(
        ...,
        min_length=6,
        max_length=128,
    )


# User Response
class UserResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    id: int
    full_name: str
    email: str
    organization_id: int
    role_id: int | None
    status: UserStatus
    is_verified: bool | None = False
    created_at: datetime
    updated_at: datetime | None = None


# User Summary
class UserSummary(BaseModel):
    id: int
    full_name: str
    email: str
    status: UserStatus


# User Metrics
class UserMetrics(BaseModel):
    total_users: int
    active_users: int
    inactive_users: int
    suspended_users: int


# User Dashboard
class UserDashboard(BaseModel):
    metrics: UserMetrics
    users: list[UserSummary]


# User Search
class UserSearch(BaseModel):
    keyword: str = Field(
        ...,
        min_length=1,
        max_length=100,
    )


# Login Request
class LoginRequest(BaseModel):
    email: EmailStr
    password: str


# Token Response
class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"


# Current User
class CurrentUser(BaseModel):
    id: int
    full_name: str
    email: str
    organization_id: int
    role_id: int | None

# Role Assignment
class RoleAssignment(BaseModel):
    user_id: int = Field(
        ...,
        gt=0,
    )

    role_id: int = Field(
        ...,
        gt=0,
    )


# Role Assignment Response
class RoleAssignmentResponse(BaseModel):
    success: bool
    message: str
    user_id: int
    role_id: int