from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.models.quality import (
    DataQuality,
    QualityStatus,
)
from app.repositories.quality_repo import (
    QualityRepository,
)
from app.services.audit_service import (
    AuditService,
)


class QualityService:
    """
    Enterprise Data Quality Service

    Features
    --------
    - Dataset Validation
    - Data Quality Scoring
    - Quality Monitoring
    - Governance Validation
    - Quality Alerts
    - Executive Analytics
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.repo = QualityRepository(db)
        self.audit_service = AuditService(db)

    # Quality Assessment
    def create_assessment(
        self,
        quality: DataQuality,
        user_id: int,
    ) -> DataQuality:
        """
        Create quality assessment record.
        """

        assessment = self.repo.create(
            quality
        )

        self.audit_service.log_event(
            organization_id=assessment.organization_id,
            user_id=user_id,
            action="quality_scan_created",
            entity_type="quality",
            entity_id=assessment.id,
        )

        return assessment

    # Retrieve Assessment
    def get_assessment(
        self,
        quality_id: int,
        organization_id: int,
    ) -> DataQuality:

        assessment = self.repo.get_by_id(
            quality_id,
            organization_id,
        )

        if not assessment:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Quality assessment not found",
            )

        return assessment

    def latest_dataset_quality(
        self,
        dataset_id: int,
        organization_id: int,
    ) -> DataQuality | None:
        """
        Latest dataset quality result.
        """

        return self.repo.get_latest_by_dataset(
            dataset_id=dataset_id,
            organization_id=organization_id,
        )

    # Validation Logic
    def calculate_quality_score(
        self,
        total_records: int,
        missing_records: int,
        duplicate_records: int,
        validation_errors: int,
    ) -> float:
        """
        Calculate quality score.
        """

        if total_records <= 0:
            return 0.0

        deductions = (
            missing_records +
            duplicate_records +
            validation_errors
        )

        score = (
            (total_records - deductions)
            / total_records
        ) * 100

        return round(
            max(score, 0),
            2,
        )

    def determine_status(
        self,
        score: float,
    ) -> QualityStatus:
        """
        Determine quality status.
        """

        if score >= 90:
            return QualityStatus.EXCELLENT

        if score >= 75:
            return QualityStatus.GOOD

        if score >= 60:
            return QualityStatus.WARNING

        return QualityStatus.CRITICAL

    # Governance Validation
    def governance_check(
        self,
        quality_id: int,
        organization_id: int,
    ) -> dict:
        """
        Governance quality review.
        """

        quality = self.get_assessment(
            quality_id,
            organization_id,
        )

        issues = []

        if quality.quality_score < 80:
            issues.append(
                "Quality score below threshold"
            )

        if quality.validation_errors > 0:
            issues.append(
                "Validation errors detected"
            )

        if quality.missing_records > 0:
            issues.append(
                "Missing records detected"
            )

        return {
            "compliant": len(issues) == 0,
            "issues": issues,
        }

    # Quality Alerts
    def generate_alerts(
        self,
        organization_id: int,
    ) -> list[dict]:
        """
        Generate quality alerts.
        """

        alerts = []

        for item in self.repo.critical_datasets(
            organization_id
        ):
            alerts.append(
                {
                    "dataset_id": item.dataset_id,
                    "severity": "critical",
                    "quality_score": item.quality_score,
                    "message": (
                        "Critical dataset quality issue"
                    ),
                }
            )

        for item in self.repo.warning_datasets(
            organization_id
        ):
            alerts.append(
                {
                    "dataset_id": item.dataset_id,
                    "severity": "warning",
                    "quality_score": item.quality_score,
                    "message": (
                        "Dataset quality requires review"
                    ),
                }
            )

        return alerts

    # Quality Reports
    def quality_report(
        self,
        organization_id: int,
    ):
        return self.repo.list_quality_reports(
            organization_id
        )

    def low_quality_datasets(
        self,
        organization_id: int,
        threshold: float = 80.0,
    ):
        return self.repo.low_quality_datasets(
            organization_id,
            threshold,
        )

    # Dashboard Analytics
    def dashboard(
        self,
        organization_id: int,
    ) -> dict:
        """
        Quality management dashboard.
        """

        return {
            "metrics":
                self.repo.metrics(
                    organization_id
                ),
            "average_quality_score":
                self.repo.average_quality_score(
                    organization_id
                ),
            "critical_datasets":
                len(
                    self.repo.critical_datasets(
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
        Executive quality overview.
        """

        metrics = self.repo.metrics(
            organization_id
        )

        return {
            **metrics,
            "quality_health":
                self.repo.average_quality_score(
                    organization_id
                ),
        }