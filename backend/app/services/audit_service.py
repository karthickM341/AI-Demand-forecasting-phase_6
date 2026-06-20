from typing import Any
from sqlalchemy.orm import Session
from app.models.audit_log import AuditLog
from app.repositories.audit_repo import AuditRepository


class AuditService:
    """
    Enterprise Audit Service

    Features:
    - Centralized Audit Logging
    - Governance Compliance
    - User Activity Tracking
    - Organization Isolation
    - Executive Audit Reporting
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.audit_repo = AuditRepository(db)

    # Log Event
    def log_event(
        self,
        organization_id: int,
        user_id: int | None,
        action: str,
        entity_type: str,
        entity_id: int | None = None,
        details: dict[str, Any] | None = None,
    ) -> AuditLog:
        """
        Create audit record.
        """

        audit_log = AuditLog(
            organization_id=organization_id,
            user_id=user_id,
            action=action,
            entity_type=entity_type,
            entity_id=entity_id,
            details=details or {},
        )

        return self.audit_repo.create(
            audit_log
        )

    # Forecast Events
    def forecast_created(
        self,
        organization_id: int,
        user_id: int,
        forecast_id: int,
    ) -> None:

        self.log_event(
            organization_id=organization_id,
            user_id=user_id,
            action="forecast_created",
            entity_type="forecast",
            entity_id=forecast_id,
        )

    def forecast_approved(
        self,
        organization_id: int,
        user_id: int,
        forecast_id: int,
    ) -> None:

        self.log_event(
            organization_id=organization_id,
            user_id=user_id,
            action="forecast_approved",
            entity_type="forecast",
            entity_id=forecast_id,
        )

    def forecast_rejected(
        self,
        organization_id: int,
        user_id: int,
        forecast_id: int,
        reason: str | None = None,
    ) -> None:

        self.log_event(
            organization_id=organization_id,
            user_id=user_id,
            action="forecast_rejected",
            entity_type="forecast",
            entity_id=forecast_id,
            details={
                "reason": reason,
            },
        )

    # Organization Events
    def organization_created(
        self,
        organization_id: int,
        user_id: int,
    ) -> None:

        self.log_event(
            organization_id=organization_id,
            user_id=user_id,
            action="organization_created",
            entity_type="organization",
            entity_id=organization_id,
        )

    # Workflow Events
    def workflow_executed(
        self,
        organization_id: int,
        user_id: int | None,
        workflow_id: int,
        status: str,
    ) -> None:

        self.log_event(
            organization_id=organization_id,
            user_id=user_id,
            action="workflow_executed",
            entity_type="workflow",
            entity_id=workflow_id,
            details={
                "status": status,
            },
        )

    # KPI Events
    def kpi_updated(
        self,
        organization_id: int,
        user_id: int,
        kpi_id: int,
        value: float,
    ) -> None:

        self.log_event(
            organization_id=organization_id,
            user_id=user_id,
            action="kpi_updated",
            entity_type="kpi",
            entity_id=kpi_id,
            details={
                "value": value,
            },
        )

    # Query Methods
    def recent_logs(
        self,
        organization_id: int,
        limit: int = 100,
    ):
        return self.audit_repo.get_recent_logs(
            organization_id=organization_id,
            limit=limit,
        )

    def user_activity(
        self,
        organization_id: int,
        user_id: int,
    ):
        return self.audit_repo.get_user_activity(
            organization_id=organization_id,
            user_id=user_id,
        )

    def entity_history(
        self,
        organization_id: int,
        entity_type: str,
        entity_id: int,
    ):
        return self.audit_repo.get_entity_history(
            organization_id=organization_id,
            entity_type=entity_type,
            entity_id=entity_id,
        )

    def audit_metrics(
        self,
        organization_id: int,
    ) -> dict:
        return self.audit_repo.metrics(
            organization_id
        )