from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.planning import (
    AnnualPlanCreate,
    QuarterlyPlanCreate,
    TargetCreate,
    PlanUpdate,
)
from app.services.planning_service import PlanningService

router = APIRouter(
    prefix="/planning",
    tags=["Strategic Planning"],
)


@router.post(
    "/annual",
    status_code=status.HTTP_201_CREATED,
)
def create_annual_plan(
    payload: AnnualPlanCreate,
    db: Session = Depends(get_db),
):
    """
    Create annual business plan.
    """
    return PlanningService.create_annual_plan(
        db=db,
        payload=payload,
    )


@router.get("/annual")
def get_annual_plans(
    organization_id: int = Query(..., gt=0),
    year: int | None = None,
    db: Session = Depends(get_db),
):
    """
    Retrieve annual plans.
    """
    return PlanningService.get_annual_plans(
        db=db,
        organization_id=organization_id,
        year=year,
    )


@router.post(
    "/quarterly",
    status_code=status.HTTP_201_CREATED,
)
def create_quarterly_plan(
    payload: QuarterlyPlanCreate,
    db: Session = Depends(get_db),
):
    """
    Create quarterly plan.
    """
    return PlanningService.create_quarterly_plan(
        db=db,
        payload=payload,
    )


@router.get("/quarterly")
def get_quarterly_plans(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Retrieve quarterly plans.
    """
    return PlanningService.get_quarterly_plans(
        db=db,
        organization_id=organization_id,
    )


@router.post(
    "/targets",
    status_code=status.HTTP_201_CREATED,
)
def create_target(
    payload: TargetCreate,
    db: Session = Depends(get_db),
):
    """
    Create business target.
    """
    return PlanningService.create_target(
        db=db,
        payload=payload,
    )


@router.get("/targets")
def get_targets(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Retrieve business targets.
    """
    return PlanningService.get_targets(
        db=db,
        organization_id=organization_id,
    )


@router.put("/{plan_id}")
def update_plan(
    plan_id: int,
    payload: PlanUpdate,
    db: Session = Depends(get_db),
):
    """
    Update planning record.
    """
    plan = PlanningService.update_plan(
        db=db,
        plan_id=plan_id,
        payload=payload,
    )

    if not plan:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Plan not found",
        )

    return plan


@router.get("/forecast-vs-target")
def forecast_vs_target(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Compare forecast demand against targets.
    """
    return PlanningService.forecast_vs_target(
        db=db,
        organization_id=organization_id,
    )


@router.get("/recommendations")
def planning_recommendations(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    AI-powered planning recommendations.
    """
    return PlanningService.get_recommendations(
        db=db,
        organization_id=organization_id,
    )


@router.get("/dashboard")
def planning_dashboard(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Strategic planning dashboard.
    """
    return PlanningService.get_dashboard(
        db=db,
        organization_id=organization_id,
    )