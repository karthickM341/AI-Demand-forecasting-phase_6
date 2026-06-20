from fastapi import (
    Depends,
    HTTPException,
    status,
)
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from app.core.security import SecurityManager
from app.models.user import (
    User,
    UserStatus,
)
from app.repositories.user_repo import UserRepository


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/api/auth/login"
)


class AuthService:
    """
    Enterprise Authentication Service
    """

    ACCESS_TOKEN_EXPIRE_MINUTES = 60

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.user_repo = UserRepository(db)

    # -------------------------
    # Authenticate User
    # -------------------------
    def authenticate(
        self,
        email: str,
        password: str,
    ) -> User:

        user = self.user_repo.get_by_email(
            email
        )

        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid credentials",
            )

        if not SecurityManager.verify_password(
            password,
            user.password_hash,
        ):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid credentials",
            )

        if (
            hasattr(user, "status")
            and user.status != UserStatus.ACTIVE
        ):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Account inactive",
            )

        return user

    # -------------------------
    # Login
    # -------------------------
    def login(
        self,
        email: str,
        password: str,
    ):

        user = self.authenticate(
            email=email,
            password=password,
        )

        access_token = (
            SecurityManager.create_access_token(
                subject=str(user.id),
                expires_minutes=self.ACCESS_TOKEN_EXPIRE_MINUTES,
                extra_data={
                    "user_id": user.id,
                    "organization_id": getattr(
                        user,
                        "organization_id",
                        None,
                    ),
                    "role_id": getattr(
                        user,
                        "role_id",
                        None,
                    ),
                },
            )
        )

        refresh_token = (
            SecurityManager.create_refresh_token(
                subject=str(user.id)
            )
        )

        if hasattr(
            user,
            "update_last_login",
        ):
            user.update_last_login()
            self.db.commit()

        return {
            "access_token": access_token,
            "refresh_token": refresh_token,
            "token_type": "bearer",
            "user_id": user.id,
            "email": user.email,
        }

    # -------------------------
    # Refresh Access Token
    # -------------------------
    def refresh_access_token(
        self,
        user: User,
    ):

        access_token = (
            SecurityManager.create_access_token(
                subject=str(user.id),
                extra_data={
                    "user_id": user.id,
                    "organization_id": getattr(
                        user,
                        "organization_id",
                        None,
                    ),
                    "role_id": getattr(
                        user,
                        "role_id",
                        None,
                    ),
                },
            )
        )

        return {
            "access_token": access_token,
            "token_type": "bearer",
        }

    # -------------------------
    # Change Password
    # -------------------------
    def change_password(
        self,
        user: User,
        current_password: str,
        new_password: str,
    ):

        if not SecurityManager.verify_password(
            current_password,
            user.password_hash,
        ):
            raise HTTPException(
                status_code=400,
                detail="Current password incorrect",
            )

        user.password_hash = (
            SecurityManager.hash_password(
                new_password
            )
        )

        self.db.commit()

        return True

    # -------------------------
    # Validate User
    # -------------------------
    def validate_user(
        self,
        user_id: int,
    ) -> User:

        user = self.user_repo.get_by_id(
            user_id
        )

        if not user:
            raise HTTPException(
                status_code=404,
                detail="User not found",
            )

        return user

    # -------------------------
    # Current User
    # -------------------------
    @staticmethod
    async def get_current_user(
        token: str = Depends(
            oauth2_scheme
        )
    ):

        payload = (
            SecurityManager.decode_token(
                token
            )
        )

        if not payload:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token",
            )

        return payload

    # -------------------------
    # User Context
    # -------------------------
    def current_user_context(
        self,
        user: User,
    ):

        return {
            "user_id": user.id,
            "organization_id": getattr(
                user,
                "organization_id",
                None,
            ),
            "role_id": getattr(
                user,
                "role_id",
                None,
            ),
            "email": user.email,
        }