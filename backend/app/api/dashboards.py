from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.services.dashboard_service import DashboardService

router = APIRouter(
    prefix="/dashboards",
    tags=["Dashboards"],
)


@router.get("/overview")
def dashboard_overview(
    organization_id: int = Query(...),
    db: Session = Depends(get_db),
):
    """
    Main enterprise dashboard overview.
    """
    return DashboardService.get_overview(
        db=db,
        organization_id=organization_id,
    )


@router.get("/forecast-summary")
def forecast_summary(
    organization_id: int = Query(...),
    db: Session = Depends(get_db),
):
    """
    Forecast performance summary.
    """
    return DashboardService.get_forecast_summary(
        db=db,
        organization_id=organization_id,
    )


@router.get("/approval-summary")
def approval_summary(
    organization_id: int = Query(...),
    db: Session = Depends(get_db),
):
    """
    Approval workflow statistics.
    """
    return DashboardService.get_approval_summary(
        db=db,
        organization_id=organization_id,
    )


@router.get("/planning-insights")
def planning_insights(
    organization_id: int = Query(...),
    db: Session = Depends(get_db),
):
    """
    Annual and quarterly planning insights.
    """
    return DashboardService.get_planning_insights(
        db=db,
        organization_id=organization_id,
    )


@router.get("/kpi-summary")
def kpi_summary(
    organization_id: int = Query(...),
    db: Session = Depends(get_db),
):
    """
    KPI performance overview.
    """
    return DashboardService.get_kpi_summary(
        db=db,
        organization_id=organization_id,
    )


@router.get("/quality-metrics")
def quality_metrics(
    organization_id: int = Query(...),
    db: Session = Depends(get_db),
):
    """
    Dataset quality metrics.
    """
    return DashboardService.get_quality_metrics(
        db=db,
        organization_id=organization_id,
    )


@router.get("/governance")
def governance_dashboard(
    organization_id: int = Query(...),
    db: Session = Depends(get_db),
):
    """
    Governance and audit dashboard.
    """
    return DashboardService.get_governance_dashboard(
        db=db,
        organization_id=organization_id,
    )


@router.get("/executive")
def executive_dashboard(
    organization_id: int = Query(...),
    db: Session = Depends(get_db),
):
    """
    Executive command center.
    """
    return DashboardService.get_executive_dashboard(
        db=db,
        organization_id=organization_id,
    )


@router.get("/alerts")
def dashboard_alerts(
    organization_id: int = Query(...),
    db: Session = Depends(get_db),
):
    """
    Dashboard alerts and notifications.
    """
    return DashboardService.get_alerts(
        db=db,
        organization_id=organization_id,
    )