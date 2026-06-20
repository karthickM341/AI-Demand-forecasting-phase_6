from datetime import datetime
from enum import Enum
from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
)

class GovernanceStatus(str, Enum):
    COMPLIANT = "compliant"
    REVIEW_REQUIRED = "review_required"
    NON_COMPLIANT = "non_compliant"

class LifecycleStage(str, Enum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    APPROVED = "approved"
    ACTIVE = "active"
    ARCHIVED = "archived"

# Governance Review
class GovernanceReview(BaseModel):
    governance_status: GovernanceStatus
    compliance_notes: str | None = Field(
        default=None,
        max_length=1000,
    )

# Governance Update
class GovernanceUpdate(BaseModel):
    lifecycle_stage: LifecycleStage | None = None
    governance_status: GovernanceStatus | None = None
    compliance_notes: str | None = Field(
        default=None,
        max_length=1000,
    )

# Governance Response
class GovernanceResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )
    id: int
    forecast_id: int
    organization_id: int
    version_id: int | None
    governance_status: GovernanceStatus
    lifecycle_stage: LifecycleStage
    approval_required: bool
    approved_by: int | None
    reviewed_by: int | None
    compliance_notes: str | None
    last_reviewed_at: datetime | None
    created_at: datetime
    updated_at: datetime

# Governance Summary
class GovernanceSummary(BaseModel):
    total_records: int
    compliant_records: int
    review_required: int
    non_compliant_records: int

# Governance Dashboard
class GovernanceDashboard(BaseModel):
    summary: GovernanceSummary
    recent_reviews: list[GovernanceResponse]

# Governance Audit Entry
class GovernanceAuditEntry(BaseModel):
    forecast_id: int
    lifecycle_stage: LifecycleStage
    governance_status: GovernanceStatus
    reviewed_by: int | None
    reviewed_at: datetime | None

# Governance Search Filter
class GovernanceFilter(BaseModel):
    governance_status: GovernanceStatus | None = None
    lifecycle_stage: LifecycleStage | None = None
    organization_id: int | None = None