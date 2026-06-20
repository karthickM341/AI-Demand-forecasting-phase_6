import pytest
from fastapi import HTTPException
from app.models.organization import (
    Organization,
    OrganizationStatus,
)
from app.services.organization_service import (
    OrganizationService,
)


# Fixtures
@pytest.fixture
def sample_organization():
    return Organization(
        name="ABC Retail Group",
        code="ABC001",
        description="Retail forecasting organization",
        industry="Retail",
        contact_email="admin@abc.com",
        status=OrganizationStatus.ACTIVE,
    )


@pytest.fixture
def organization_service(db_session):
    return OrganizationService(
        db=db_session
    )


# Create Organization
def test_create_organization(
    organization_service,
    sample_organization,
):
    organization = (
        organization_service
        .create_organization(
            organization=sample_organization,
            created_by=1,
        )
    )

    assert organization.id is not None
    assert (
        organization.name
        == "ABC Retail Group"
    )
    assert (
        organization.code
        == "ABC001"
    )


# Get Organization
def test_get_organization(
    organization_service,
    sample_organization,
):
    created = (
        organization_service
        .create_organization(
            organization=sample_organization,
            created_by=1,
        )
    )

    result = (
        organization_service
        .get_organization(
            created.id
        )
    )

    assert (
        result.id
        == created.id
    )


# Update Organization
def test_update_organization(
    organization_service,
    sample_organization,
):
    created = (
        organization_service
        .create_organization(
            organization=sample_organization,
            created_by=1,
        )
    )

    updated = (
        organization_service
        .update_organization(
            organization_id=created.id,
            updates={
                "industry":
                "E-Commerce"
            },
        )
    )

    assert (
        updated.industry
        == "E-Commerce"
    )


# Update Settings
def test_update_settings(
    organization_service,
    sample_organization,
):
    created = (
        organization_service
        .create_organization(
            organization=sample_organization,
            created_by=1,
        )
    )

    updated = (
        organization_service
        .update_settings(
            organization_id=created.id,
            settings={
                "approval_required": True,
                "forecast_horizon_days": 90,
            },
        )
    )

    assert updated is not None


# Activate Organization
def test_activate_organization(
    organization_service,
    sample_organization,
):
    created = (
        organization_service
        .create_organization(
            organization=sample_organization,
            created_by=1,
        )
    )

    result = (
        organization_service
        .activate(
            created.id
        )
    )

    assert (
        result.status
        == OrganizationStatus.ACTIVE
    )


# Suspend Organization
def test_suspend_organization(
    organization_service,
    sample_organization,
):
    created = (
        organization_service
        .create_organization(
            organization=sample_organization,
            created_by=1,
        )
    )

    suspended = (
        organization_service
        .suspend(
            created.id
        )
    )

    assert (
        suspended.status
        == OrganizationStatus.SUSPENDED
    )


# Deactivate Organization
def test_deactivate_organization(
    organization_service,
    sample_organization,
):
    created = (
        organization_service
        .create_organization(
            organization=sample_organization,
            created_by=1,
        )
    )

    deactivated = (
        organization_service
        .deactivate(
            created.id
        )
    )

    assert (
        deactivated.status
        == OrganizationStatus.INACTIVE
    )


# Search Organizations
def test_search_organizations(
    organization_service,
    sample_organization,
):
    organization_service.create_organization(
        organization=sample_organization,
        created_by=1,
    )

    results = (
        organization_service.search(
            "ABC"
        )
    )

    assert isinstance(
        results,
        list,
    )


# Active Validation
def test_validate_active_organization(
    organization_service,
    sample_organization,
):
    created = (
        organization_service
        .create_organization(
            organization=sample_organization,
            created_by=1,
        )
    )

    organization = (
        organization_service
        .validate_active_organization(
            created.id
        )
    )

    assert (
        organization.status
        == OrganizationStatus.ACTIVE
    )


# Duplicate Code Validation
def test_duplicate_code_validation(
    organization_service,
    sample_organization,
):
    organization_service.create_organization(
        organization=sample_organization,
        created_by=1,
    )

    duplicate = Organization(
        name="Another Company",
        code="ABC001",
    )

    with pytest.raises(
        HTTPException
    ):
        organization_service.create_organization(
            organization=duplicate,
            created_by=1,
        )


# Organization Not Found
def test_organization_not_found(
    organization_service,
):
    with pytest.raises(
        HTTPException
    ):
        organization_service.get_organization(
            999999
        )


# Executive Summary
def test_executive_summary(
    organization_service,
    sample_organization,
):
    organization_service.create_organization(
        organization=sample_organization,
        created_by=1,
    )

    summary = (
        organization_service
        .executive_summary()
    )

    assert isinstance(
        summary,
        dict,
    )

    assert (
        "total_organizations"
        in summary
    )


# Metrics
def test_organization_metrics(
    organization_service,
    sample_organization,
):
    organization_service.create_organization(
        organization=sample_organization,
        created_by=1,
    )

    metrics = (
        organization_service.metrics()
    )

    assert isinstance(
        metrics,
        dict,
    )