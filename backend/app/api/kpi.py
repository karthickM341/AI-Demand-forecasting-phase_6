from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.kpi import (
    KPICreate,
    KPIUpdate,
    KPIResponse,
)
from app.services.kpi_service import KPIService

router = APIRouter(
    prefix="/kpis",
    tags=["KPI Management"],
)


@router.post(
    "/",
    response_model=KPIResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_kpi(
    payload: KPICreate,
    db: Session = Depends(get_db),
):
    """
    Create custom KPI.
    """
    return KPIService.create_kpi(
        db=db,
        payload=payload,
    )


@router.get(
    "/",
    response_model=list[KPIResponse],
)
def get_kpis(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Retrieve organization KPIs.
    """
    return KPIService.get_kpis(
        db=db,
        organization_id=organization_id,
    )


@router.get(
    "/{kpi_id}",
    response_model=KPIResponse,
)
def get_kpi(
    kpi_id: int,
    db: Session = Depends(get_db),
):
    """
    KPI details.
    """
    kpi = KPIService.get_kpi_by_id(
        db=db,
        kpi_id=kpi_id,
    )

    if not kpi:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="KPI not found",
        )

    return kpi


@router.put(
    "/{kpi_id}",
    response_model=KPIResponse,
)
def update_kpi(
    kpi_id: int,
    payload: KPIUpdate,
    db: Session = Depends(get_db),
):
    """
    Update KPI.
    """
    kpi = KPIService.update_kpi(
        db=db,
        kpi_id=kpi_id,
        payload=payload,
    )

    if not kpi:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="KPI not found",
        )

    return kpi


@router.delete("/{kpi_id}")
def delete_kpi(
    kpi_id: int,
    db: Session = Depends(get_db),
):
    """
    Archive KPI.
    """
    KPIService.delete_kpi(
        db=db,
        kpi_id=kpi_id,
    )

    return {
        "success": True,
        "message": "KPI archived successfully"
    }


@router.get("/{kpi_id}/performance")
def kpi_performance(
    kpi_id: int,
    db: Session = Depends(get_db),
):
    """
    KPI performance against forecast.
    """
    return KPIService.get_performance(
        db=db,
        kpi_id=kpi_id,
    )


@router.get("/{kpi_id}/trends")
def kpi_trends(
    kpi_id: int,
    db: Session = Depends(get_db),
):
    """
    KPI trend analysis.
    """
    return KPIService.get_trends(
        db=db,
        kpi_id=kpi_id,
    )


@router.get("/{kpi_id}/thresholds")
def kpi_thresholds(
    kpi_id: int,
    db: Session = Depends(get_db),
):
    """
    KPI threshold monitoring.
    """
    return KPIService.get_thresholds(
        db=db,
        kpi_id=kpi_id,
    )


@router.get("/reports/summary")
def kpi_reports(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    KPI performance reports.
    """
    return KPIService.generate_report(
        db=db,
        organization_id=organization_id,
    )


@router.get("/alerts/active")
def active_kpi_alerts(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Active KPI threshold alerts.
    """
    return KPIService.get_active_alerts(
        db=db,
        organization_id=organization_id,
    )