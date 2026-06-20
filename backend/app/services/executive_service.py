from sqlalchemy.orm import Session
from app.repositories.forecast_repo import ForecastRepository
from app.repositories.kpi_repo import KPIRepository
from app.repositories.notification_repo import NotificationRepository
from app.repositories.planning_repo import PlanningRepository
from app.repositories.quality_repo import QualityRepository
from app.repositories.workflow_repo import WorkflowRepository


class ExecutiveService:
    """
    Executive Command Center Service

    Features:
    - Executive Dashboard
    - Strategic Insights
    - KPI Monitoring
    - Forecast Monitoring
    - Data Quality Monitoring
    - Workflow Analytics
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db

        self.forecast_repo = ForecastRepository(db)
        self.kpi_repo = KPIRepository(db)
        self.planning_repo = PlanningRepository(db)
        self.quality_repo = QualityRepository(db)
        self.workflow_repo = WorkflowRepository(db)
        self.notification_repo = NotificationRepository(db)

    # Executive Dashboard
    def dashboard(
        self,
        organization_id: int,
    ) -> dict:
        """
        Executive overview dashboard.
        """

        return {
            "forecasts": self.forecast_repo.get_metrics(
                organization_id
            ),
            "kpis": self.kpi_repo.dashboard_metrics(
                organization_id
            ),
            "planning": self.planning_repo.metrics(
                organization_id
            ),
            "quality": self.quality_repo.metrics(
                organization_id
            ),
            "workflows": self.workflow_repo.metrics(
                organization_id
            ),
            "notifications": (
                self.notification_repo.get_metrics(
                    organization_id
                )
            ),
        }

   # Strategic Planning Insights
    def planning_insights(
        self,
        organization_id: int,
    ) -> dict:
        """
        Strategic planning overview.
        """

        return {
            "planning_metrics":
                self.planning_repo.metrics(
                    organization_id
                ),
            "average_achievement":
                self.planning_repo.average_achievement(
                    organization_id
                ),
            "off_track_plans":
                len(
                    self.planning_repo.plans_off_track(
                        organization_id
                    )
                ),
        }

    # Executive KPI Summary
    def kpi_summary(
        self,
        organization_id: int,
    ) -> dict:
        """
        KPI health summary.
        """

        return {
            "metrics":
                self.kpi_repo.dashboard_metrics(
                    organization_id
                ),
            "average_achievement":
                self.kpi_repo.average_achievement(
                    organization_id
                ),
            "critical_kpis":
                len(
                    self.kpi_repo.critical_kpis(
                        organization_id
                    )
                ),
        }

    # Forecast Summary
    def forecast_summary(
        self,
        organization_id: int,
    ) -> dict:
        """
        Forecast governance summary.
        """

        return (
            self.forecast_repo.get_metrics(
                organization_id
            )
        )

   # Data Quality Summary
    def quality_summary(
        self,
        organization_id: int,
    ) -> dict:
        """
        Dataset quality insights.
        """

        return (
            self.quality_repo.metrics(
                organization_id
            )
        )

    # Workflow Summary
    def workflow_summary(
        self,
        organization_id: int,
    ) -> dict:
        """
        Workflow execution overview.
        """

        return (
            self.workflow_repo.metrics(
                organization_id
            )
        )

    # Executive Alerts
    def executive_alerts(
        self,
        organization_id: int,
    ) -> dict:
        """
        Critical business alerts.
        """

        return {
            "critical_kpis":
                len(
                    self.kpi_repo.critical_kpis(
                        organization_id
                    )
                ),
            "critical_quality_issues":
                len(
                    self.quality_repo.critical_datasets(
                        organization_id
                    )
                ),
            "critical_notifications":
                len(
                    self.notification_repo
                    .get_priority_alerts(
                        organization_id
                    )
                ),
        }

    # Business Health Score
    def business_health_score(
        self,
        organization_id: int,
    ) -> float:
        """
        Executive business health indicator.
        """

        kpi_score = (
            self.kpi_repo.average_achievement(
                organization_id
            )
        )

        quality_score = (
            self.quality_repo.average_quality_score(
                organization_id
            )
        )

        planning_score = (
            self.planning_repo.average_achievement(
                organization_id
            )
        )

        return round(
            (
                kpi_score +
                quality_score +
                planning_score
            ) / 3,
            2,
        )