from datetime import datetime
from enum import Enum
from pydantic import (
    BaseModel,
    ConfigDict,
    EmailStr,
    Field,
)

class OrganizationStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    SUSPENDED = "suspended"


# Create Organization
class OrganizationCreate(BaseModel):
    name: str = Field(
        ...,
        min_length=3,
        max_length=255,
    )
    code: str = Field(
        ...,
        min_length=2,
        max_length=50,
    )
    description: str | None = Field(
        default=None,
        max_length=1000,
    )
    industry: str | None = Field(
        default=None,
        max_length=100,
    )
    contact_email: EmailStr | None = None
    contact_phone: str | None = Field(
        default=None,
        max_length=30,
    )


# Update Organization
class OrganizationUpdate(BaseModel):
    name: str | None = Field(
        default=None,
        min_length=3,
        max_length=255,
    )
    description: str | None = Field(
        default=None,
        max_length=1000,
    )
    industry: str | None = Field(
        default=None,
        max_length=100,
    )
    contact_email: EmailStr | None = None
    contact_phone: str | None = Field(
        default=None,
        max_length=30,
    )
    status: OrganizationStatus | None = None


# Organization Settings
class OrganizationSettings(BaseModel):
    forecast_horizon_days: int = 30
    approval_required: bool = True
    auto_retraining: bool = True
    notification_enabled: bool = True
    data_quality_threshold: int = 80


class OrganizationSettingsUpdate(BaseModel):
    forecast_horizon_days: int | None = None
    approval_required: bool | None = None
    auto_retraining: bool | None = None
    notification_enabled: bool | None = None
    data_quality_threshold: int | None = None


# Organization Response
class OrganizationResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    id: int
    name: str
    code: str
    description: str | None
    industry: str | None
    contact_email: str | None
    contact_phone: str | None
    status: OrganizationStatus
    is_active: bool
    settings: dict
    created_at: datetime
    updated_at: datetime

# Organization Summary
class OrganizationSummary(BaseModel):
    id: int
    name: str
    code: str
    status: OrganizationStatus

# Organization Metrics
class OrganizationMetrics(BaseModel):
    total_organizations: int
    active_organizations: int
    suspended_organizations: int
    inactive_organizations: int

# Executive Dashboard
class OrganizationDashboard(BaseModel):
    metrics: OrganizationMetrics
    organizations: list[
        OrganizationSummary
    ]

# Search Organization
class OrganizationSearch(BaseModel):
    keyword: str = Field(
        ...,
        min_length=1,
        max_length=100,
    )

# Organization Members
class MemberCreate(BaseModel):
    first_name: str = Field(
        ...,
        min_length=2,
        max_length=100,
    )

    last_name: str = Field(
        ...,
        min_length=2,
        max_length=100,
    )

    email: EmailStr

    role_id: int = Field(
        ...,
        gt=0,
    )


class MemberUpdate(BaseModel):
    first_name: str | None = Field(
        default=None,
        min_length=2,
        max_length=100,
    )

    last_name: str | None = Field(
        default=None,
        min_length=2,
        max_length=100,
    )

    role_id: int | None = None

    is_active: bool | None = None


class MemberResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    id: int
    email: EmailStr
    first_name: str
    last_name: str
    role_id: int
    is_active: bool

# Organization Invitations
class OrganizationInvite(BaseModel):
    email: EmailStr

    role_id: int = Field(
        ...,
        gt=0,
    )

    message: str | None = Field(
        default=None,
        max_length=500,
    )

class OrganizationInviteResponse(BaseModel):
    success: bool
    message: str

# Organization Users
class OrganizationUserSummary(BaseModel):
    id: int
    email: EmailStr
    role_id: int