import pytest
from app.models.kpi import (
    KPI,
    KPIStatus,
)
from app.services.kpi_service import (
    KPIService,
)


# Fixtures
@pytest.fixture
def sample_kpi():
    return KPI(
        organization_id=1,
        name="Forecast Accuracy",
        category="Forecasting",
        target_value=95.0,
        current_value=90.0,
        warning_threshold=85.0,
        critical_threshold=75.0,
        status=KPIStatus.ACTIVE,
        created_by=1,
    )


# Create KPI
def test_create_kpi(
    db_session,
    sample_kpi,
):
    service = KPIService(
        db_session
    )

    result = service.create_kpi(
        kpi=sample_kpi,
        user_id=1,
    )

    assert result.id is not None
    assert (
        result.name
        == "Forecast Accuracy"
    )
    assert (
        result.organization_id
        == 1
    )


# Get KPI
def test_get_kpi(
    db_session,
    sample_kpi,
):
    service = KPIService(
        db_session
    )

    created = service.create_kpi(
        kpi=sample_kpi,
        user_id=1,
    )

    result = service.get_kpi(
        created.id,
        1,
    )

    assert result.id == created.id
    assert result.name == created.name


# Update KPI
def test_update_kpi(
    db_session,
    sample_kpi,
):
    service = KPIService(
        db_session
    )

    created = service.create_kpi(
        kpi=sample_kpi,
        user_id=1,
    )

    updated = service.update_kpi(
        kpi_id=created.id,
        organization_id=1,
        updates={
            "target_value": 98.0
        },
    )

    assert (
        updated.target_value
        == 98.0
    )


# Update KPI Value
def test_update_kpi_value(
    db_session,
    sample_kpi,
):
    service = KPIService(
        db_session
    )

    created = service.create_kpi(
        kpi=sample_kpi,
        user_id=1,
    )

    updated = service.update_value(
        kpi_id=created.id,
        organization_id=1,
        value=92.5,
        user_id=1,
    )

    assert (
        updated.current_value
        == 92.5
    )


# Activate KPI
def test_activate_kpi(
    db_session,
    sample_kpi,
):
    service = KPIService(
        db_session
    )

    created = service.create_kpi(
        kpi=sample_kpi,
        user_id=1,
    )

    result = service.activate(
        created.id,
        1,
    )

    assert (
        result.status
        == KPIStatus.ACTIVE
    )


# Archive KPI
def test_archive_kpi(
    db_session,
    sample_kpi,
):
    service = KPIService(
        db_session
    )

    created = service.create_kpi(
        kpi=sample_kpi,
        user_id=1,
    )

    archived = service.archive(
        created.id,
        1,
    )

    assert (
        archived.status
        == KPIStatus.ARCHIVED
    )


# KPI Dashboard
def test_dashboard_metrics(
    db_session,
    sample_kpi,
):
    service = KPIService(
        db_session
    )

    service.create_kpi(
        kpi=sample_kpi,
        user_id=1,
    )

    dashboard = (
        service.dashboard(
            organization_id=1
        )
    )

    assert isinstance(
        dashboard,
        dict,
    )

    assert "metrics" in dashboard


# KPI Alerts
def test_generate_alerts(
    db_session,
    sample_kpi,
):
    service = KPIService(
        db_session
    )

    sample_kpi.current_value = 70

    service.create_kpi(
        kpi=sample_kpi,
        user_id=1,
    )

    alerts = (
        service.generate_alerts(
            organization_id=1
        )
    )

    assert isinstance(
        alerts,
        list,
    )


# KPI Not Found
def test_kpi_not_found(
    db_session,
):
    service = KPIService(
        db_session
    )

    with pytest.raises(
        Exception
    ):
        service.get_kpi(
            999999,
            1,
        )


# Delete KPI
def test_delete_kpi(
    db_session,
    sample_kpi,
):
    service = KPIService(
        db_session
    )

    created = service.create_kpi(
        kpi=sample_kpi,
        user_id=1,
    )

    service.delete_kpi(
        created.id,
        1,
    )

    with pytest.raises(
        Exception
    ):
        service.get_kpi(
            created.id,
            1,
        )