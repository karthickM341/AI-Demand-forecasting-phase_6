from datetime import datetime
from enum import Enum
from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
)

class WorkflowType(str, Enum):
    FORECAST_GENERATION = "forecast_generation"
    REPORT_GENERATION = "report_generation"
    KPI_MONITORING = "kpi_monitoring"
    DATA_QUALITY = "data_quality"
    APPROVAL_PROCESS = "approval_process"
    NOTIFICATION = "notification"
    MODEL_RETRAINING = "model_retraining"

class WorkflowStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    PAUSED = "paused"

class ExecutionStatus(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"


# Workflow Create
class WorkflowCreate(BaseModel):
    name: str = Field(
        ...,
        min_length=3,
        max_length=255,
    )

    description: str | None = Field(
        default=None,
        max_length=1000,
    )

    workflow_type: WorkflowType

    trigger_type: str = Field(
        default="schedule",
        max_length=50,
    )

    schedule_expression: str | None = Field(
        default=None,
        max_length=100,
    )

    configuration: dict = Field(
        default_factory=dict,
    )


# Workflow Update
class WorkflowUpdate(BaseModel):
    name: str | None = Field(
        default=None,
        min_length=3,
        max_length=255,
    )
    description: str | None = Field(
        default=None,
        max_length=1000,
    )
    schedule_expression: str | None = None
    configuration: dict | None = None
    status: WorkflowStatus | None = None


# Workflow Response
class WorkflowResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    id: int
    organization_id: int
    name: str
    description: str | None
    workflow_type: WorkflowType
    status: WorkflowStatus
    trigger_type: str
    schedule_expression: str | None
    configuration: dict
    is_enabled: bool
    created_by: int
    last_executed_at: datetime | None
    created_at: datetime
    updated_at: datetime


# Workflow Summary
class WorkflowSummary(BaseModel):
    id: int
    name: str
    workflow_type: WorkflowType
    status: WorkflowStatus
    last_executed_at: datetime | None


# Workflow Execution Log
class WorkflowExecutionResponse(BaseModel):
    execution_id: str
    workflow_id: int
    status: ExecutionStatus
    execution_time_seconds: float | None
    started_at: datetime
    completed_at: datetime | None
    error_message: str | None


# Execute Workflow
class WorkflowExecutionRequest(BaseModel):
    input_data: dict | None = Field(
        default_factory=dict,
    )


# Workflow Metrics
class WorkflowMetrics(BaseModel):
    total_workflows: int

    active_workflows: int

    paused_workflows: int

    disabled_workflows: int


# Workflow Dashboard
class WorkflowDashboard(BaseModel):
    metrics: WorkflowMetrics

    active_workflows: list[
        WorkflowSummary
    ]

    recent_executions: list[
        WorkflowExecutionResponse
    ]


# Workflow Configuration
class WorkflowConfiguration(BaseModel):
    approval_required: bool = True

    notification_enabled: bool = True

    retry_attempts: int = Field(
        default=3,
        ge=0,
        le=10,
    )

    timeout_seconds: int = Field(
        default=300,
        ge=30,
    )


# Workflow Filter
class WorkflowFilter(BaseModel):
    workflow_type: WorkflowType | None = None

    status: WorkflowStatus | None = None