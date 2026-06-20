from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.notification import (
    NotificationCreate,
    NotificationPreferenceUpdate,
)
from app.services.notification_service import NotificationService

router = APIRouter(
    prefix="/notifications",
    tags=["Notification Center"],
)


@router.get("/")
def get_notifications(
    organization_id: int = Query(..., gt=0),
    unread_only: bool = False,
    db: Session = Depends(get_db),
):
    """
    Retrieve user notifications.
    """
    return NotificationService.get_notifications(
        db=db,
        organization_id=organization_id,
        unread_only=unread_only,
    )


@router.post(
    "/",
    status_code=status.HTTP_201_CREATED,
)
def create_notification(
    payload: NotificationCreate,
    db: Session = Depends(get_db),
):
    """
    Create a new notification.
    """
    return NotificationService.create_notification(
        db=db,
        payload=payload,
    )


@router.put("/{notification_id}/read")
def mark_as_read(
    notification_id: int,
    db: Session = Depends(get_db),
):
    """
    Mark notification as read.
    """
    notification = NotificationService.mark_as_read(
        db=db,
        notification_id=notification_id,
    )

    if not notification:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Notification not found",
        )

    return {
        "success": True,
        "message": "Notification marked as read",
    }


@router.put("/read-all")
def mark_all_as_read(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Mark all notifications as read.
    """
    return NotificationService.mark_all_as_read(
        db=db,
        organization_id=organization_id,
    )


@router.get("/unread-count")
def unread_count(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Get unread notification count.
    """
    return NotificationService.get_unread_count(
        db=db,
        organization_id=organization_id,
    )


@router.get("/history")
def notification_history(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Notification delivery history.
    """
    return NotificationService.get_history(
        db=db,
        organization_id=organization_id,
    )


@router.get("/preferences")
def get_preferences(
    db: Session = Depends(get_db),
):
    """
    Retrieve notification preferences.
    """
    return NotificationService.get_preferences(db)


@router.put("/preferences")
def update_preferences(
    payload: NotificationPreferenceUpdate,
    db: Session = Depends(get_db),
):
    """
    Update notification preferences.
    """
    return NotificationService.update_preferences(
        db=db,
        payload=payload,
    )


@router.get("/announcements")
def get_announcements(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Organization announcements.
    """
    return NotificationService.get_announcements(
        db=db,
        organization_id=organization_id,
    )


@router.post("/announcements")
def create_announcement(
    payload: dict,
    db: Session = Depends(get_db),
):
    """
    Create organization-wide announcement.
    """
    return NotificationService.create_announcement(
        db=db,
        payload=payload,
    )