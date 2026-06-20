from sqlalchemy import desc, func, select
from sqlalchemy.orm import Session
from app.models.quality import (
    DataQuality,
    QualityStatus,
)


class QualityRepository:
    """
    Enterprise Data Quality Repository

    Features:
    - Data Quality Tracking
    - Validation Monitoring
    - Quality Analytics
    - Executive Dashboard Metrics
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db

    # CRUD Operations
    def create(
        self,
        quality: DataQuality,
    ) -> DataQuality:
        self.db.add(quality)
        self.db.commit()
        self.db.refresh(quality)

        return quality

    def get_by_id(
        self,
        quality_id: int,
        organization_id: int,
    ) -> DataQuality | None:
        stmt = select(DataQuality).where(
            DataQuality.id == quality_id,
            DataQuality.organization_id == organization_id,
        )

        return self.db.scalar(stmt)

    def update(
        self,
        quality: DataQuality,
    ) -> DataQuality:
        self.db.commit()
        self.db.refresh(quality)
        return quality

    # Dataset Quality Queries
    def get_latest_by_dataset(
        self,
        dataset_id: int,
        organization_id: int,
    ) -> DataQuality | None:
        stmt = (
            select(DataQuality)
            .where(
                DataQuality.dataset_id == dataset_id,
                DataQuality.organization_id == organization_id,
            )
            .order_by(
                desc(DataQuality.scanned_at)
            )
            .limit(1)
        )

        return self.db.scalar(stmt)

    def list_quality_reports(
        self,
        organization_id: int,
        limit: int = 100,
    ) -> list[DataQuality]:
        stmt = (
            select(DataQuality)
            .where(
                DataQuality.organization_id == organization_id
            )
            .order_by(
                desc(DataQuality.scanned_at)
            )
            .limit(limit)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Quality Monitoring
    def critical_datasets(
        self,
        organization_id: int,
    ) -> list[DataQuality]:
        stmt = (
            select(DataQuality)
            .where(
                DataQuality.organization_id == organization_id,
                DataQuality.status == QualityStatus.CRITICAL,
            )
            .order_by(
                desc(DataQuality.quality_score)
            )
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def warning_datasets(
        self,
        organization_id: int,
    ) -> list[DataQuality]:
        stmt = (
            select(DataQuality)
            .where(
                DataQuality.organization_id == organization_id,
                DataQuality.status == QualityStatus.WARNING,
            )
            .order_by(
                desc(DataQuality.scanned_at)
            )
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Quality Analytics
    def average_quality_score(
        self,
        organization_id: int,
    ) -> float:
        score = self.db.scalar(
            select(
                func.avg(
                    DataQuality.quality_score
                )
            ).where(
                DataQuality.organization_id
                == organization_id
            )
        )

        return round(
            float(score or 0),
            2,
        )

    def total_issues(
        self,
        organization_id: int,
    ) -> int:
        reports = self.list_quality_reports(
            organization_id=organization_id,
            limit=500,
        )

        return sum(
            report.issue_count
            for report in reports
        )

    # Dashboard Metrics
    def metrics(
        self,
        organization_id: int,
    ) -> dict:
        total_scans = self.db.scalar(
            select(
                func.count(
                    DataQuality.id
                )
            ).where(
                DataQuality.organization_id
                == organization_id
            )
        ) or 0

        critical = self.db.scalar(
            select(
                func.count(
                    DataQuality.id
                )
            ).where(
                DataQuality.organization_id
                == organization_id,
                DataQuality.status
                == QualityStatus.CRITICAL,
            )
        ) or 0

        warning = self.db.scalar(
            select(
                func.count(
                    DataQuality.id
                )
            ).where(
                DataQuality.organization_id
                == organization_id,
                DataQuality.status
                == QualityStatus.WARNING,
            )
        ) or 0

        return {
            "total_scans": total_scans,
            "average_quality_score": self.average_quality_score(
                organization_id
            ),
            "critical_datasets": critical,
            "warning_datasets": warning,
            "total_issues": self.total_issues(
                organization_id
            ),
        }

    # Governance Support
    def low_quality_datasets(
        self,
        organization_id: int,
        threshold: float = 80.0,
    ) -> list[DataQuality]:
        reports = self.list_quality_reports(
            organization_id=organization_id
        )

        return [
            report
            for report in reports
            if float(report.quality_score)
            < threshold
        ]