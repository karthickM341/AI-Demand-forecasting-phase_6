from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.forecast import (
    ForecastCreate,
    ForecastUpdate,
    ForecastResponse,
)
from app.services.forecast_service import ForecastService

router = APIRouter(
    prefix="/forecasts",
    tags=["Forecast Management"],
)


@router.post(
    "/",
    response_model=ForecastResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_forecast(
    payload: ForecastCreate,
    db: Session = Depends(get_db),
):
    """
    Create a new forecast.
    """
    return ForecastService.create_forecast(
        db=db,
        payload=payload,
    )


@router.get(
    "/",
    response_model=list[ForecastResponse],
)
def get_forecasts(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Retrieve organization forecasts.
    """
    return ForecastService.get_forecasts(
        db=db,
        organization_id=organization_id,
    )


@router.get(
    "/{forecast_id}",
    response_model=ForecastResponse,
)
def get_forecast(
    forecast_id: int,
    db: Session = Depends(get_db),
):
    """
    Get forecast details.
    """
    forecast = ForecastService.get_forecast_by_id(
        db=db,
        forecast_id=forecast_id,
    )

    if not forecast:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Forecast not found",
        )

    return forecast


@router.put(
    "/{forecast_id}",
    response_model=ForecastResponse,
)
def update_forecast(
    forecast_id: int,
    payload: ForecastUpdate,
    db: Session = Depends(get_db),
):
    """
    Update forecast.
    """
    forecast = ForecastService.update_forecast(
        db=db,
        forecast_id=forecast_id,
        payload=payload,
    )

    if not forecast:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Forecast not found",
        )

    return forecast


@router.delete("/{forecast_id}")
def delete_forecast(
    forecast_id: int,
    db: Session = Depends(get_db),
):
    """
    Archive/Delete forecast.
    """
    ForecastService.delete_forecast(
        db=db,
        forecast_id=forecast_id,
    )

    return {
        "success": True,
        "message": "Forecast deleted successfully",
    }


@router.post("/{forecast_id}/submit")
def submit_for_approval(
    forecast_id: int,
    db: Session = Depends(get_db),
):
    """
    Submit forecast for approval workflow.
    """
    return ForecastService.submit_for_approval(
        db=db,
        forecast_id=forecast_id,
    )


@router.get("/{forecast_id}/versions")
def forecast_versions(
    forecast_id: int,
    db: Session = Depends(get_db),
):
    """
    Forecast version history.
    """
    return ForecastService.get_versions(
        db=db,
        forecast_id=forecast_id,
    )


@router.get("/{forecast_id}/lifecycle")
def forecast_lifecycle(
    forecast_id: int,
    db: Session = Depends(get_db),
):
    """
    Forecast lifecycle tracking.
    """
    return ForecastService.get_lifecycle(
        db=db,
        forecast_id=forecast_id,
    )


@router.get("/organization/{organization_id}/summary")
def forecast_summary(
    organization_id: int,
    db: Session = Depends(get_db),
):
    """
    Forecast analytics summary.
    """
    return ForecastService.get_summary(
        db=db,
        organization_id=organization_id,
    )