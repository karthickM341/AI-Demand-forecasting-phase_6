from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.organization import (
    OrganizationCreate,
    OrganizationUpdate,
    OrganizationResponse,
    MemberCreate,
)
from app.services.organization_service import OrganizationService

router = APIRouter(
    prefix="/organizations",
    tags=["Organization Management"],
)


@router.post(
    "/",
    response_model=OrganizationResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_organization(
    payload: OrganizationCreate,
    db: Session = Depends(get_db),
):
    """
    Create a new organization.
    """
    return OrganizationService.create_organization(
        db=db,
        payload=payload,
    )


@router.get(
    "/",
    response_model=list[OrganizationResponse],
)
def get_organizations(
    db: Session = Depends(get_db),
):
    """
    Get all organizations.
    """
    return OrganizationService.get_organizations(db)


@router.get(
    "/{organization_id}",
    response_model=OrganizationResponse,
)
def get_organization(
    organization_id: int,
    db: Session = Depends(get_db),
):
    """
    Get organization details.
    """
    organization = OrganizationService.get_organization_by_id(
        db=db,
        organization_id=organization_id,
    )

    if not organization:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Organization not found",
        )

    return organization


@router.put(
    "/{organization_id}",
    response_model=OrganizationResponse,
)
def update_organization(
    organization_id: int,
    payload: OrganizationUpdate,
    db: Session = Depends(get_db),
):
    """
    Update organization information.
    """
    organization = OrganizationService.update_organization(
        db=db,
        organization_id=organization_id,
        payload=payload,
    )

    if not organization:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Organization not found",
        )

    return organization


@router.delete("/{organization_id}")
def deactivate_organization(
    organization_id: int,
    db: Session = Depends(get_db),
):
    """
    Soft delete / deactivate organization.
    """
    OrganizationService.deactivate_organization(
        db=db,
        organization_id=organization_id,
    )

    return {
        "success": True,
        "message": "Organization deactivated successfully",
    }


@router.post("/{organization_id}/members")
def add_member(
    organization_id: int,
    payload: MemberCreate,
    db: Session = Depends(get_db),
):
    """
    Add user to organization.
    """
    return OrganizationService.add_member(
        db=db,
        organization_id=organization_id,
        payload=payload,
    )


@router.get("/{organization_id}/members")
def get_members(
    organization_id: int,
    db: Session = Depends(get_db),
):
    """
    Retrieve organization members.
    """
    return OrganizationService.get_members(
        db=db,
        organization_id=organization_id,
    )


@router.delete("/{organization_id}/members/{user_id}")
def remove_member(
    organization_id: int,
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Remove member from organization.
    """
    return OrganizationService.remove_member(
        db=db,
        organization_id=organization_id,
        user_id=user_id,
    )


@router.get("/{organization_id}/settings")
def get_settings(
    organization_id: int,
    db: Session = Depends(get_db),
):
    """
    Get organization settings.
    """
    return OrganizationService.get_settings(
        db=db,
        organization_id=organization_id,
    )


@router.put("/{organization_id}/settings")
def update_settings(
    organization_id: int,
    settings: dict,
    db: Session = Depends(get_db),
):
    """
    Update organization settings.
    """
    return OrganizationService.update_settings(
        db=db,
        organization_id=organization_id,
        settings=settings,
    )


@router.get("/{organization_id}/dashboard")
def organization_dashboard(
    organization_id: int,
    db: Session = Depends(get_db),
):
    """
    Organization-level analytics dashboard.
    """
    return OrganizationService.get_dashboard(
        db=db,
        organization_id=organization_id,
    )


@router.get("/{organization_id}/summary")
def organization_summary(
    organization_id: int,
    db: Session = Depends(get_db),
):
    """
    Organization business summary.
    """
    return OrganizationService.get_summary(
        db=db,
        organization_id=organization_id,
    )