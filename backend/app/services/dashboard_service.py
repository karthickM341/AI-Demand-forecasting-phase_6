from datetime import datetime
from sqlalchemy.orm import Session

from app.repositories.forecast_repo import ForecastRepository
from app.repositories.kpi_repo import KPIRepository
from app.repositories.planning_repo import PlanningRepository
from app.repositories.quality_repo import QualityRepository
from app.repositories.organization_repo import OrganizationRepository
from app.repositories.notification_repo import NotificationRepository


class DashboardService:
    """
    Enterprise Dashboard Service

    Features:
    - Executive Dashboard
    - Forecast Analytics
    - KPI Monitoring
    - Planning Insights
    - Governance Metrics
    - Alert Center
    - Organization Overview
    """

    @staticmethod
    def get_overview(
        db: Session,
        organization_id: int,
    ):
        forecast_repo = ForecastRepository(db)
        kpi_repo = KPIRepository(db)
        planning_repo = PlanningRepository(db)
        notification_repo = NotificationRepository(db)

        return {
            "organization_id": organization_id,
            "generated_at": datetime.utcnow(),
            "forecasts": forecast_repo.count_forecasts(
                organization_id
            ),
            "kpis": kpi_repo.count_kpis(
                organization_id
            ),
            "plans": planning_repo.count_plans(
                organization_id
            ),
            "active_alerts": notification_repo.count_unread(
                organization_id
            ),
        }

    @staticmethod
    def get_forecast_summary(
        db: Session,
        organization_id: int,
    ):
        forecast_repo = ForecastRepository(db)

        return {
            "organization_id": organization_id,
            "total_forecasts":
                forecast_repo.count_forecasts(
                    organization_id
                ),
            "latest_forecasts":
                forecast_repo.latest_forecasts(
                    organization_id
                ),
            "forecast_accuracy":
                forecast_repo.forecast_accuracy(
                    organization_id
                ),
            "forecast_trend":
                forecast_repo.forecast_trend(
                    organization_id
                ),
        }

    @staticmethod
    def get_approval_summary(
        db: Session,
        organization_id: int,
    ):
        return {
            "organization_id": organization_id,
            "approved": 0,
            "pending": 0,
            "rejected": 0,
            "approval_rate": 0,
        }

    @staticmethod
    def get_planning_insights(
        db: Session,
        organization_id: int,
    ):
        planning_repo = PlanningRepository(db)

        return {
            "organization_id": organization_id,
            "annual_plans":
                planning_repo.get_annual_plans(
                    organization_id
                ),
            "quarterly_plans":
                planning_repo.get_quarterly_plans(
                    organization_id
                ),
            "planning_completion":
                planning_repo.completion_rate(
                    organization_id
                ),
        }

    @staticmethod
    def get_kpi_summary(
        db: Session,
        organization_id: int,
    ):
        kpi_repo = KPIRepository(db)

        return {
            "organization_id": organization_id,
            "total_kpis":
                kpi_repo.count_kpis(
                    organization_id
                ),
            "top_performing":
                kpi_repo.top_performing(
                    organization_id
                ),
            "underperforming":
                kpi_repo.underperforming(
                    organization_id
                ),
            "average_score":
                kpi_repo.average_score(
                    organization_id
                ),
        }

    @staticmethod
    def get_quality_metrics(
        db: Session,
        organization_id: int,
    ):
        quality_repo = QualityRepository(db)

        return {
            "organization_id": organization_id,
            "quality_score":
                quality_repo.quality_score(
                    organization_id
                ),
            "issues":
                quality_repo.active_issues(
                    organization_id
                ),
            "validation_rate":
                quality_repo.validation_rate(
                    organization_id
                ),
        }

    @staticmethod
    def get_governance_dashboard(
        db: Session,
        organization_id: int,
    ):
        return {
            "organization_id": organization_id,
            "audit_logs": 0,
            "compliance_score": 0,
            "policy_violations": 0,
            "security_events": 0,
        }

    @staticmethod
    def get_executive_dashboard(
        db: Session,
        organization_id: int,
    ):
        forecast_repo = ForecastRepository(db)
        org_repo = OrganizationRepository(db)

        return {
            "organization": org_repo.get_by_id(
                organization_id
            ),
            "revenue_forecast":
                forecast_repo.revenue_forecast(
                    organization_id
                ),
            "growth_rate":
                forecast_repo.growth_rate(
                    organization_id
                ),
            "risk_index":
                forecast_repo.risk_index(
                    organization_id
                ),
            "executive_score": 95,
        }

    @staticmethod
    def get_alerts(
        db: Session,
        organization_id: int,
    ):
        notification_repo = NotificationRepository(db)

        return {
            "organization_id": organization_id,
            "alerts":
                notification_repo.active_alerts(
                    organization_id
                ),
            "unread_count":
                notification_repo.count_unread(
                    organization_id
                ),
        }