from datetime import datetime
from enum import Enum
from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
)

class QualityStatus(str, Enum):
    EXCELLENT = "excellent"
    GOOD = "good"
    WARNING = "warning"
    CRITICAL = "critical"


# Data Quality Scan Request
class QualityScanRequest(BaseModel):
    dataset_id: int = Field(
        ...,
        gt=0,
    )


# Quality Assessment Create
class QualityAssessmentCreate(BaseModel):
    dataset_id: int = Field(
        ...,
        gt=0,
    )
    quality_score: float = Field(
        ...,
        ge=0,
        le=100,
    )
    total_records: int = Field(
        ...,
        ge=0,
    )
    valid_records: int = Field(
        ...,
        ge=0,
    )
    missing_records: int = Field(
        default=0,
        ge=0,
    )
    duplicate_records: int = Field(
        default=0,
        ge=0,
    )
    validation_errors: int = Field(
        default=0,
        ge=0,
    )
    validation_summary: str | None = Field(
        default=None,
        max_length=2000,
    )


# Quality Response
class QualityResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    id: int
    organization_id: int
    dataset_id: int
    quality_score: float
    total_records: int
    valid_records: int
    missing_records: int
    duplicate_records: int
    validation_errors: int
    status: QualityStatus
    validation_summary: str | None
    scanned_by: int | None
    scanned_at: datetime
    created_at: datetime


# Quality Summary
class QualitySummary(BaseModel):
    dataset_id: int
    quality_score: float
    status: QualityStatus
    issue_count: int
    scanned_at: datetime


# Quality Metrics
class QualityMetrics(BaseModel):
    total_scans: int
    average_quality_score: float
    critical_datasets: int
    warning_datasets: int
    total_issues: int


# Dataset Validation Summary
class ValidationSummary(BaseModel):
    dataset_id: int
    total_records: int
    valid_records: int
    missing_records: int
    duplicate_records: int
    validation_errors: int
    completion_rate: float


# Quality Dashboard
class QualityDashboard(BaseModel):
    metrics: QualityMetrics
    recent_scans: list[
        QualitySummary
    ]


# Quality Alert
class QualityAlert(BaseModel):
    dataset_id: int
    quality_score: float
    status: QualityStatus
    issue_count: int
    message: str


# Quality Filter
class QualityFilter(BaseModel):
    status: QualityStatus | None = None
    dataset_id: int | None = None

# Quality Rule Create
class QualityRuleCreate(BaseModel):
    rule_name: str = Field(
        ...,
        min_length=3,
        max_length=255,
    )

    description: str | None = None

    threshold: float = Field(
        ...,
        ge=0,
        le=100,
    )


# Quality Rule Update
class QualityRuleUpdate(BaseModel):
    rule_name: str | None = None
    description: str | None = None

    threshold: float | None = Field(
        default=None,
        ge=0,
        le=100,
    )


# Quality Rule Response
class QualityRuleResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    id: int
    rule_name: str
    description: str | None
    threshold: float


# Dataset Quality Rule
class DatasetQualityRule(BaseModel):
    dataset_id: int
    rule_name: str
    threshold: float


# Quality Check Create
class QualityCheckCreate(BaseModel):
    dataset_id: int
    rule_name: str
    expected_value: str | None = None


# Quality Check Response
class QualityCheckResponse(BaseModel):
    dataset_id: int
    rule_name: str
    passed: bool
    message: str


# Quality Recommendation
class QualityRecommendation(BaseModel):
    dataset_id: int
    recommendation: str
    priority: str