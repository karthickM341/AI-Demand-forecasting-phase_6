from sqlalchemy import desc, func, select
from sqlalchemy.orm import Session
from app.models.kpi import KPI, KPIStatus

class KPIRepository:
    """
    Enterprise KPI Repository

    Handles:
    - KPI Management
    - KPI Analytics
    - Threshold Monitoring
    - Organization Isolation
    """

    def __init__(self, db: Session):
        self.db = db

    # CRUD Operations
    def create(
        self,
        kpi: KPI,
    ) -> KPI:
        self.db.add(kpi)
        self.db.commit()
        self.db.refresh(kpi)

        return kpi

    def get_by_id(
        self,
        kpi_id: int,
        organization_id: int,
    ) -> KPI | None:
        stmt = select(KPI).where(
            KPI.id == kpi_id,
            KPI.organization_id == organization_id,
        )

        return self.db.scalar(stmt)

    def update(
        self,
        kpi: KPI,
    ) -> KPI:
        self.db.commit()
        self.db.refresh(kpi)

        return kpi

    def delete(
        self,
        kpi: KPI,
    ) -> None:
        self.db.delete(kpi)
        self.db.commit()

    # KPI Queries
    def list_kpis(
        self,
        organization_id: int,
        skip: int = 0,
        limit: int = 100,
    ) -> list[KPI]:
        stmt = (
            select(KPI)
            .where(
                KPI.organization_id == organization_id
            )
            .order_by(desc(KPI.created_at))
            .offset(skip)
            .limit(limit)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def active_kpis(
        self,
        organization_id: int,
    ) -> list[KPI]:
        stmt = (
            select(KPI)
            .where(
                KPI.organization_id == organization_id,
                KPI.status == KPIStatus.ACTIVE,
            )
            .order_by(KPI.name)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def by_category(
        self,
        organization_id: int,
        category: str,
    ) -> list[KPI]:
        stmt = (
            select(KPI)
            .where(
                KPI.organization_id == organization_id,
                KPI.category == category,
            )
            .order_by(KPI.name)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Threshold Monitoring
    def warning_kpis(
        self,
        organization_id: int,
    ) -> list[KPI]:
        kpis = self.active_kpis(
            organization_id
        )

        return [
            kpi
            for kpi in kpis
            if kpi.is_warning
        ]

    def critical_kpis(
        self,
        organization_id: int,
    ) -> list[KPI]:
        kpis = self.active_kpis(
            organization_id
        )

        return [
            kpi
            for kpi in kpis
            if kpi.is_critical
        ]

    # KPI Metrics
    def dashboard_metrics(
        self,
        organization_id: int,
    ) -> dict:
        total = self.db.scalar(
            select(func.count(KPI.id)).where(
                KPI.organization_id == organization_id
            )
        ) or 0

        active = self.db.scalar(
            select(func.count(KPI.id)).where(
                KPI.organization_id == organization_id,
                KPI.status == KPIStatus.ACTIVE,
            )
        ) or 0

        warning = len(
            self.warning_kpis(
                organization_id
            )
        )

        critical = len(
            self.critical_kpis(
                organization_id
            )
        )

        return {
            "total_kpis": total,
            "active_kpis": active,
            "warning_kpis": warning,
            "critical_kpis": critical,
        }

    def average_achievement(
        self,
        organization_id: int,
    ) -> float:
        kpis = self.active_kpis(
            organization_id
        )

        if not kpis:
            return 0.0

        return round(
            sum(
                kpi.achievement_percentage
                for kpi in kpis
            ) / len(kpis),
            2,
        )