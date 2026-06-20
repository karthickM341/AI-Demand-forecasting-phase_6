from sqlalchemy import desc, func, select
from sqlalchemy.orm import Session
from app.models.workflow import (
    Workflow,
    WorkflowStatus,
    WorkflowType,
)

class WorkflowRepository:
    """
    Enterprise Workflow Repository

    Features:
    - Workflow Management
    - Automation Monitoring
    - Execution Tracking
    - Workflow Analytics
    - Organization Isolation
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db

    # CRUD Operations
    def create(
        self,
        workflow: Workflow,
    ) -> Workflow:
        self.db.add(workflow)
        self.db.commit()
        self.db.refresh(workflow)

        return workflow

    def get_by_id(
        self,
        workflow_id: int,
        organization_id: int,
    ) -> Workflow | None:
        stmt = select(Workflow).where(
            Workflow.id == workflow_id,
            Workflow.organization_id == organization_id,
        )

        return self.db.scalar(stmt)

    def update(
        self,
        workflow: Workflow,
    ) -> Workflow:
        self.db.commit()
        self.db.refresh(workflow)

        return workflow

    def delete(
        self,
        workflow: Workflow,
    ) -> None:
        self.db.delete(workflow)
        self.db.commit()

    # Workflow Queries
    def list_workflows(
        self,
        organization_id: int,
        skip: int = 0,
        limit: int = 100,
    ) -> list[Workflow]:
        stmt = (
            select(Workflow)
            .where(
                Workflow.organization_id == organization_id
            )
            .order_by(desc(Workflow.created_at))
            .offset(skip)
            .limit(limit)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def active_workflows(
        self,
        organization_id: int,
    ) -> list[Workflow]:
        stmt = (
            select(Workflow)
            .where(
                Workflow.organization_id == organization_id,
                Workflow.status == WorkflowStatus.ACTIVE,
                Workflow.is_enabled.is_(True),
            )
            .order_by(Workflow.name)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def by_type(
        self,
        organization_id: int,
        workflow_type: WorkflowType,
    ) -> list[Workflow]:
        stmt = (
            select(Workflow)
            .where(
                Workflow.organization_id == organization_id,
                Workflow.workflow_type == workflow_type,
            )
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Workflow Lifecycle
    def activate(
        self,
        workflow: Workflow,
    ) -> Workflow:
        workflow.activate()

        self.db.commit()
        self.db.refresh(workflow)

        return workflow

    def pause(
        self,
        workflow: Workflow,
    ) -> Workflow:
        workflow.pause()

        self.db.commit()
        self.db.refresh(workflow)

        return workflow

    def deactivate(
        self,
        workflow: Workflow,
    ) -> Workflow:
        workflow.deactivate()

        self.db.commit()
        self.db.refresh(workflow)

        return workflow

    # Scheduler Support
    def executable_workflows(
        self,
        organization_id: int,
    ) -> list[Workflow]:
        workflows = self.active_workflows(
            organization_id
        )

        return [
            workflow
            for workflow in workflows
            if workflow.can_execute
        ]

    # Search
    def search(
        self,
        organization_id: int,
        keyword: str,
    ) -> list[Workflow]:
        stmt = (
            select(Workflow)
            .where(
                Workflow.organization_id == organization_id,
                Workflow.name.ilike(
                    f"%{keyword}%"
                ),
            )
            .order_by(Workflow.name)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Dashboard Analytics
    def metrics(
        self,
        organization_id: int,
    ) -> dict:
        total = self.db.scalar(
            select(func.count(Workflow.id))
            .where(
                Workflow.organization_id
                == organization_id
            )
        ) or 0

        active = self.db.scalar(
            select(func.count(Workflow.id))
            .where(
                Workflow.organization_id
                == organization_id,
                Workflow.status
                == WorkflowStatus.ACTIVE,
            )
        ) or 0

        paused = self.db.scalar(
            select(func.count(Workflow.id))
            .where(
                Workflow.organization_id
                == organization_id,
                Workflow.status
                == WorkflowStatus.PAUSED,
            )
        ) or 0

        disabled = self.db.scalar(
            select(func.count(Workflow.id))
            .where(
                Workflow.organization_id
                == organization_id,
                Workflow.is_enabled.is_(False),
            )
        ) or 0

        return {
            "total_workflows": total,
            "active_workflows": active,
            "paused_workflows": paused,
            "disabled_workflows": disabled,
        }

    # Automation Monitoring
    def recently_executed(
        self,
        organization_id: int,
        limit: int = 10,
    ) -> list[Workflow]:
        stmt = (
            select(Workflow)
            .where(
                Workflow.organization_id == organization_id,
                Workflow.last_executed_at.is_not(None),
            )
            .order_by(
                desc(Workflow.last_executed_at)
            )
            .limit(limit)
        )

        return list(
            self.db.scalars(stmt).all()
        )