from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from app.models.approval import (
    Approval,
    ApprovalStatus,
)


class ApprovalRepository:
    """
    Forecast Approval Repository
    """

    def __init__(self, db: Session):
        self.db = db

    def create(
        self,
        approval: Approval,
    ) -> Approval:
        """
        Create approval request.
        """
        self.db.add(approval)
        self.db.commit()
        self.db.refresh(approval)

        return approval

    def get_by_id(
        self,
        approval_id: int,
    ) -> Approval | None:
        """
        Get approval by id.
        """
        return self.db.get(
            Approval,
            approval_id,
        )

    def get_pending(
        self,
        organization_id: int,
    ) -> list[Approval]:
        """
        Get pending approvals.
        """
        stmt = (
            select(Approval)
            .where(
                Approval.organization_id == organization_id,
                Approval.status == ApprovalStatus.PENDING,
            )
            .order_by(desc(Approval.created_at))
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def get_by_forecast(
        self,
        forecast_id: int,
    ) -> list[Approval]:
        """
        Approval history for forecast.
        """
        stmt = (
            select(Approval)
            .where(
                Approval.forecast_id == forecast_id
            )
            .order_by(desc(Approval.created_at))
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def approve(
        self,
        approval: Approval,
        reviewer_id: int,
        comments: str | None = None,
    ) -> Approval:
        """
        Approve forecast.
        """
        approval.approve(
            reviewer_id=reviewer_id,
            comments=comments,
        )

        self.db.commit()
        self.db.refresh(approval)

        return approval

    def reject(
        self,
        approval: Approval,
        reviewer_id: int,
        comments: str,
    ) -> Approval:
        """
        Reject forecast.
        """
        approval.reject(
            reviewer_id=reviewer_id,
            comments=comments,
        )

        self.db.commit()
        self.db.refresh(approval)

        return approval

    def get_approval_metrics(
        self,
        organization_id: int,
    ) -> dict:
        """
        Approval dashboard metrics.
        """

        approvals = (
            self.db.query(Approval)
            .filter(
                Approval.organization_id
                == organization_id
            )
            .all()
        )

        total = len(approvals)

        approved = len(
            [
                a for a in approvals
                if a.status
                == ApprovalStatus.APPROVED
            ]
        )

        rejected = len(
            [
                a for a in approvals
                if a.status
                == ApprovalStatus.REJECTED
            ]
        )

        pending = len(
            [
                a for a in approvals
                if a.status
                == ApprovalStatus.PENDING
            ]
        )

        return {
            "total": total,
            "approved": approved,
            "rejected": rejected,
            "pending": pending,
        }