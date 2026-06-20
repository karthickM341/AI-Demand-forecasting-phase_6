from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.services.executive_service import ExecutiveService

router = APIRouter(
    prefix="/executive",
    tags=["Executive Command Center"],
)


@router.get("/overview")
def executive_overview(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Executive dashboard overview.
    """
    return ExecutiveService.get_overview(
        db=db,
        organization_id=organization_id,
    )


@router.get("/performance-summary")
def performance_summary(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Organization performance summary.
    """
    return ExecutiveService.get_performance_summary(
        db=db,
        organization_id=organization_id,
    )


@router.get("/forecast-insights")
def forecast_insights(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Executive forecasting insights.
    """
    return ExecutiveService.get_forecast_insights(
        db=db,
        organization_id=organization_id,
    )


@router.get("/strategic-insights")
def strategic_insights(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Strategic planning insights.
    """
    return ExecutiveService.get_strategic_insights(
        db=db,
        organization_id=organization_id,
    )


@router.get("/kpi-overview")
def kpi_overview(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Executive KPI overview.
    """
    return ExecutiveService.get_kpi_overview(
        db=db,
        organization_id=organization_id,
    )


@router.get("/business-targets")
def business_targets(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Target achievement tracking.
    """
    return ExecutiveService.get_business_targets(
        db=db,
        organization_id=organization_id,
    )


@router.get("/alerts")
def executive_alerts(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Executive alerts and critical events.
    """
    return ExecutiveService.get_alerts(
        db=db,
        organization_id=organization_id,
    )


@router.get("/recommendations")
def executive_recommendations(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    AI-generated business recommendations.
    """
    return ExecutiveService.get_recommendations(
        db=db,
        organization_id=organization_id,
    )


@router.get("/scorecard")
def executive_scorecard(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Executive business scorecard.
    """
    return ExecutiveService.get_scorecard(
        db=db,
        organization_id=organization_id,
    )