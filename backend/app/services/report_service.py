from datetime import datetime
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.models.report import (
    Report,
    ReportStatus,
)
from app.repositories.report_repo import (
    ReportRepository,
)
from app.services.audit_service import (
    AuditService,
)


class ReportService:
    """
    Enterprise Report Service

    Features
    --------
    - Report Generation
    - Report Lifecycle Management
    - Executive Reporting
    - Governance Reporting
    - Export Management
    - Report Analytics
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.repo = ReportRepository(db)
        self.audit_service = AuditService(db)

    # Report Creation
    def create_report(
        self,
        report: Report,
        user_id: int,
    ) -> Report:
        """
        Create report record.
        """

        report.status = (
            ReportStatus.PENDING
        )

        created = self.repo.create(
            report
        )

        self.audit_service.log_event(
            organization_id=created.organization_id,
            user_id=user_id,
            action="report_created",
            entity_type="report",
            entity_id=created.id,
        )

        return created

    # Get Report
    def get_report(
        self,
        report_id: int,
        organization_id: int,
    ) -> Report:

        report = self.repo.get_by_id(
            report_id,
            organization_id,
        )

        if not report:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Report not found",
            )

        return report

    # Report Generation
    def generate_report(
        self,
        report_id: int,
        organization_id: int,
        file_path: str,
    ) -> Report:
        """
        Mark report as generated.
        """

        report = self.get_report(
            report_id,
            organization_id,
        )

        report.status = (
            ReportStatus.GENERATED
        )

        report.file_path = file_path
        report.generated_at = (
            datetime.utcnow()
        )

        updated = self.repo.update(
            report
        )

        self.audit_service.log_event(
            organization_id=organization_id,
            user_id=report.generated_by,
            action="report_generated",
            entity_type="report",
            entity_id=report.id,
        )

        return updated

    # Report Failure
    def mark_failed(
        self,
        report_id: int,
        organization_id: int,
    ) -> Report:

        report = self.get_report(
            report_id,
            organization_id,
        )

        report.status = (
            ReportStatus.FAILED
        )

        return self.repo.update(
            report
        )

    # Archive Report
    def archive_report(
        self,
        report_id: int,
        organization_id: int,
    ) -> Report:

        report = self.get_report(
            report_id,
            organization_id,
        )

        report.status = (
            ReportStatus.ARCHIVED
        )

        return self.repo.update(
            report
        )

    # Download Support
    def download_info(
        self,
        report_id: int,
        organization_id: int,
    ) -> dict:

        report = self.get_report(
            report_id,
            organization_id,
        )

        return {
            "report_id": report.id,
            "title": report.title,
            "file_path": report.file_path,
            "generated_at": report.generated_at,
        }

    
    # Report Queries
    def list_reports(
        self,
        organization_id: int,
        skip: int = 0,
        limit: int = 100,
    ):
        return self.repo.list_reports(
            organization_id=organization_id,
            skip=skip,
            limit=limit,
        )

    def reports_by_type(
        self,
        organization_id: int,
        report_type: str,
    ):
        return self.repo.by_type(
            organization_id,
            report_type,
        )

    def generated_reports(
        self,
        organization_id: int,
    ):
        return self.repo.generated_reports(
            organization_id
        )

    # Dashboard Analytics
    def dashboard(
        self,
        organization_id: int,
    ) -> dict:
        """
        Reporting dashboard.
        """

        return {
            "metrics":
                self.repo.metrics(
                    organization_id
                ),
            "recent_reports":
                self.repo.recent_reports(
                    organization_id
                ),
        }

    # Executive Reporting
    def executive_summary(
        self,
        organization_id: int,
    ) -> dict:
        """
        Executive reporting overview.
        """

        metrics = self.repo.metrics(
            organization_id
        )

        return {
            "total_reports":
                metrics.get(
                    "total_reports",
                    0,
                ),
            "generated_reports":
                metrics.get(
                    "generated_reports",
                    0,
                ),
            "failed_reports":
                metrics.get(
                    "failed_reports",
                    0,
                ),
            "archived_reports":
                metrics.get(
                    "archived_reports",
                    0,
                ),
        }

    # Governance Reports
    def governance_reports(
        self,
        organization_id: int,
    ):
        """
        Governance report listing.
        """

        return self.repo.by_type(
            organization_id,
            "governance",
        )

    def quality_reports(
        self,
        organization_id: int,
    ):
        """
        Data quality reports.
        """

        return self.repo.by_type(
            organization_id,
            "quality",
        )

    def executive_reports(
        self,
        organization_id: int,
    ):
        """
        Executive reports.
        """

        return self.repo.by_type(
            organization_id,
            "executive",
        )