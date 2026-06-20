import pytest

from fastapi import HTTPException

from app.models.workflow import (
    Workflow,
    WorkflowStatus,
    WorkflowType,
)
from app.services.workflow_service import (
    WorkflowService,
)


# Fixtures
@pytest.fixture
def workflow_service(db_session):
    return WorkflowService(db_session)

@pytest.fixture
def sample_workflow():
    return Workflow(
        organization_id=1,
        name="Daily Forecast Generation",
        description="Automated forecast workflow",
        workflow_type=WorkflowType.FORECAST_GENERATION,
        trigger_type="schedule",
        schedule_expression="0 2 * * *",
        status=WorkflowStatus.ACTIVE,
        created_by=1,
    )


# Create Workflow
def test_create_workflow(
    workflow_service,
    sample_workflow,
):
    workflow = workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    assert workflow.id is not None
    assert workflow.name == (
        "Daily Forecast Generation"
    )
    assert workflow.organization_id == 1


# Get Workflow
def test_get_workflow(
    workflow_service,
    sample_workflow,
):
    created = workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    workflow = workflow_service.get_workflow(
        created.id,
        1,
    )

    assert workflow.id == created.id


# Update Workflow
def test_update_workflow(
    workflow_service,
    sample_workflow,
):
    created = workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    updated = workflow_service.update_workflow(
        workflow_id=created.id,
        organization_id=1,
        updates={
            "name":
            "Updated Workflow"
        },
    )

    assert (
        updated.name
        == "Updated Workflow"
    )


# Activate Workflow
def test_activate_workflow(
    workflow_service,
    sample_workflow,
):
    sample_workflow.status = (
        WorkflowStatus.INACTIVE
    )

    created = workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    workflow = workflow_service.activate(
        created.id,
        1,
    )

    assert (
        workflow.status
        == WorkflowStatus.ACTIVE
    )

# Pause Workflow
def test_pause_workflow(
    workflow_service,
    sample_workflow,
):
    created = workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    workflow = workflow_service.pause(
        created.id,
        1,
    )

    assert (
        workflow.status
        == WorkflowStatus.PAUSED
    )


# Deactivate Workflow
def test_deactivate_workflow(
    workflow_service,
    sample_workflow,
):
    created = workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    workflow = workflow_service.deactivate(
        created.id,
        1,
    )

    assert (
        workflow.status
        == WorkflowStatus.INACTIVE
    )


# Execute Workflow
def test_execute_workflow(
    workflow_service,
    sample_workflow,
):
    created = workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    result = (
        workflow_service.execute_workflow(
            workflow_id=created.id,
            organization_id=1,
            user_id=1,
        )
    )

    assert (
        result["status"]
        == "completed"
    )

    assert (
        result["workflow_id"]
        == created.id
    )

# Execute Inactive Workflow
def test_execute_inactive_workflow(
    workflow_service,
    sample_workflow,
):
    sample_workflow.status = (
        WorkflowStatus.INACTIVE
    )

    created = workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    with pytest.raises(
        HTTPException
    ):
        workflow_service.execute_workflow(
            workflow_id=created.id,
            organization_id=1,
        )


# Search Workflow
def test_search_workflow(
    workflow_service,
    sample_workflow,
):
    workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    results = workflow_service.search(
        organization_id=1,
        keyword="Forecast",
    )

    assert isinstance(
        results,
        list,
    )


# Dashboard Analytics
def test_workflow_dashboard(
    workflow_service,
    sample_workflow,
):
    workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    dashboard = (
        workflow_service.dashboard(
            organization_id=1
        )
    )

    assert isinstance(
        dashboard,
        dict,
    )

    assert "metrics" in dashboard

# Executive Summary
def test_executive_summary(
    workflow_service,
    sample_workflow,
):
    workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    summary = (
        workflow_service
        .executive_summary(
            organization_id=1
        )
    )

    assert isinstance(
        summary,
        dict,
    )

# Workflow Not Found
def test_workflow_not_found(
    workflow_service,
):
    with pytest.raises(
        HTTPException
    ):
        workflow_service.get_workflow(
            999999,
            1,
        )

# Delete Workflow
def test_delete_workflow(
    workflow_service,
    sample_workflow,
):
    created = workflow_service.create_workflow(
        workflow=sample_workflow,
        user_id=1,
    )

    workflow_service.delete_workflow(
        created.id,
        1,
    )

    with pytest.raises(
        HTTPException
    ):
        workflow_service.get_workflow(
            created.id,
            1,
        )