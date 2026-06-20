from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.models.governance import (
    GovernanceRecord,
    GovernanceStatus,
    LifecycleStage,
)
from app.repositories.governance_repo import (
    GovernanceRepository,
)
from app.services.audit_service import (
    AuditService,
)


class GovernanceService:
    """
    Enterprise Governance Service

    Features:
    - Forecast Governance
    - Compliance Validation
    - Lifecycle Management
    - Governance Reviews
    - Executive Governance Reporting
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.repo = GovernanceRepository(db)
        self.audit_service = AuditService(db)

   # Create Governance Record
    def create_record(
        self,
        governance: GovernanceRecord,
        user_id: int,
    ) -> GovernanceRecord:
        record = self.repo.create(
            governance
        )

        self.audit_service.log_event(
            organization_id=record.organization_id,
            user_id=user_id,
            action="governance_created",
            entity_type="governance",
            entity_id=record.id,
        )

        return record

    # Get Governance Record
    def get_record(
        self,
        governance_id: int,
        organization_id: int,
    ) -> GovernanceRecord:

        record = self.repo.get_by_id(
            governance_id,
            organization_id,
        )

        if not record:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Governance record not found",
            )

        return record

    # Governance Review
    def review(
        self,
        governance_id: int,
        organization_id: int,
        reviewer_id: int,
        governance_status: GovernanceStatus,
        notes: str | None = None,
    ) -> GovernanceRecord:

        record = self.get_record(
            governance_id,
            organization_id,
        )

        record.governance_status = (
            governance_status
        )

        record.reviewed_by = reviewer_id
        record.compliance_notes = notes

        updated = self.repo.update(
            record
        )

        self.audit_service.log_event(
            organization_id=organization_id,
            user_id=reviewer_id,
            action="governance_reviewed",
            entity_type="governance",
            entity_id=record.id,
            details={
                "status": governance_status.value,
            },
        )

        return updated

    # Lifecycle Update
    def update_lifecycle(
        self,
        governance_id: int,
        organization_id: int,
        lifecycle_stage: LifecycleStage,
        user_id: int,
    ) -> GovernanceRecord:

        record = self.get_record(
            governance_id,
            organization_id,
        )

        record.lifecycle_stage = (
            lifecycle_stage
        )

        updated = self.repo.update(
            record
        )

        self.audit_service.log_event(
            organization_id=organization_id,
            user_id=user_id,
            action="lifecycle_updated",
            entity_type="governance",
            entity_id=record.id,
            details={
                "stage": lifecycle_stage.value,
            },
        )

        return updated

    # Compliance Validation
    def validate_compliance(
        self,
        governance_id: int,
        organization_id: int,
    ) -> dict:

        record = self.get_record(
            governance_id,
            organization_id,
        )

        issues = []

        if (
            record.approval_required
            and not record.approved_by
        ):
            issues.append(
                "Approval missing"
            )

        if (
            record.governance_status
            == GovernanceStatus.NON_COMPLIANT
        ):
            issues.append(
                "Governance violation detected"
            )

        return {
            "compliant": len(issues) == 0,
            "issues": issues,
        }

    # Governance Dashboard
    def dashboard_metrics(
        self,
        organization_id: int,
    ) -> dict:
        return self.repo.metrics(
            organization_id
        )

    # Governance Records
    def list_records(
        self,
        organization_id: int,
        skip: int = 0,
        limit: int = 100,
    ):
        return self.repo.list_records(
            organization_id=organization_id,
            skip=skip,
            limit=limit,
        )

    # Compliance Records
    def compliant_records(
        self,
        organization_id: int,
    ):
        return self.repo.by_status(
            organization_id,
            GovernanceStatus.COMPLIANT,
        )

    def non_compliant_records(
        self,
        organization_id: int,
    ):
        return self.repo.by_status(
            organization_id,
            GovernanceStatus.NON_COMPLIANT,
        )

    # Executive Governance Summary
    def executive_summary(
        self,
        organization_id: int,
    ) -> dict:

        metrics = self.repo.metrics(
            organization_id
        )

        return {
            "total_records":
                metrics.get(
                    "total_records",
                    0,
                ),
            "compliant_records":
                metrics.get(
                    "compliant_records",
                    0,
                ),
            "non_compliant_records":
                metrics.get(
                    "non_compliant_records",
                    0,
                ),
            "review_required":
                metrics.get(
                    "review_required",
                    0,
                ),
        }