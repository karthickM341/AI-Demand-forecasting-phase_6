from datetime import datetime
from enum import Enum

from sqlalchemy import (
    DateTime,
    Enum as SqlEnum,
    ForeignKey,
    Integer,
    Numeric,
    String,
    Text,
)

from sqlalchemy.orm import (
    Mapped,
    mapped_column,
)

from app.core.database import Base


class QualityStatus(str, Enum):
    EXCELLENT = "excellent"
    GOOD = "good"
    WARNING = "warning"
    CRITICAL = "critical"


class DataQuality(Base):
    """
    Enterprise Data Quality Assessment Model

    Supports:
    - Dataset Quality Scoring
    - Validation Results
    - Missing Data Tracking
    - Data Integrity Monitoring
    - Quality Reporting
    """

    __tablename__ = "data_quality"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    organization_id: Mapped[int] = mapped_column(
        ForeignKey("organizations.id"),
        nullable=False,
        index=True,
    )

    dataset_id: Mapped[int] = mapped_column(
        ForeignKey("datasets.id"),
        nullable=False,
        index=True,
    )

    quality_score: Mapped[float] = mapped_column(
        Numeric(5, 2),
        nullable=False,
    )

    total_records: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
    )

    valid_records: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
    )

    missing_records: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
    )

    duplicate_records: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
    )

    validation_errors: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
    )

    status: Mapped[QualityStatus] = mapped_column(
        SqlEnum(QualityStatus),
        default=QualityStatus.GOOD,
        nullable=False,
        index=True,
    )

    validation_summary: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    scanned_by: Mapped[int | None] = mapped_column(
        ForeignKey("users.id"),
        nullable=True,
    )

    scanned_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
        index=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    @property
    def completion_rate(self) -> float:
        """
        Percentage of valid records.
        """

        if self.total_records == 0:
            return 0.0

        return round(
            (self.valid_records / self.total_records) * 100,
            2,
        )

    @property
    def issue_count(self) -> int:
        """
        Total detected issues.
        """

        return (
            self.missing_records +
            self.duplicate_records +
            self.validation_errors
        )

    @property
    def is_healthy(self) -> bool:
        """
        Dataset quality health check.
        """

        return self.quality_score >= 80

    def update_score(
        self,
        score: float,
    ) -> None:
        """
        Update quality score.
        """

        self.quality_score = score

    def __repr__(self) -> str:
        return (
            f"<DataQuality("
            f"id={self.id}, "
            f"dataset_id={self.dataset_id}, "
            f"score={self.quality_score}"
            f")>"
        )