from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.models.forecast import (
    Forecast,
    ForecastStatus,
)
from app.repositories.forecast_repo import (
    ForecastRepository,
)
from app.services.audit_service import (
    AuditService,
)


class ForecastService:
    """
    Enterprise Forecast Service

    Features:
    - Forecast Lifecycle Management
    - Forecast Governance
    - Approval Workflow Integration
    - Forecast Analytics
    - Audit Logging
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.forecast_repo = ForecastRepository(db)
        self.audit_service = AuditService(db)

    # Create Forecast
    def create_forecast(
        self,
        forecast: Forecast,
        user_id: int,
    ) -> Forecast:
        created = self.forecast_repo.create(
            forecast
        )

        self.audit_service.forecast_created(
            organization_id=created.organization_id,
            user_id=user_id,
            forecast_id=created.id,
        )

        return created

    # Get Forecast
    def get_forecast(
        self,
        forecast_id: int,
        organization_id: int,
    ) -> Forecast:
        forecast = (
            self.forecast_repo.get_by_id(
                forecast_id,
                organization_id,
            )
        )

        if not forecast:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Forecast not found",
            )

        return forecast

    # Update Forecast
    def update_forecast(
        self,
        forecast_id: int,
        organization_id: int,
        updates: dict,
    ) -> Forecast:
        forecast = self.get_forecast(
            forecast_id,
            organization_id,
        )

        if (
            forecast.status
            == ForecastStatus.APPROVED
        ):
            raise HTTPException(
                status_code=400,
                detail=(
                    "Approved forecasts "
                    "cannot be modified"
                ),
            )

        for field, value in updates.items():
            if hasattr(
                forecast,
                field,
            ):
                setattr(
                    forecast,
                    field,
                    value,
                )

        return self.forecast_repo.update(
            forecast
        )

    # Submit For Approval
    def submit_for_approval(
        self,
        forecast_id: int,
        organization_id: int,
    ) -> Forecast:
        forecast = self.get_forecast(
            forecast_id,
            organization_id,
        )

        if (
            forecast.status
            != ForecastStatus.DRAFT
        ):
            raise HTTPException(
                status_code=400,
                detail=(
                    "Only draft forecasts "
                    "can be submitted"
                ),
            )

        forecast.status = (
            ForecastStatus.SUBMITTED
        )

        return self.forecast_repo.update(
            forecast
        )

    # Archive Forecast
    def archive_forecast(
        self,
        forecast_id: int,
        organization_id: int,
    ) -> Forecast:
        forecast = self.get_forecast(
            forecast_id,
            organization_id,
        )

        forecast.status = (
            ForecastStatus.ARCHIVED
        )

        return self.forecast_repo.update(
            forecast
        )

    # List Forecasts
    def list_forecasts(
        self,
        organization_id: int,
        skip: int = 0,
        limit: int = 50,
    ):
        return (
            self.forecast_repo.list_forecasts(
                organization_id=organization_id,
                skip=skip,
                limit=limit,
            )
        )

    # Search Forecasts
    def search_forecasts(
        self,
        organization_id: int,
        keyword: str,
    ):
        return self.forecast_repo.search(
            organization_id=organization_id,
            keyword=keyword,
        )

    # Dashboard Metrics
    def dashboard_metrics(
        self,
        organization_id: int,
    ) -> dict:
        return (
            self.forecast_repo.get_metrics(
                organization_id
            )
        )

    # Pending Approvals
    def pending_approvals(
        self,
        organization_id: int,
    ):
        return (
            self.forecast_repo
            .get_pending_approvals(
                organization_id
            )
        )

    # Latest Forecast
    def latest_forecast(
        self,
        organization_id: int,
    ):
        return (
            self.forecast_repo.latest_forecast(
                organization_id
            )
        )

    # Forecast Governance Check
    def governance_check(
        self,
        forecast_id: int,
        organization_id: int,
    ) -> dict:
        forecast = self.get_forecast(
            forecast_id,
            organization_id,
        )

        issues = []

        if not forecast.predicted_demand:
            issues.append(
                "Missing predicted demand"
            )

        if not forecast.model_name:
            issues.append(
                "Missing model information"
            )

        return {
            "compliant": len(issues) == 0,
            "issues": issues,
        }