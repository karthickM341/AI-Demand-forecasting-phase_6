from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.report import (
    ReportCreate,
    ReportFilter,
)
from app.services.report_service import ReportService

router = APIRouter(
    prefix="/reports",
    tags=["Reports"],
)


@router.post(
    "/generate",
    status_code=status.HTTP_201_CREATED,
)
def generate_report(
    payload: ReportCreate,
    db: Session = Depends(get_db),
):
    """
    Generate a new report.
    """
    return ReportService.generate_report(
        db=db,
        payload=payload,
    )


@router.get("/")
def get_reports(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Retrieve generated reports.
    """
    return ReportService.get_reports(
        db=db,
        organization_id=organization_id,
    )


@router.get("/{report_id}")
def get_report(
    report_id: int,
    db: Session = Depends(get_db),
):
    """
    Get report details.
    """
    report = ReportService.get_report_by_id(
        db=db,
        report_id=report_id,
    )

    if not report:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Report not found",
        )

    return report


@router.post("/forecast")
def forecast_report(
    filters: ReportFilter,
    db: Session = Depends(get_db),
):
    """
    Forecast performance report.
    """
    return ReportService.forecast_report(
        db=db,
        filters=filters,
    )


@router.post("/kpi")
def kpi_report(
    filters: ReportFilter,
    db: Session = Depends(get_db),
):
    """
    KPI performance report.
    """
    return ReportService.kpi_report(
        db=db,
        filters=filters,
    )


@router.post("/planning")
def planning_report(
    filters: ReportFilter,
    db: Session = Depends(get_db),
):
    """
    Strategic planning report.
    """
    return ReportService.planning_report(
        db=db,
        filters=filters,
    )


@router.post("/governance")
def governance_report(
    filters: ReportFilter,
    db: Session = Depends(get_db),
):
    """
    Governance and compliance report.
    """
    return ReportService.governance_report(
        db=db,
        filters=filters,
    )


@router.post("/executive")
def executive_report(
    filters: ReportFilter,
    db: Session = Depends(get_db),
):
    """
    Executive summary report.
    """
    return ReportService.executive_report(
        db=db,
        filters=filters,
    )


@router.get("/{report_id}/export")
def export_report(
    report_id: int,
    format: str = Query("pdf", pattern="^(pdf|xlsx|csv)$"),
    db: Session = Depends(get_db),
):
    """
    Export report.
    """
    return ReportService.export_report(
        db=db,
        report_id=report_id,
        format=format,
    )


@router.get("/history/logs")
def report_history(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Report generation history.
    """
    return ReportService.get_report_history(
        db=db,
        organization_id=organization_id,
    )