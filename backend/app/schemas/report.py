from datetime import datetime
from enum import Enum
from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
)

class ReportType(str, Enum):
    FORECAST = "forecast"
    KPI = "kpi"
    PLANNING = "planning"
    GOVERNANCE = "governance"
    QUALITY = "quality"
    EXECUTIVE = "executive"

class ReportStatus(str, Enum):
    PENDING = "pending"
    GENERATED = "generated"
    FAILED = "failed"
    ARCHIVED = "archived"


# Generate Report Request
class ReportGenerateRequest(BaseModel):
    title: str = Field(
        ...,
        min_length=3,
        max_length=255,
    )
    report_type: ReportType
    description: str | None = Field(
        default=None,
        max_length=1000,
    )
    file_format: str = Field(
        default="pdf",
        pattern="^(pdf|xlsx|csv)$",
    )


# Report Filters
class ReportFilter(BaseModel):
    report_type: ReportType | None = None
    status: ReportStatus | None = None
    generated_by: int | None = None


# Report Response
class ReportResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )
    id: int
    organization_id: int
    title: str
    description: str | None
    report_type: ReportType
    status: ReportStatus
    file_format: str
    file_path: str | None
    report_data: dict | None
    generated_by: int
    generated_at: datetime | None
    created_at: datetime
    updated_at: datetime


# Report Summary
class ReportSummary(BaseModel):
    id: int
    title: str
    report_type: ReportType
    status: ReportStatus
    file_format: str
    generated_at: datetime | None


# Report Metrics
class ReportMetrics(BaseModel):
    total_reports: int
    generated_reports: int
    failed_reports: int
    archived_reports: int


# Executive Reporting Dashboard
class ReportDashboard(BaseModel):
    metrics: ReportMetrics
    recent_reports: list[
        ReportSummary
    ]


# Report Download
class ReportDownload(BaseModel):
    report_id: int
    title: str
    download_url: str


# Report Generation Status
class ReportGenerationStatus(BaseModel):
    report_id: int
    status: ReportStatus
    generated_at: datetime | None
    file_path: str | None


# Executive Report Summary
class ExecutiveReportSummary(BaseModel):
    forecast_accuracy: float
    active_forecasts: int
    total_kpis: int
    active_workflows: int
    average_quality_score: float
    total_notifications: int

# Report Create
class ReportCreate(BaseModel):
    organization_id: int
    title: str = Field(
        ...,
        min_length=3,
        max_length=255,
    )
    report_type: ReportType
    description: str | None = None
    file_format: str = "pdf"


# Report Update
class ReportUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    status: ReportStatus | None = None


# Report List Response
class ReportListResponse(BaseModel):
    reports: list[ReportSummary]
    total: int