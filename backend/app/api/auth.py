from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.auth import (
    LoginRequest,
    TokenResponse,
    UserCreate,
    UserResponse,
)
from app.services.auth_service import AuthService

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
def register_user(
    payload: UserCreate,
    db: Session = Depends(get_db),
):
    """
    Register a new user.
    """
    user = AuthService.register_user(
        db=db,
        payload=payload,
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Unable to create user",
        )

    return user


@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(
    credentials: LoginRequest,
    db: Session = Depends(get_db),
):
    """
    Authenticate user and return JWT tokens.
    """
    token = AuthService.login(
        db=db,
        credentials=credentials,
    )

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    return token


@router.post(
    "/refresh",
    response_model=TokenResponse,
)
def refresh_token(
    refresh_token: str,
    db: Session = Depends(get_db),
):
    """
    Generate new access token.
    """
    token = AuthService.refresh_token(
        db=db,
        refresh_token=refresh_token,
    )

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token",
        )

    return token


@router.post("/logout")
def logout():
    """
    Logout current user.
    Token blacklisting can be implemented here.
    """
    return {
        "success": True,
        "message": "Logged out successfully"
    }


@router.get(
    "/me",
    response_model=UserResponse,
)
def get_current_user_profile(
    current_user=Depends(AuthService.get_current_user),
):
    """
    Retrieve authenticated user profile.
    """
    return current_user


@router.post(
    "/change-password",
)
def change_password(
    current_password: str,
    new_password: str,
    db: Session = Depends(get_db),
    current_user=Depends(AuthService.get_current_user),
):
    """
    Change account password.
    """
    AuthService.change_password(
        db=db,
        user_id=current_user.id,
        current_password=current_password,
        new_password=new_password,
    )

    return {
        "success": True,
        "message": "Password updated successfully"
    }


@router.post(
    "/activate/{user_id}",
)
def activate_user(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Activate user account.
    """
    return AuthService.activate_user(
        db=db,
        user_id=user_id,
    )


@router.post(
    "/deactivate/{user_id}",
)
def deactivate_user(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Deactivate user account.
    """
    return AuthService.deactivate_user(
        db=db,
        user_id=user_id,
    )