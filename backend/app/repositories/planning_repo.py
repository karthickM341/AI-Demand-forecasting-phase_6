from sqlalchemy import desc, func, select
from sqlalchemy.orm import Session
from app.models.planning import (
    Planning,
    PlanningPeriod,
    PlanningStatus,
)

class PlanningRepository:
    """
    Enterprise Strategic Planning Repository
    """

    def __init__(self, db: Session):
        self.db = db

    # CRUD Operations
    def create(
        self,
        planning: Planning,
    ) -> Planning:
        self.db.add(planning)
        self.db.commit()
        self.db.refresh(planning)

        return planning

    def get_by_id(
        self,
        planning_id: int,
        organization_id: int,
    ) -> Planning | None:
        stmt = select(Planning).where(
            Planning.id == planning_id,
            Planning.organization_id == organization_id,
        )

        return self.db.scalar(stmt)

    def update(
        self,
        planning: Planning,
    ) -> Planning:
        self.db.commit()
        self.db.refresh(planning)

        return planning

    def delete(
        self,
        planning: Planning,
    ) -> None:
        self.db.delete(planning)
        self.db.commit()

    # Planning Queries
    def list_plans(
        self,
        organization_id: int,
        skip: int = 0,
        limit: int = 100,
    ) -> list[Planning]:
        stmt = (
            select(Planning)
            .where(
                Planning.organization_id == organization_id
            )
            .order_by(desc(Planning.created_at))
            .offset(skip)
            .limit(limit)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def annual_plans(
        self,
        organization_id: int,
        fiscal_year: int,
    ) -> list[Planning]:
        stmt = (
            select(Planning)
            .where(
                Planning.organization_id == organization_id,
                Planning.period_type == PlanningPeriod.ANNUAL,
                Planning.fiscal_year == fiscal_year,
            )
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def quarterly_plans(
        self,
        organization_id: int,
        fiscal_year: int,
    ) -> list[Planning]:
        stmt = (
            select(Planning)
            .where(
                Planning.organization_id == organization_id,
                Planning.period_type == PlanningPeriod.QUARTERLY,
                Planning.fiscal_year == fiscal_year,
            )
            .order_by(Planning.quarter)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def active_plans(
        self,
        organization_id: int,
    ) -> list[Planning]:
        stmt = (
            select(Planning)
            .where(
                Planning.organization_id == organization_id,
                Planning.status == PlanningStatus.ACTIVE,
            )
            .order_by(desc(Planning.updated_at))
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Forecast Alignment
    def plans_off_track(
        self,
        organization_id: int,
    ) -> list[Planning]:
        plans = self.active_plans(
            organization_id
        )

        return [
            plan
            for plan in plans
            if not plan.is_on_track
        ]

    # Dashboard Analytics
    def metrics(
        self,
        organization_id: int,
    ) -> dict:
        total = self.db.scalar(
            select(func.count(Planning.id))
            .where(
                Planning.organization_id
                == organization_id
            )
        ) or 0

        active = self.db.scalar(
            select(func.count(Planning.id))
            .where(
                Planning.organization_id
                == organization_id,
                Planning.status
                == PlanningStatus.ACTIVE,
            )
        ) or 0

        completed = self.db.scalar(
            select(func.count(Planning.id))
            .where(
                Planning.organization_id
                == organization_id,
                Planning.status
                == PlanningStatus.COMPLETED,
            )
        ) or 0

        off_track = len(
            self.plans_off_track(
                organization_id
            )
        )

        return {
            "total_plans": total,
            "active_plans": active,
            "completed_plans": completed,
            "off_track_plans": off_track,
        }

    def average_achievement(
        self,
        organization_id: int,
    ) -> float:
        plans = self.active_plans(
            organization_id
        )

        values = [
            float(plan.achievement_percentage)
            for plan in plans
            if plan.achievement_percentage
            is not None
        ]

        if not values:
            return 0.0

        return round(
            sum(values) / len(values),
            2,
        )

    # Fiscal Planning
    def current_year_plans(
        self,
        organization_id: int,
        fiscal_year: int,
    ) -> list[Planning]:
        stmt = (
            select(Planning)
            .where(
                Planning.organization_id == organization_id,
                Planning.fiscal_year == fiscal_year,
            )
            .order_by(desc(Planning.created_at))
        )

        return list(
            self.db.scalars(stmt).all()
        )