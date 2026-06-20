from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.user import (
    UserCreate,
    UserUpdate,
    RoleAssignment,
    UserResponse,
)
from app.services.user_service import UserService

router = APIRouter(
    prefix="/users",
    tags=["User Management"],
)


@router.post(
    "/",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_user(
    payload: UserCreate,
    db: Session = Depends(get_db),
):
    """
    Create a new user.
    """
    return UserService.create_user(
        db=db,
        payload=payload,
    )


@router.get(
    "/",
    response_model=list[UserResponse],
)
def get_users(
    organization_id: int | None = Query(None),
    db: Session = Depends(get_db),
):
    """
    Retrieve users.
    """
    return UserService.get_users(
        db=db,
        organization_id=organization_id,
    )


@router.get(
    "/{user_id}",
    response_model=UserResponse,
)
def get_user(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get user details.
    """
    user = UserService.get_user_by_id(
        db=db,
        user_id=user_id,
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    return user


@router.put(
    "/{user_id}",
    response_model=UserResponse,
)
def update_user(
    user_id: int,
    payload: UserUpdate,
    db: Session = Depends(get_db),
):
    """
    Update user profile.
    """
    user = UserService.update_user(
        db=db,
        user_id=user_id,
        payload=payload,
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    return user


@router.delete("/{user_id}")
def deactivate_user(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Deactivate user account.
    """
    UserService.deactivate_user(
        db=db,
        user_id=user_id,
    )

    return {
        "success": True,
        "message": "User deactivated successfully",
    }


@router.post("/{user_id}/activate")
def activate_user(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Activate user account.
    """
    return UserService.activate_user(
        db=db,
        user_id=user_id,
    )


@router.post("/{user_id}/roles")
def assign_role(
    user_id: int,
    payload: RoleAssignment,
    db: Session = Depends(get_db),
):
    """
    Assign role to user.
    """
    return UserService.assign_role(
        db=db,
        user_id=user_id,
        payload=payload,
    )


@router.delete("/{user_id}/roles/{role_id}")
def remove_role(
    user_id: int,
    role_id: int,
    db: Session = Depends(get_db),
):
    """
    Remove role from user.
    """
    return UserService.remove_role(
        db=db,
        user_id=user_id,
        role_id=role_id,
    )


@router.get("/{user_id}/organizations")
def user_organizations(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Retrieve user's organizations.
    """
    return UserService.get_user_organizations(
        db=db,
        user_id=user_id,
    )


@router.get("/{user_id}/activity")
def user_activity(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    User activity and audit trail.
    """
    return UserService.get_activity_log(
        db=db,
        user_id=user_id,
    )