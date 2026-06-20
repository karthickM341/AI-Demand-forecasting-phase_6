from datetime import datetime
from enum import Enum
from pydantic import BaseModel, ConfigDict, Field


class ApprovalAction(BaseModel):
    comments: str | None = Field(
        default=None,
        max_length=1000,
    )
class ApprovalStatus(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"

# Create Approval
class ApprovalCreate(BaseModel):
    forecast_id: int = Field(
        ...,
        gt=0,
        description="Forecast identifier"
    )
    comments: str | None = Field(
        default=None,
        max_length=1000,
    )

# Approval Actions
class ApprovalDecision(BaseModel):
    comments: str | None = Field(
        default=None,
        max_length=1000,
    )

# Approval Response
class ApprovalResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )
    id: int
    forecast_id: int
    organization_id: int
    submitted_by: int
    reviewed_by: int | None
    status: ApprovalStatus
    comments: str | None
    submitted_at: datetime
    reviewed_at: datetime | None

# Approval Summary
class ApprovalSummary(BaseModel):
    total: int
    approved: int
    rejected: int
    pending: int

# Approval History
class ApprovalHistory(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    status: ApprovalStatus
    comments: str | None
    submitted_by: int
    reviewed_by: int | None
    submitted_at: datetime
    reviewed_at: datetime | None