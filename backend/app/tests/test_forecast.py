import pytest
from app.models.forecast import (
    Forecast,
    ForecastStatus,
)
from app.services.forecast_service import (
    ForecastService,
)


# Fixtures
@pytest.fixture
def sample_forecast():
    return Forecast(
        organization_id=1,
        name="Q3 Demand Forecast",
        description="Quarterly forecast",
        predicted_demand=15000,
        model_name="XGBoost",
        status=ForecastStatus.DRAFT,
        created_by=1,
    )


# Create Forecast
def test_create_forecast(
    db_session,
    sample_forecast,
):
    service = ForecastService(
        db_session
    )

    result = service.create_forecast(
        forecast=sample_forecast,
        user_id=1,
    )

    assert result.id is not None
    assert result.name == (
        "Q3 Demand Forecast"
    )
    assert (
        result.organization_id == 1
    )


# Get Forecast
def test_get_forecast(
    db_session,
    sample_forecast,
):
    service = ForecastService(
        db_session
    )

    created = service.create_forecast(
        forecast=sample_forecast,
        user_id=1,
    )

    result = service.get_forecast(
        created.id,
        1,
    )

    assert result.id == created.id
    assert result.name == (
        created.name
    )


# Update Forecast
def test_update_forecast(
    db_session,
    sample_forecast,
):
    service = ForecastService(
        db_session
    )

    created = service.create_forecast(
        forecast=sample_forecast,
        user_id=1,
    )

    updated = service.update_forecast(
        forecast_id=created.id,
        organization_id=1,
        updates={
            "predicted_demand": 20000
        },
    )

    assert (
        updated.predicted_demand
        == 20000
    )


# Submit For Approval
def test_submit_for_approval(
    db_session,
    sample_forecast,
):
    service = ForecastService(
        db_session
    )

    created = service.create_forecast(
        forecast=sample_forecast,
        user_id=1,
    )

    submitted = (
        service.submit_for_approval(
            forecast_id=created.id,
            organization_id=1,
        )
    )

    assert (
        submitted.status
        == ForecastStatus.SUBMITTED
    )


# Archive Forecast
def test_archive_forecast(
    db_session,
    sample_forecast,
):
    service = ForecastService(
        db_session
    )

    created = service.create_forecast(
        forecast=sample_forecast,
        user_id=1,
    )

    archived = (
        service.archive_forecast(
            forecast_id=created.id,
            organization_id=1,
        )
    )

    assert (
        archived.status
        == ForecastStatus.ARCHIVED
    )


# Governance Check
def test_governance_check(
    db_session,
    sample_forecast,
):
    service = ForecastService(
        db_session
    )

    created = service.create_forecast(
        forecast=sample_forecast,
        user_id=1,
    )

    result = (
        service.governance_check(
            forecast_id=created.id,
            organization_id=1,
        )
    )

    assert result["compliant"] is True
    assert len(
        result["issues"]
    ) == 0


# Forecast Not Found
def test_forecast_not_found(
    db_session,
):
    service = ForecastService(
        db_session
    )

    with pytest.raises(
        Exception
    ):
        service.get_forecast(
            99999,
            1,
        )


# Dashboard Metrics
def test_dashboard_metrics(
    db_session,
    sample_forecast,
):
    service = ForecastService(
        db_session
    )

    service.create_forecast(
        forecast=sample_forecast,
        user_id=1,
    )

    metrics = (
        service.dashboard_metrics(
            organization_id=1
        )
    )

    assert isinstance(
        metrics,
        dict,
    )