from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.services.governance_service import GovernanceService

router = APIRouter(
    prefix="/governance",
    tags=["Forecast Governance"],
)


@router.get("/dashboard")
def governance_dashboard(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Governance dashboard overview.
    """
    return GovernanceService.get_dashboard(
        db=db,
        organization_id=organization_id,
    )


@router.get("/versions/{forecast_id}")
def forecast_versions(
    forecast_id: int,
    db: Session = Depends(get_db),
):
    """
    Retrieve forecast version history.
    """
    return GovernanceService.get_forecast_versions(
        db=db,
        forecast_id=forecast_id,
    )


@router.get("/audit-trail")
def audit_trail(
    organization_id: int = Query(..., gt=0),
    limit: int = Query(50, le=200),
    db: Session = Depends(get_db),
):
    """
    Governance audit records.
    """
    return GovernanceService.get_audit_trail(
        db=db,
        organization_id=organization_id,
        limit=limit,
    )


@router.get("/lifecycle/{forecast_id}")
def forecast_lifecycle(
    forecast_id: int,
    db: Session = Depends(get_db),
):
    """
    Forecast lifecycle tracking.
    """
    return GovernanceService.get_lifecycle(
        db=db,
        forecast_id=forecast_id,
    )


@router.post("/archive/{forecast_id}")
def archive_forecast(
    forecast_id: int,
    db: Session = Depends(get_db),
):
    """
    Archive approved forecast.
    """
    archived = GovernanceService.archive_forecast(
        db=db,
        forecast_id=forecast_id,
    )

    if not archived:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Forecast not found",
        )

    return {
        "success": True,
        "message": "Forecast archived successfully",
    }


@router.post("/restore/{forecast_id}")
def restore_forecast(
    forecast_id: int,
    db: Session = Depends(get_db),
):
    """
    Restore archived forecast.
    """
    restored = GovernanceService.restore_forecast(
        db=db,
        forecast_id=forecast_id,
    )

    if not restored:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Forecast not found",
        )

    return {
        "success": True,
        "message": "Forecast restored successfully",
    }


@router.get("/approvals")
def approval_records(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Governance approval records.
    """
    return GovernanceService.get_approval_records(
        db=db,
        organization_id=organization_id,
    )


@router.get("/compliance")
def compliance_status(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Compliance and governance metrics.
    """
    return GovernanceService.get_compliance_status(
        db=db,
        organization_id=organization_id,
    )


@router.get("/activity")
def governance_activity(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Recent governance activities.
    """
    return GovernanceService.get_recent_activity(
        db=db,
        organization_id=organization_id,
    )