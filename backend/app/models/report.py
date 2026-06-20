from datetime import datetime
from enum import Enum
from sqlalchemy import (
    DateTime,
    Enum as SqlEnum,
    ForeignKey,
    Integer,
    JSON,
    String,
    Text,
)
from sqlalchemy.orm import (
    Mapped,
    mapped_column,
)
from app.core.database import Base


class ReportType(str, Enum):
    FORECAST = "forecast"
    KPI = "kpi"
    PLANNING = "planning"
    GOVERNANCE = "governance"
    QUALITY = "quality"
    EXECUTIVE = "executive"


class ReportStatus(str, Enum):
    PENDING = "pending"
    GENERATED = "generated"
    FAILED = "failed"
    ARCHIVED = "archived"


class Report(Base):
    """
    Enterprise Reporting Model

    Supports:
    - Forecast Reports
    - KPI Reports
    - Planning Reports
    - Governance Reports
    - Executive Reports
    - Export Tracking
    """

    __tablename__ = "reports"

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

    title: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
        index=True,
    )

    report_type: Mapped[ReportType] = mapped_column(
        SqlEnum(ReportType),
        nullable=False,
        index=True,
    )

    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    status: Mapped[ReportStatus] = mapped_column(
        SqlEnum(ReportStatus),
        default=ReportStatus.PENDING,
        nullable=False,
        index=True,
    )

    file_format: Mapped[str] = mapped_column(
        String(20),
        default="pdf",
    )

    file_path: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    report_data: Mapped[dict | None] = mapped_column(
        JSON,
        nullable=True,
    )

    generated_by: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    generated_at: Mapped[datetime | None] = mapped_column(
        DateTime,
        nullable=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )

    @property
    def is_generated(self) -> bool:
        return self.status == ReportStatus.GENERATED

    @property
    def is_failed(self) -> bool:
        return self.status == ReportStatus.FAILED

    def mark_generated(
        self,
        file_path: str,
    ) -> None:
        """
        Mark report as successfully generated.
        """
        self.status = ReportStatus.GENERATED
        self.file_path = file_path
        self.generated_at = datetime.utcnow()

    def mark_failed(self) -> None:
        """
        Mark report generation as failed.
        """
        self.status = ReportStatus.FAILED

    def archive(self) -> None:
        """
        Archive report.
        """
        self.status = ReportStatus.ARCHIVED

    def __repr__(self) -> str:
        return (
            f"<Report("
            f"id={self.id}, "
            f"title='{self.title}', "
            f"type='{self.report_type.value}'"
            f")>"
        )