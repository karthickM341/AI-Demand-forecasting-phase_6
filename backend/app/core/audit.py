from datetime import datetime
from typing import Any, Optional
from sqlalchemy.orm import Session
from app.models.audit_log import AuditLog


class AuditLogger:
    """
    Centralized audit logging utility.
    """

    @staticmethod
    def log(
        db: Session,
        action: str,
        entity_type: str,
        entity_id: int,
        user_id: Optional[int] = None,
        organization_id: Optional[int] = None,
        details: Optional[dict[str, Any]] = None,
    ) -> AuditLog:
        """
        Create audit log entry.
        """

        audit_record = AuditLog(
            action=action,
            entity_type=entity_type,
            entity_id=entity_id,
            user_id=user_id,
            organization_id=organization_id,
            details=details or {},
            created_at=datetime.utcnow(),
        )

        db.add(audit_record)
        db.commit()
        db.refresh(audit_record)

        return audit_record

    @staticmethod
    def get_logs(
        db: Session,
        organization_id: Optional[int] = None,
        entity_type: Optional[str] = None,
        limit: int = 100,
    ):
        """
        Retrieve audit records.
        """

        query = db.query(AuditLog)

        if organization_id:
            query = query.filter(
                AuditLog.organization_id == organization_id
            )

        if entity_type:
            query = query.filter(
                AuditLog.entity_type == entity_type
            )

        return (
            query.order_by(AuditLog.created_at.desc())
            .limit(limit)
            .all()
        )

    @staticmethod
    def track_status_change(
        db: Session,
        entity_type: str,
        entity_id: int,
        old_status: str,
        new_status: str,
        user_id: int,
        organization_id: Optional[int] = None,
    ):
        """
        Track lifecycle status changes.
        """

        return AuditLogger.log(
            db=db,
            action="STATUS_CHANGED",
            entity_type=entity_type,
            entity_id=entity_id,
            user_id=user_id,
            organization_id=organization_id,
            details={
                "old_status": old_status,
                "new_status": new_status,
            },
        )

    @staticmethod
    def track_approval(
        db: Session,
        forecast_id: int,
        action: str,
        user_id: int,
        organization_id: Optional[int] = None,
    ):
        """
        Track forecast approval actions.
        """

        return AuditLogger.log(
            db=db,
            action=action,
            entity_type="FORECAST",
            entity_id=forecast_id,
            user_id=user_id,
            organization_id=organization_id,
        )