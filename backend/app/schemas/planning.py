from datetime import datetime
from enum import Enum
from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
)

class PlanningPeriod(str, Enum):
    ANNUAL = "annual"
    QUARTERLY = "quarterly"

class PlanningStatus(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"
    COMPLETED = "completed"
    ARCHIVED = "archived"

# Create Planning
class PlanningCreate(BaseModel):
    title: str = Field(
        ...,
        min_length=3,
        max_length=255,
    )

    period_type: PlanningPeriod

    fiscal_year: int = Field(
        ...,
        ge=2020,
        le=2100,
    )

    quarter: int | None = Field(
        default=None,
        ge=1,
        le=4,
    )

    target_revenue: float = Field(
        ...,
        gt=0,
    )
    target_demand: float = Field(
        ...,
        gt=0,
    )
    recommendations: str | None = Field(
        default=None,
        max_length=2000,
    )


# Update Planning
class PlanningUpdate(BaseModel):
    title: str | None = Field(
        default=None,
        min_length=3,
        max_length=255,
    )
    target_revenue: float | None = Field(
        default=None,
        gt=0,
    )
    target_demand: float | None = Field(
        default=None,
        gt=0,
    )
    forecasted_demand: float | None = Field(
        default=None,
        ge=0,
    )
    achievement_percentage: float | None = Field(
        default=None,
        ge=0,
        le=100,
    )
    recommendations: str | None = Field(
        default=None,
        max_length=2000,
    )
    status: PlanningStatus | None = None


# Planning Response
class PlanningResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    id: int
    organization_id: int
    title: str
    period_type: PlanningPeriod
    fiscal_year: int
    quarter: int | None
    target_revenue: float
    target_demand: float
    forecasted_demand: float | None
    achievement_percentage: float | None
    status: PlanningStatus
    recommendations: str | None
    created_by: int
    created_at: datetime
    updated_at: datetime

# Planning Summary
class PlanningSummary(BaseModel):
    id: int
    title: str
    fiscal_year: int
    quarter: int | None
    status: PlanningStatus
    achievement_percentage: float | None

# Planning Metrics
class PlanningMetrics(BaseModel):
    total_plans: int
    active_plans: int
    completed_plans: int
    off_track_plans: int
    average_achievement: float

# Strategic Dashboard
class PlanningDashboard(BaseModel):
    metrics: PlanningMetrics
    active_plans: list[PlanningSummary]

# Forecast Alignment
class ForecastAlignment(BaseModel):
    planning_id: int
    target_demand: float
    forecasted_demand: float
    demand_gap: float
    is_on_track: bool

# Planning Recommendation
class PlanningRecommendation(BaseModel):
    planning_id: int
    recommendation: str
    priority: str

# Planning Filter
class PlanningFilter(BaseModel):
    fiscal_year: int | None = None
    quarter: int | None = None
    status: PlanningStatus | None = None

# Target Create
class TargetCreate(BaseModel):
    organization_id: int
    target_revenue: float = Field(..., gt=0)
    target_demand: float = Field(..., gt=0)
    fiscal_year: int = Field(..., ge=2020, le=2100)
    quarter: int | None = Field(
        default=None,
        ge=1,
        le=4,
    )


# Target Update
class TargetUpdate(BaseModel):
    target_revenue: float | None = Field(
        default=None,
        gt=0,
    )

    target_demand: float | None = Field(
        default=None,
        gt=0,
    )


# Target Response
class TargetResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    organization_id: int
    target_revenue: float
    target_demand: float
    fiscal_year: int
    quarter: int | None

class AnnualPlanCreate(PlanningCreate):
    pass


class QuarterlyPlanCreate(PlanningCreate):
    pass


class AnnualPlanUpdate(PlanningUpdate):
    pass


class QuarterlyPlanUpdate(PlanningUpdate):
    pass


class AnnualPlanResponse(PlanningResponse):
    pass


class QuarterlyPlanResponse(PlanningResponse):
    pass

class PlanUpdate(PlanningUpdate):
    pass