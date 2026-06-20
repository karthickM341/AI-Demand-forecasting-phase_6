from datetime import datetime, timedelta, timezone
from typing import Any, Optional
from jose import JWTError, jwt
from passlib.context import CryptContext

from app.core.config import settings


class SecurityManager:
    """
    Enterprise Security Utilities
    """

    pwd_context = CryptContext(
        schemes=["bcrypt"],
        deprecated="auto",
    )

    @classmethod
    def hash_password(cls, password: str) -> str:
        """
        Hash plain password.
        """
        return cls.pwd_context.hash(password)

    @classmethod
    def verify_password(
        cls,
        plain_password: str,
        hashed_password: str,
    ) -> bool:
        """
        Verify password hash.
        """
        return cls.pwd_context.verify(
            plain_password,
            hashed_password,
        )

    @classmethod
    def create_access_token(
        cls,
        subject: str,
        expires_minutes: Optional[int] = None,
        extra_data: Optional[dict[str, Any]] = None,
    ) -> str:
        """
        Generate JWT access token.
        """

        expire = datetime.now(timezone.utc) + timedelta(
            minutes=expires_minutes
            or settings.ACCESS_TOKEN_EXPIRE_MINUTES
        )

        payload = {
            "sub": subject,
            "type": "access",
            "exp": expire,
        }

        if extra_data:
            payload.update(extra_data)

        return jwt.encode(
            payload,
            settings.SECRET_KEY,
            algorithm=settings.ALGORITHM,
        )

    @classmethod
    def create_refresh_token(
        cls,
        subject: str,
    ) -> str:
        """
        Generate JWT refresh token.
        """

        expire = datetime.now(timezone.utc) + timedelta(
            days=settings.REFRESH_TOKEN_EXPIRE_DAYS
        )

        payload = {
            "sub": subject,
            "type": "refresh",
            "exp": expire,
        }

        return jwt.encode(
            payload,
            settings.SECRET_KEY,
            algorithm=settings.ALGORITHM,
        )

    @classmethod
    def decode_token(
        cls,
        token: str,
    ) -> dict:
        """
        Decode and validate JWT.
        """

        try:
            payload = jwt.decode(
                token,
                settings.SECRET_KEY,
                algorithms=[settings.ALGORITHM],
            )

            return payload

        except JWTError:
            return {}

    @classmethod
    def validate_access_token(
        cls,
        token: str,
    ) -> Optional[str]:
        """
        Validate access token.
        """

        payload = cls.decode_token(token)

        if not payload:
            return None

        if payload.get("type") != "access":
            return None

        return payload.get("sub")

    @classmethod
    def validate_refresh_token(
        cls,
        token: str,
    ) -> Optional[str]:
        """
        Validate refresh token.
        """

        payload = cls.decode_token(token)

        if not payload:
            return None

        if payload.get("type") != "refresh":
            return None

        return payload.get("sub")