from sqlalchemy.orm import Session
from app.models.approval import (
    Approval,
    ApprovalStatus,
)
from app.repositories.approval_repo import (
    ApprovalRepository,
)
from app.repositories.forecast_repo import (
    ForecastRepository,
)


class ApprovalService:
    """
    Enterprise Approval Service

    Handles:
    - Forecast Submission
    - Approval Workflow
    - Rejection Workflow
    - Approval Tracking
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.approval_repo = ApprovalRepository(db)
        self.forecast_repo = ForecastRepository(db)

    # Submit For Approval
    def submit_forecast(
        self,
        forecast_id: int,
        organization_id: int,
        submitted_by: int,
        comments: str | None = None,
    ) -> Approval:

        forecast = self.forecast_repo.get_by_id(
            forecast_id,
            organization_id,
        )

        if not forecast:
            raise ValueError(
                "Forecast not found"
            )

        approval = Approval(
            forecast_id=forecast.id,
            organization_id=organization_id,
            submitted_by=submitted_by,
            comments=comments,
            status=ApprovalStatus.PENDING,
        )

        forecast.status = "submitted"

        self.approval_repo.create(
            approval
        )

        self.db.commit()

        return approval

    # Approve Forecast
    def approve_forecast(
        self,
        approval_id: int,
        reviewer_id: int,
        comments: str | None = None,
    ) -> Approval:

        approval = (
            self.approval_repo
            .get_by_id(approval_id)
        )

        if not approval:
            raise ValueError(
                "Approval request not found"
            )

        approval = (
            self.approval_repo.approve(
                approval=approval,
                reviewer_id=reviewer_id,
                comments=comments,
            )
        )

        forecast = (
            self.forecast_repo.get_by_id(
                approval.forecast_id,
                approval.organization_id,
            )
        )

        if forecast:
            forecast.status = "approved"
            self.db.commit()

        return approval

    # Reject Forecast
    def reject_forecast(
        self,
        approval_id: int,
        reviewer_id: int,
        comments: str,
    ) -> Approval:

        approval = (
            self.approval_repo
            .get_by_id(approval_id)
        )

        if not approval:
            raise ValueError(
                "Approval request not found"
            )

        approval = (
            self.approval_repo.reject(
                approval=approval,
                reviewer_id=reviewer_id,
                comments=comments,
            )
        )

        forecast = (
            self.forecast_repo.get_by_id(
                approval.forecast_id,
                approval.organization_id,
            )
        )

        if forecast:
            forecast.status = "rejected"
            self.db.commit()

        return approval

    # Queries
    def pending_approvals(
        self,
        organization_id: int,
    ) -> list[Approval]:
        return (
            self.approval_repo.get_pending(
                organization_id
            )
        )

    def approval_history(
        self,
        forecast_id: int,
    ) -> list[Approval]:
        return (
            self.approval_repo.get_by_forecast(
                forecast_id
            )
        )

    def approval_metrics(
        self,
        organization_id: int,
    ) -> dict:
        return (
            self.approval_repo
            .get_approval_metrics(
                organization_id
            )
        )