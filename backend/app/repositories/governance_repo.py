from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.governance import (
    GovernanceRecord,
    GovernanceStatus,
)


class GovernanceRepository:
    """
    Enterprise Governance Repository

    Features:
    - CRUD Operations
    - Compliance Tracking
    - Governance Analytics
    - Executive Reporting
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db

    # Create
    def create(
        self,
        governance: GovernanceRecord,
    ) -> GovernanceRecord:

        self.db.add(governance)
        self.db.commit()
        self.db.refresh(governance)

        return governance

    # Update
    def update(
        self,
        governance: GovernanceRecord,
    ) -> GovernanceRecord:

        self.db.commit()
        self.db.refresh(governance)

        return governance

    # Delete
    def delete(
        self,
        governance: GovernanceRecord,
    ) -> bool:

        self.db.delete(governance)
        self.db.commit()

        return True

    # Get By ID
    def get_by_id(
        self,
        governance_id: int,
        organization_id: int,
    ) -> GovernanceRecord | None:

        return (
            self.db.query(
                GovernanceRecord
            )
            .filter(
                GovernanceRecord.id
                == governance_id,
                GovernanceRecord.organization_id
                == organization_id,
            )
            .first()
        )

    # List Records
    def list_records(
        self,
        organization_id: int,
        skip: int = 0,
        limit: int = 100,
    ):

        return (
            self.db.query(
                GovernanceRecord
            )
            .filter(
                GovernanceRecord.organization_id
                == organization_id
            )
            .offset(skip)
            .limit(limit)
            .all()
        )

    # By Status
    def by_status(
        self,
        organization_id: int,
        governance_status: GovernanceStatus,
    ):

        return (
            self.db.query(
                GovernanceRecord
            )
            .filter(
                GovernanceRecord.organization_id
                == organization_id,
                GovernanceRecord.governance_status
                == governance_status,
            )
            .all()
        )

    # Compliance Metrics
    def metrics(
        self,
        organization_id: int,
    ) -> dict:

        total_records = (
            self.db.query(
                func.count(
                    GovernanceRecord.id
                )
            )
            .filter(
                GovernanceRecord.organization_id
                == organization_id
            )
            .scalar()
            or 0
        )

        compliant_records = (
            self.db.query(
                func.count(
                    GovernanceRecord.id
                )
            )
            .filter(
                GovernanceRecord.organization_id
                == organization_id,
                GovernanceRecord.governance_status
                == GovernanceStatus.COMPLIANT,
            )
            .scalar()
            or 0
        )

        non_compliant_records = (
            self.db.query(
                func.count(
                    GovernanceRecord.id
                )
            )
            .filter(
                GovernanceRecord.organization_id
                == organization_id,
                GovernanceRecord.governance_status
                == GovernanceStatus.NON_COMPLIANT,
            )
            .scalar()
            or 0
        )

        review_required = (
            self.db.query(
                func.count(
                    GovernanceRecord.id
                )
            )
            .filter(
                GovernanceRecord.organization_id
                == organization_id,
                GovernanceRecord.governance_status
                == GovernanceStatus.REVIEW_REQUIRED,
            )
            .scalar()
            or 0
        )

        compliance_rate = (
            (
                compliant_records
                / total_records
            )
            * 100
            if total_records > 0
            else 0
        )

        return {
            "organization_id": organization_id,
            "total_records": total_records,
            "compliant_records": compliant_records,
            "non_compliant_records": non_compliant_records,
            "review_required": review_required,
            "compliance_rate": round(
                compliance_rate,
                2,
            ),
        }

    # Latest Records
    def latest_records(
        self,
        organization_id: int,
        limit: int = 10,
    ):

        return (
            self.db.query(
                GovernanceRecord
            )
            .filter(
                GovernanceRecord.organization_id
                == organization_id
            )
            .order_by(
                GovernanceRecord.created_at.desc()
            )
            .limit(limit)
            .all()
        )

    # Pending Reviews
    def pending_reviews(
        self,
        organization_id: int,
    ):

        return (
            self.db.query(
                GovernanceRecord
            )
            .filter(
                GovernanceRecord.organization_id
                == organization_id,
                GovernanceRecord.governance_status
                == GovernanceStatus.REVIEW_REQUIRED,
            )
            .all()
        )