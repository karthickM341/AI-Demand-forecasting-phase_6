from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.workflow import (
    WorkflowCreate,
    WorkflowUpdate,
    WorkflowResponse,
    WorkflowExecutionRequest,
)

from app.services.workflow_service import WorkflowService

router = APIRouter(
    prefix="/workflows",
    tags=["Workflow Automation"],
)


@router.post(
    "/",
    response_model=WorkflowResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_workflow(
    payload: WorkflowCreate,
    db: Session = Depends(get_db),
):
    """
    Create a new workflow.
    """
    return WorkflowService.create_workflow(
        db=db,
        payload=payload,
    )


@router.get(
    "/",
    response_model=list[WorkflowResponse],
)
def get_workflows(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Retrieve organization workflows.
    """
    return WorkflowService.get_workflows(
        db=db,
        organization_id=organization_id,
    )


@router.get(
    "/{workflow_id}",
    response_model=WorkflowResponse,
)
def get_workflow(
    workflow_id: int,
    db: Session = Depends(get_db),
):
    """
    Get workflow details.
    """
    workflow = WorkflowService.get_workflow_by_id(
        db=db,
        workflow_id=workflow_id,
    )

    if not workflow:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Workflow not found",
        )

    return workflow


@router.put(
    "/{workflow_id}",
    response_model=WorkflowResponse,
)
def update_workflow(
    workflow_id: int,
    payload: WorkflowUpdate,
    db: Session = Depends(get_db),
):
    """
    Update workflow configuration.
    """
    workflow = WorkflowService.update_workflow(
        db=db,
        workflow_id=workflow_id,
        payload=payload,
    )

    if not workflow:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Workflow not found",
        )

    return workflow


@router.delete("/{workflow_id}")
def deactivate_workflow(
    workflow_id: int,
    db: Session = Depends(get_db),
):
    """
    Disable workflow.
    """
    WorkflowService.deactivate_workflow(
        db=db,
        workflow_id=workflow_id,
    )

    return {
        "success": True,
        "message": "Workflow disabled successfully",
    }


@router.post("/{workflow_id}/execute")
def execute_workflow(
    workflow_id: int,
    payload: WorkflowExecutionRequest,
    db: Session = Depends(get_db),
):
    """
    Execute workflow manually.
    """
    return WorkflowService.execute_workflow(
        db=db,
        workflow_id=workflow_id,
        payload=payload,
    )


@router.get("/{workflow_id}/executions")
def workflow_executions(
    workflow_id: int,
    db: Session = Depends(get_db),
):
    """
    Workflow execution history.
    """
    return WorkflowService.get_execution_history(
        db=db,
        workflow_id=workflow_id,
    )


@router.get("/{workflow_id}/logs")
def workflow_logs(
    workflow_id: int,
    db: Session = Depends(get_db),
):
    """
    Workflow execution logs.
    """
    return WorkflowService.get_logs(
        db=db,
        workflow_id=workflow_id,
    )


@router.get("/organization/{organization_id}/monitor")
def workflow_monitor(
    organization_id: int,
    db: Session = Depends(get_db),
):
    """
    Workflow monitoring dashboard.
    """
    return WorkflowService.get_monitoring_data(
        db=db,
        organization_id=organization_id,
    )


@router.get("/organization/{organization_id}/statistics")
def workflow_statistics(
    organization_id: int,
    db: Session = Depends(get_db),
):
    """
    Workflow performance metrics.
    """
    return WorkflowService.get_statistics(
        db=db,
        organization_id=organization_id,
    )