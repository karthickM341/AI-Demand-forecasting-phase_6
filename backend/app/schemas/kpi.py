from datetime import datetime
from enum import Enum
from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
)

class KPIStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    ARCHIVED = "archived"

# KPI Create
class KPICreate(BaseModel):
    name: str = Field(
        ...,
        min_length=3,
        max_length=150,
    )
    category: str = Field(
        ...,
        min_length=2,
        max_length=100,
    )
    description: str | None = Field(
        default=None,
        max_length=1000,
    )
    unit: str | None = Field(
        default=None,
        max_length=50,
    )
    target_value: float = Field(
        ...,
        gt=0,
    )
    warning_threshold: float | None = Field(
        default=None,
        ge=0,
    )
    critical_threshold: float | None = Field(
        default=None,
        ge=0,
    )

# KPI Update
class KPIUpdate(BaseModel):
    name: str | None = Field(
        default=None,
        min_length=3,
        max_length=150,
    )
    description: str | None = Field(
        default=None,
        max_length=1000,
    )
    target_value: float | None = Field(
        default=None,
        gt=0,
    )
    current_value: float | None = Field(
        default=None,
        ge=0,
    )
    warning_threshold: float | None = Field(
        default=None,
        ge=0,
    )
    critical_threshold: float | None = Field(
        default=None,
        ge=0,
    )
    status: KPIStatus | None = None

# KPI Value Update
class KPIValueUpdate(BaseModel):
    current_value: float = Field(
        ...,
        ge=0,
    )

# KPI Response
class KPIResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    id: int
    organization_id: int
    name: str
    category: str
    description: str | None
    unit: str | None
    target_value: float
    current_value: float
    warning_threshold: float | None
    critical_threshold: float | None
    forecast_linked: bool
    status: KPIStatus
    created_by: int
    created_at: datetime
    updated_at: datetime

# KPI Summary
class KPISummary(BaseModel):
    id: int
    name: str
    category: str
    target_value: float
    current_value: float
    achievement_percentage: float
    status: KPIStatus

# KPI Metrics
class KPIMetrics(BaseModel):
    total_kpis: int
    active_kpis: int
    warning_kpis: int
    critical_kpis: int
    average_achievement: float

# KPI Dashboard
class KPIDashboard(BaseModel):
    metrics: KPIMetrics
    top_kpis: list[KPISummary]
    warning_kpi_list: list[KPISummary]

# KPI Alert
class KPIAlert(BaseModel):
    kpi_id: int
    kpi_name: str
    alert_type: str
    current_value: float
    threshold_value: float

# KPI Filter
class KPIFilter(BaseModel):
    category: str | None = None
    status: KPIStatus | None = None