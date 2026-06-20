from datetime import date, datetime
from enum import Enum
from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
)

class ForecastStatus(str, Enum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    APPROVED = "approved"
    REJECTED = "rejected"
    ACTIVE = "active"
    ARCHIVED = "archived"

# Create Forecast
class ForecastCreate(BaseModel):
    name: str = Field(
        ...,
        min_length=3,
        max_length=255,
    )
    description: str | None = Field(
        default=None,
        max_length=1000,
    )
    forecast_period_start: date
    forecast_period_end: date
    predicted_demand: float = Field(
        ...,
        gt=0,
    )
    model_name: str | None = Field(
        default=None,
        max_length=100,
    )

# Update Forecast
class ForecastUpdate(BaseModel):
    name: str | None = Field(
        default=None,
        min_length=3,
        max_length=255,
    )
    description: str | None = Field(
        default=None,
        max_length=1000,
    )
    predicted_demand: float | None = Field(
        default=None,
        gt=0,
    )
    confidence_score: float | None = Field(
        default=None,
        ge=0,
        le=100,
    )

# Forecast Approval
class ForecastSubmission(BaseModel):
    comments: str | None = Field(
        default=None,
        max_length=500,
    )

# Forecast Response
class ForecastResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )
    id: int
    organization_id: int
    name: str
    description: str | None
    forecast_period_start: date
    forecast_period_end: date
    predicted_demand: float
    confidence_score: float | None
    accuracy_score: float | None
    model_name: str | None
    status: ForecastStatus
    created_by: int
    approved_by: int | None
    approved_at: datetime | None
    created_at: datetime
    updated_at: datetime

# Forecast Summary
class ForecastSummary(BaseModel):
    id: int
    name: str
    predicted_demand: float
    status: ForecastStatus
    forecast_period_start: date
    forecast_period_end: date

# Forecast Metrics
class ForecastMetrics(BaseModel):
    total_forecasts: int
    active_forecasts: int
    approved_forecasts: int
    pending_approvals: int

# Forecast Dashboard
class ForecastDashboard(BaseModel):
    metrics: ForecastMetrics
    recent_forecasts: list[ForecastSummary]

# Forecast Version Info
class ForecastVersionInfo(BaseModel):
    version_number: int
    status: str
    created_at: datetime

# Forecast Search
class ForecastSearch(BaseModel):
    keyword: str = Field(
        ...,
        min_length=1,
        max_length=100,
    )