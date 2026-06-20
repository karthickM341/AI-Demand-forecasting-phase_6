from datetime import datetime
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.models.workflow import (
    Workflow,
    WorkflowStatus,
)
from app.repositories.workflow_repo import (
    WorkflowRepository,
)
from app.services.audit_service import (
    AuditService,
)


class WorkflowService:
    """
    Enterprise Workflow Service

    Features
    --------
    - Workflow Management
    - Workflow Execution
    - Automation Monitoring
    - Scheduler Integration
    - Execution Tracking
    - Audit Logging
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.repo = WorkflowRepository(db)
        self.audit_service = AuditService(db)

    # Workflow CRUD
    
    def create_workflow(
        self,
        workflow: Workflow,
        user_id: int,
    ) -> Workflow:
        """
        Create workflow.
        """

        created = self.repo.create(
            workflow
        )

        self.audit_service.log_event(
            organization_id=created.organization_id,
            user_id=user_id,
            action="workflow_created",
            entity_type="workflow",
            entity_id=created.id,
        )

        return created

    def get_workflow(
        self,
        workflow_id: int,
        organization_id: int,
    ) -> Workflow:

        workflow = self.repo.get_by_id(
            workflow_id,
            organization_id,
        )

        if not workflow:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Workflow not found",
            )

        return workflow

    def update_workflow(
        self,
        workflow_id: int,
        organization_id: int,
        updates: dict,
    ) -> Workflow:
        """
        Update workflow.
        """

        workflow = self.get_workflow(
            workflow_id,
            organization_id,
        )

        for field, value in updates.items():
            if hasattr(workflow, field):
                setattr(
                    workflow,
                    field,
                    value,
                )

        return self.repo.update(
            workflow
        )

    def delete_workflow(
        self,
        workflow_id: int,
        organization_id: int,
    ) -> None:
        """
        Delete workflow.
        """

        workflow = self.get_workflow(
            workflow_id,
            organization_id,
        )

        self.repo.delete(
            workflow
        )

    # Workflow Lifecycle
    def activate(
        self,
        workflow_id: int,
        organization_id: int,
    ) -> Workflow:

        workflow = self.get_workflow(
            workflow_id,
            organization_id,
        )

        return self.repo.activate(
            workflow
        )

    def pause(
        self,
        workflow_id: int,
        organization_id: int,
    ) -> Workflow:

        workflow = self.get_workflow(
            workflow_id,
            organization_id,
        )

        return self.repo.pause(
            workflow
        )

    def deactivate(
        self,
        workflow_id: int,
        organization_id: int,
    ) -> Workflow:

        workflow = self.get_workflow(
            workflow_id,
            organization_id,
        )

        return self.repo.deactivate(
            workflow
        )

    # Workflow Execution
    def execute_workflow(
        self,
        workflow_id: int,
        organization_id: int,
        user_id: int | None = None,
    ) -> dict:
        """
        Execute workflow.
        """

        workflow = self.get_workflow(
            workflow_id,
            organization_id,
        )

        if (
            workflow.status
            != WorkflowStatus.ACTIVE
        ):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Workflow is not active",
            )

        workflow.last_executed_at = (
            datetime.utcnow()
        )

        self.repo.update(
            workflow
        )

        self.audit_service.workflow_executed(
            organization_id=organization_id,
            user_id=user_id,
            workflow_id=workflow.id,
            status="completed",
        )

        return {
            "workflow_id": workflow.id,
            "workflow_name": workflow.name,
            "status": "completed",
            "executed_at": workflow.last_executed_at,
        }

    # Scheduler Support
    def executable_workflows(
        self,
        organization_id: int,
    ):
        return (
            self.repo.executable_workflows(
                organization_id
            )
        )

    def recently_executed(
        self,
        organization_id: int,
    ):
        return self.repo.recently_executed(
            organization_id
        )

    # Workflow Monitoring
    def active_workflows(
        self,
        organization_id: int,
    ):
        return self.repo.active_workflows(
            organization_id
        )

    def search(
        self,
        organization_id: int,
        keyword: str,
    ):
        return self.repo.search(
            organization_id,
            keyword,
        )

    # Dashboard Analytics
    def dashboard(
        self,
        organization_id: int,
    ) -> dict:
        """
        Workflow dashboard.
        """

        return {
            "metrics":
                self.repo.metrics(
                    organization_id
                ),
            "active_workflows":
                len(
                    self.repo.active_workflows(
                        organization_id
                    )
                ),
            "recent_executions":
                len(
                    self.repo.recently_executed(
                        organization_id
                    )
                ),
        }

    # Executive Summary
    def executive_summary(
        self,
        organization_id: int,
    ) -> dict:
        """
        Executive workflow overview.
        """

        metrics = self.repo.metrics(
            organization_id
        )

        return {
            **metrics,
            "execution_ready":
                len(
                    self.repo.executable_workflows(
                        organization_id
                    )
                ),
        }