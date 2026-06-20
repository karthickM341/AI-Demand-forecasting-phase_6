from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.models.planning import (
    Planning,
    PlanningStatus,
)
from app.repositories.planning_repo import (
    PlanningRepository,
)
from app.services.audit_service import (
    AuditService,
)


class PlanningService:
    """
    Enterprise Strategic Planning Service

    Features
    --------
    - Annual Planning
    - Quarterly Planning
    - Target Tracking
    - Forecast Alignment
    - Planning Recommendations
    - Executive Analytics
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.repo = PlanningRepository(db)
        self.audit_service = AuditService(db)

    # CRUD Operations
    def create_plan(
        self,
        planning: Planning,
        user_id: int,
    ) -> Planning:
        """
        Create strategic plan.
        """

        created = self.repo.create(
            planning
        )

        self.audit_service.log_event(
            organization_id=created.organization_id,
            user_id=user_id,
            action="planning_created",
            entity_type="planning",
            entity_id=created.id,
        )

        return created

    def get_plan(
        self,
        planning_id: int,
        organization_id: int,
    ) -> Planning:
        """
        Get planning record.
        """

        plan = self.repo.get_by_id(
            planning_id,
            organization_id,
        )

        if not plan:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Planning record not found",
            )

        return plan

    def update_plan(
        self,
        planning_id: int,
        organization_id: int,
        updates: dict,
    ) -> Planning:
        """
        Update plan.
        """

        plan = self.get_plan(
            planning_id,
            organization_id,
        )

        for field, value in updates.items():
            if hasattr(plan, field):
                setattr(
                    plan,
                    field,
                    value,
                )

        return self.repo.update(
            plan
        )

    def delete_plan(
        self,
        planning_id: int,
        organization_id: int,
    ) -> None:
        """
        Delete plan.
        """

        plan = self.get_plan(
            planning_id,
            organization_id,
        )

        self.repo.delete(plan)

    # Lifecycle Management
    def activate_plan(
        self,
        planning_id: int,
        organization_id: int,
    ) -> Planning:

        plan = self.get_plan(
            planning_id,
            organization_id,
        )

        plan.status = (
            PlanningStatus.ACTIVE
        )

        return self.repo.update(plan)

    def complete_plan(
        self,
        planning_id: int,
        organization_id: int,
    ) -> Planning:

        plan = self.get_plan(
            planning_id,
            organization_id,
        )

        plan.status = (
            PlanningStatus.COMPLETED
        )

        return self.repo.update(plan)

    def archive_plan(
        self,
        planning_id: int,
        organization_id: int,
    ) -> Planning:

        plan = self.get_plan(
            planning_id,
            organization_id,
        )

        plan.status = (
            PlanningStatus.ARCHIVED
        )

        return self.repo.update(plan)

    # Planning Analytics
    def planning_alignment(
        self,
        planning_id: int,
        organization_id: int,
    ) -> dict:
        """
        Compare target vs forecast.
        """

        plan = self.get_plan(
            planning_id,
            organization_id,
        )

        forecasted = (
            plan.forecasted_demand or 0
        )

        target = (
            plan.target_demand or 0
        )

        gap = forecasted - target

        return {
            "planning_id": plan.id,
            "target_demand": target,
            "forecasted_demand": forecasted,
            "demand_gap": gap,
            "is_on_track": gap >= 0,
        }

    def generate_recommendation(
        self,
        planning_id: int,
        organization_id: int,
    ) -> dict:
        """
        Generate planning recommendation.
        """

        alignment = (
            self.planning_alignment(
                planning_id,
                organization_id,
            )
        )

        if alignment["is_on_track"]:
            recommendation = (
                "Targets are aligned "
                "with forecast demand."
            )
            priority = "low"
        else:
            recommendation = (
                "Demand forecast is below "
                "target. Review supply, "
                "pricing, or sales strategy."
            )
            priority = "high"

        return {
            "planning_id":
                planning_id,
            "recommendation":
                recommendation,
            "priority":
                priority,
        }

    # Queries
    def annual_plans(
        self,
        organization_id: int,
        fiscal_year: int,
    ):
        return self.repo.annual_plans(
            organization_id,
            fiscal_year,
        )

    def quarterly_plans(
        self,
        organization_id: int,
        fiscal_year: int,
    ):
        return self.repo.quarterly_plans(
            organization_id,
            fiscal_year,
        )

    def active_plans(
        self,
        organization_id: int,
    ):
        return self.repo.active_plans(
            organization_id
        )

    def off_track_plans(
        self,
        organization_id: int,
    ):
        return self.repo.plans_off_track(
            organization_id
        )

    # Dashboard Analytics
    def dashboard(
        self,
        organization_id: int,
    ) -> dict:
        """
        Strategic planning dashboard.
        """

        return {
            "metrics":
                self.repo.metrics(
                    organization_id
                ),
            "average_achievement":
                self.repo.average_achievement(
                    organization_id
                ),
            "off_track_plans":
                len(
                    self.repo.plans_off_track(
                        organization_id
                    )
                ),
        }

    def executive_summary(
        self,
        organization_id: int,
    ) -> dict:
        """
        Executive planning summary.
        """

        metrics = self.repo.metrics(
            organization_id
        )

        return {
            **metrics,
            "average_achievement":
                self.repo.average_achievement(
                    organization_id
                ),
        }