from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.report import (
    Report,
    ReportStatus,
    ReportType,
)


class ReportRepository:
    """
    Enterprise Report Repository
    """

    def __init__(self, db: Session):
        self.db = db

    # Create Report
    def create(self, report: Report) -> Report:
        self.db.add(report)
        self.db.commit()
        self.db.refresh(report)
        return report

    # Get By ID
    def get_by_id(
        self,
        report_id: int,
        organization_id: int,
    ) -> Report | None:

        return (
            self.db.query(Report)
            .filter(
                Report.id == report_id,
                Report.organization_id == organization_id,
            )
            .first()
        )

    # Update
    def update(
        self,
        report: Report,
    ) -> Report:

        self.db.commit()
        self.db.refresh(report)
        return report

    # Delete
    def delete(
        self,
        report: Report,
    ) -> bool:

        self.db.delete(report)
        self.db.commit()
        return True

    # List Reports
    def list_reports(
        self,
        organization_id: int,
        skip: int = 0,
        limit: int = 100,
    ):

        return (
            self.db.query(Report)
            .filter(
                Report.organization_id == organization_id
            )
            .offset(skip)
            .limit(limit)
            .all()
        )

    # By Status
    def by_status(
        self,
        organization_id: int,
        status: ReportStatus,
    ):

        return (
            self.db.query(Report)
            .filter(
                Report.organization_id == organization_id,
                Report.status == status,
            )
            .all()
        )

    # By Type
    def by_type(
        self,
        organization_id: int,
        report_type: ReportType,
    ):

        return (
            self.db.query(Report)
            .filter(
                Report.organization_id == organization_id,
                Report.report_type == report_type,
            )
            .all()
        )

    # Recent Reports
    def recent_reports(
        self,
        organization_id: int,
        limit: int = 10,
    ):

        return (
            self.db.query(Report)
            .filter(
                Report.organization_id == organization_id
            )
            .order_by(
                Report.created_at.desc()
            )
            .limit(limit)
            .all()
        )

    # Metrics
    def metrics(
        self,
        organization_id: int,
    ) -> dict:

        total_reports = (
            self.db.query(func.count(Report.id))
            .filter(
                Report.organization_id == organization_id
            )
            .scalar()
        )

        generated_reports = (
            self.db.query(func.count(Report.id))
            .filter(
                Report.organization_id == organization_id,
                Report.status == ReportStatus.GENERATED,
            )
            .scalar()
        )

        failed_reports = (
            self.db.query(func.count(Report.id))
            .filter(
                Report.organization_id == organization_id,
                Report.status == ReportStatus.FAILED,
            )
            .scalar()
        )

        archived_reports = (
            self.db.query(func.count(Report.id))
            .filter(
                Report.organization_id == organization_id,
                Report.status == ReportStatus.ARCHIVED,
            )
            .scalar()
        )

        return {
            "total_reports": total_reports,
            "generated_reports": generated_reports,
            "failed_reports": failed_reports,
            "archived_reports": archived_reports,
        }