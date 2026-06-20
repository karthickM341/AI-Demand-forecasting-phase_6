from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.models.kpi import KPI, KPIStatus
from app.repositories.kpi_repo import KPIRepository
from app.services.audit_service import AuditService


class KPIService:
    """
    Enterprise KPI Service

    Features:
    - KPI Lifecycle Management
    - KPI Performance Tracking
    - Threshold Monitoring
    - Alert Detection
    - Executive Analytics
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.repo = KPIRepository(db)
        self.audit_service = AuditService(db)

    # KPI CRUD
    def create_kpi(
        self,
        kpi: KPI,
        user_id: int,
    ) -> KPI:
        """
        Create KPI.
        """

        created = self.repo.create(kpi)

        self.audit_service.log_event(
            organization_id=created.organization_id,
            user_id=user_id,
            action="kpi_created",
            entity_type="kpi",
            entity_id=created.id,
        )

        return created

    def get_kpi(
        self,
        kpi_id: int,
        organization_id: int,
    ) -> KPI:
        """
        Get KPI by ID.
        """

        kpi = self.repo.get_by_id(
            kpi_id,
            organization_id,
        )

        if not kpi:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="KPI not found",
            )

        return kpi

    def update_kpi(
        self,
        kpi_id: int,
        organization_id: int,
        updates: dict,
    ) -> KPI:
        """
        Update KPI.
        """

        kpi = self.get_kpi(
            kpi_id,
            organization_id,
        )

        for field, value in updates.items():
            if hasattr(kpi, field):
                setattr(
                    kpi,
                    field,
                    value,
                )

        updated = self.repo.update(kpi)

        return updated

    def delete_kpi(
        self,
        kpi_id: int,
        organization_id: int,
    ) -> None:
        """
        Delete KPI.
        """

        kpi = self.get_kpi(
            kpi_id,
            organization_id,
        )

        self.repo.delete(kpi)

    # KPI Value Tracking
    def update_value(
        self,
        kpi_id: int,
        organization_id: int,
        value: float,
        user_id: int,
    ) -> KPI:
        """
        Update KPI value.
        """

        kpi = self.get_kpi(
            kpi_id,
            organization_id,
        )

        kpi.current_value = value

        updated = self.repo.update(kpi)

        self.audit_service.kpi_updated(
            organization_id=organization_id,
            user_id=user_id,
            kpi_id=kpi.id,
            value=value,
        )

        return updated

    # KPI Monitoring
    def critical_kpis(
        self,
        organization_id: int,
    ):
        return self.repo.critical_kpis(
            organization_id
        )

    def warning_kpis(
        self,
        organization_id: int,
    ):
        return self.repo.warning_kpis(
            organization_id
        )

    def active_kpis(
        self,
        organization_id: int,
    ):
        return self.repo.active_kpis(
            organization_id
        )

    # KPI Alerts
    def generate_alerts(
        self,
        organization_id: int,
    ) -> list[dict]:
        """
        Generate KPI alerts.
        """

        alerts = []

        for kpi in self.repo.critical_kpis(
            organization_id
        ):
            alerts.append(
                {
                    "kpi_id": kpi.id,
                    "kpi_name": kpi.name,
                    "severity": "critical",
                    "message": (
                        f"{kpi.name} "
                        "requires immediate attention"
                    ),
                }
            )

        for kpi in self.repo.warning_kpis(
            organization_id
        ):
            alerts.append(
                {
                    "kpi_id": kpi.id,
                    "kpi_name": kpi.name,
                    "severity": "warning",
                    "message": (
                        f"{kpi.name} "
                        "is approaching threshold"
                    ),
                }
            )

        return alerts

    # KPI Dashboard
    def dashboard(
        self,
        organization_id: int,
    ) -> dict:
        """
        KPI dashboard metrics.
        """

        return {
            "metrics": (
                self.repo.dashboard_metrics(
                    organization_id
                )
            ),
            "average_achievement": (
                self.repo.average_achievement(
                    organization_id
                )
            ),
            "critical_kpis": len(
                self.repo.critical_kpis(
                    organization_id
                )
            ),
            "warning_kpis": len(
                self.repo.warning_kpis(
                    organization_id
                )
            ),
        }

    # KPI Status Management
    def activate(
        self,
        kpi_id: int,
        organization_id: int,
    ) -> KPI:

        kpi = self.get_kpi(
            kpi_id,
            organization_id,
        )

        kpi.status = KPIStatus.ACTIVE

        return self.repo.update(kpi)

    def archive(
        self,
        kpi_id: int,
        organization_id: int,
    ) -> KPI:

        kpi = self.get_kpi(
            kpi_id,
            organization_id,
        )

        kpi.status = KPIStatus.ARCHIVED

        return self.repo.update(kpi)

    # Executive Analytics
    def executive_summary(
        self,
        organization_id: int,
    ) -> dict:
        """
        Executive KPI summary.
        """

        metrics = self.repo.dashboard_metrics(
            organization_id
        )

        return {
            **metrics,
            "average_achievement":
                self.repo.average_achievement(
                    organization_id
                ),
        }