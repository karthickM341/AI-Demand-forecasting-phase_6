from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.models.organization import (
    Organization,
    OrganizationStatus,
)
from app.repositories.organization_repo import (
    OrganizationRepository,
)
from app.services.audit_service import (
    AuditService,
)


class OrganizationService:
    """
    Enterprise Organization Service

    Features
    --------
    - Multi-Tenant Management
    - Organization Lifecycle
    - Organization Settings
    - Tenant Validation
    - Executive Analytics
    - Audit Logging
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db
        self.repo = OrganizationRepository(db)
        self.audit_service = AuditService(db)

    # Organization CRUD
    def create_organization(
        self,
        organization: Organization,
        created_by: int,
    ) -> Organization:
        """
        Create organization.
        """

        if self.repo.code_exists(
            organization.code
        ):
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Organization code already exists",
            )

        if self.repo.name_exists(
            organization.name
        ):
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Organization name already exists",
            )

        created = self.repo.create(
            organization
        )

        self.audit_service.organization_created(
            organization_id=created.id,
            user_id=created_by,
        )

        return created

    def get_organization(
        self,
        organization_id: int,
    ) -> Organization:
        """
        Get organization by id.
        """

        organization = self.repo.get_by_id(
            organization_id
        )

        if not organization:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Organization not found",
            )

        return organization

    def update_organization(
        self,
        organization_id: int,
        updates: dict,
    ) -> Organization:
        """
        Update organization.
        """

        organization = (
            self.get_organization(
                organization_id
            )
        )

        for field, value in updates.items():
            if hasattr(
                organization,
                field,
            ):
                setattr(
                    organization,
                    field,
                    value,
                )

        return self.repo.update(
            organization
        )

    def delete_organization(
        self,
        organization_id: int,
    ) -> None:
        """
        Delete organization.
        """

        organization = (
            self.get_organization(
                organization_id
            )
        )

        self.repo.delete(
            organization
        )

    # Organization Settings
    def update_settings(
        self,
        organization_id: int,
        settings: dict,
    ) -> Organization:
        """
        Update organization settings.
        """

        organization = (
            self.get_organization(
                organization_id
            )
        )

        return self.repo.update_settings(
            organization=organization,
            settings=settings,
        )

    # Organization Lifecycle
    def activate(
        self,
        organization_id: int,
    ) -> Organization:

        organization = (
            self.get_organization(
                organization_id
            )
        )

        return self.repo.activate(
            organization
        )

    def suspend(
        self,
        organization_id: int,
    ) -> Organization:

        organization = (
            self.get_organization(
                organization_id
            )
        )

        return self.repo.suspend(
            organization
        )

    def deactivate(
        self,
        organization_id: int,
    ) -> Organization:

        organization = (
            self.get_organization(
                organization_id
            )
        )

        return self.repo.deactivate(
            organization
        )

    
    # Organization Search
    def search(
        self,
        keyword: str,
    ):
        return self.repo.search(
            keyword
        )

    def list_organizations(
        self,
        skip: int = 0,
        limit: int = 100,
    ):
        return self.repo.list_organizations(
            skip=skip,
            limit=limit,
        )

    def active_organizations(
        self,
    ):
        return self.repo.active_organizations()

    # Validation
    def validate_active_organization(
        self,
        organization_id: int,
    ) -> Organization:
        """
        Validate tenant is active.
        """

        organization = (
            self.get_organization(
                organization_id
            )
        )

        if (
            organization.status
            != OrganizationStatus.ACTIVE
        ):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Organization is not active",
            )

        return organization

    # Executive Analytics
    def metrics(self) -> dict:
        """
        Executive organization metrics.
        """

        return self.repo.metrics()

    def executive_summary(self) -> dict:
        """
        Organization overview.
        """

        metrics = self.repo.metrics()

        return {
            "total_organizations":
                metrics.get(
                    "total_organizations",
                    0,
                ),
            "active_organizations":
                metrics.get(
                    "active_organizations",
                    0,
                ),
            "suspended_organizations":
                metrics.get(
                    "suspended_organizations",
                    0,
                ),
            "inactive_organizations":
                metrics.get(
                    "inactive_organizations",
                    0,
                ),
        }