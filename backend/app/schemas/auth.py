from __future__ import annotations
from datetime import datetime
from pydantic import BaseModel, EmailStr, Field

# Authentication Requests
class LoginRequest(BaseModel):
    username: str = Field(..., min_length=3, max_length=100)
    password: str = Field(..., min_length=8)


class RefreshTokenRequest(BaseModel):
    refresh_token: str


# User Registration
class UserCreate(BaseModel):
    email: EmailStr
    username: str = Field(..., min_length=3, max_length=100)
    password: str = Field(..., min_length=8, max_length=128)


# User Response
class UserResponse(BaseModel):
    id: int
    email: EmailStr
    username: str
    organization_id: int | None = None
    role_id: int | None = None
    is_active: bool = True

    model_config = {
        "from_attributes": True
    }


# JWT Responses
class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str | None = None
    token_type: str = "bearer"
    expires_in: int | None = None


class SessionInfo(BaseModel):
    user_id: int
    organization_id: int
    role_id: int


class TokenPayload(BaseModel):
    sub: str
    user_id: int
    organization_id: int
    role_id: int
    exp: int


# Password Management
class ChangePasswordRequest(BaseModel):
    current_password: str
    new_password: str = Field(..., min_length=8)


class ResetPasswordRequest(BaseModel):
    email: EmailStr


class ConfirmResetPasswordRequest(BaseModel):
    token: str
    new_password: str = Field(..., min_length=8)

# Audit / Session
class LoginResponse(BaseModel):
    user: UserResponse
    token: TokenResponse
    login_time: datetime

    model_config = {
        "from_attributes": True
    }