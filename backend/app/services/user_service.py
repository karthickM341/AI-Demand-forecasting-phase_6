from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models.user import User
from app.repositories.user_repo import UserRepository
from app.core.security import SecurityManager


class UserService:
    """
    Enterprise User Management Service
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.user_repo = UserRepository(db)

    # Create User
    def create_user(
        self,
        full_name: str,
        email: str,
        password: str,
        organization_id: int,
        role_id: int,
    ) -> User:

        existing_user = (
            self.user_repo.get_by_email(email)
        )

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already exists",
            )

        user = User(
            full_name=full_name,
            email=email,
            password_hash=SecurityManager.hash_password(
                password
            ),
            organization_id=organization_id,
            role_id=role_id,
        )

        return self.user_repo.create(user)

    # Get User
    def get_user(
        self,
        user_id: int,
    ) -> User:

        user = self.user_repo.get_by_id(
            user_id
        )

        if not user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found",
            )

        return user

    # Get All Users
    def get_users(
        self,
        organization_id: int,
    ):
        return self.user_repo.list_users(
            organization_id
        )

    # Update User
    def update_user(
        self,
        user_id: int,
        data: dict,
    ) -> User:

        user = self.get_user(user_id)

        for key, value in data.items():
            if hasattr(user, key):
                setattr(user, key, value)

        return self.user_repo.update(user)

    # Delete User
    def delete_user(
        self,
        user_id: int,
    ) -> bool:

        user = self.get_user(user_id)

        self.user_repo.delete(user)

        return True

    # Assign Role
    def assign_role(
        self,
        user_id: int,
        role_id: int,
    ) -> User:

        user = self.get_user(user_id)

        user.role_id = role_id

        return self.user_repo.update(user)

    # Change Password
    def change_password(
        self,
        user_id: int,
        new_password: str,
    ) -> User:

        user = self.get_user(user_id)

        user.password_hash = (
            SecurityManager.hash_password(
                new_password
            )
        )

        return self.user_repo.update(user)

    # User Metrics
    def metrics(
        self,
        organization_id: int,
    ):
        return self.user_repo.metrics(
            organization_id
        )