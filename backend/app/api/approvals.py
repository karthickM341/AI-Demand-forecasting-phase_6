from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.approval import (
    ApprovalCreate,
    ApprovalResponse,
    ApprovalAction,
)
from app.services.approval_service import ApprovalService

router = APIRouter(
    prefix="/approvals",
    tags=["Forecast Approvals"]
)


@router.post(
    "/submit",
    response_model=ApprovalResponse,
    status_code=status.HTTP_201_CREATED,
)
def submit_forecast_for_approval(
    payload: ApprovalCreate,
    db: Session = Depends(get_db),
):
    """
    Submit forecast for manager approval.
    """
    return ApprovalService.submit_forecast(
        db=db,
        payload=payload
    )


@router.get(
    "/pending",
    response_model=list[ApprovalResponse]
)
def get_pending_approvals(
    db: Session = Depends(get_db),
):
    """
    Retrieve all pending approvals.
    """
    return ApprovalService.get_pending_approvals(db)


@router.post(
    "/{approval_id}/approve",
    response_model=ApprovalResponse,
)
def approve_forecast(
    approval_id: int,
    action: ApprovalAction,
    db: Session = Depends(get_db),
):
    """
    Manager/Admin approves forecast.
    """
    approval = ApprovalService.approve_forecast(
        db=db,
        approval_id=approval_id,
        comments=action.comments,
    )

    if not approval:
        raise HTTPException(
            status_code=404,
            detail="Approval request not found"
        )

    return approval


@router.post(
    "/{approval_id}/reject",
    response_model=ApprovalResponse,
)
def reject_forecast(
    approval_id: int,
    action: ApprovalAction,
    db: Session = Depends(get_db),
):
    """
    Manager/Admin rejects forecast.
    """
    approval = ApprovalService.reject_forecast(
        db=db,
        approval_id=approval_id,
        comments=action.comments,
    )

    if not approval:
        raise HTTPException(
            status_code=404,
            detail="Approval request not found"
        )

    return approval


@router.get(
    "/history",
    response_model=list[ApprovalResponse]
)
def get_approval_history(
    db: Session = Depends(get_db),
):
    """
    Approval audit history.
    """
    return ApprovalService.get_approval_history(db)


@router.get(
    "/{approval_id}",
    response_model=ApprovalResponse,
)
def get_approval_details(
    approval_id: int,
    db: Session = Depends(get_db),
):
    """
    Get approval details.
    """
    approval = ApprovalService.get_approval_by_id(
        db,
        approval_id
    )

    if not approval:
        raise HTTPException(
            status_code=404,
            detail="Approval not found"
        )

    return approval