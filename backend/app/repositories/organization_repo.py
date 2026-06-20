from sqlalchemy import desc, func, select
from sqlalchemy.orm import Session
from app.models.organization import (
    Organization,
    OrganizationStatus,
)

class OrganizationRepository:
    """
    Enterprise Organization Repository

    Features:
    - Multi-Tenant Management
    - Organization Lifecycle
    - Settings Management
    - Organization Analytics
    """

    def __init__(
        self,
        db: Session,
    ):
        self.db = db

    # CRUD Operations
    def create(
        self,
        organization: Organization,
    ) -> Organization:
        self.db.add(organization)
        self.db.commit()
        self.db.refresh(organization)

        return organization

    def get_by_id(
        self,
        organization_id: int,
    ) -> Organization | None:
        return self.db.get(
            Organization,
            organization_id,
        )

    def get_by_code(
        self,
        code: str,
    ) -> Organization | None:
        stmt = select(Organization).where(
            Organization.code == code
        )

        return self.db.scalar(stmt)

    def get_by_name(
        self,
        name: str,
    ) -> Organization | None:
        stmt = select(Organization).where(
            Organization.name == name
        )

        return self.db.scalar(stmt)

    def update(
        self,
        organization: Organization,
    ) -> Organization:
        self.db.commit()
        self.db.refresh(organization)
        return organization

    def delete(
        self,
        organization: Organization,
    ) -> None:
        self.db.delete(organization)
        self.db.commit()

    # Organization Queries
    def list_organizations(
        self,
        skip: int = 0,
        limit: int = 100,
    ) -> list[Organization]:
        stmt = (
            select(Organization)
            .order_by(desc(Organization.created_at))
            .offset(skip)
            .limit(limit)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def active_organizations(
        self,
    ) -> list[Organization]:
        stmt = (
            select(Organization)
            .where(
                Organization.status
                == OrganizationStatus.ACTIVE
            )
            .order_by(Organization.name)
        )
        return list(
            self.db.scalars(stmt).all()
        )

    # Settings Management
    def update_settings(
        self,
        organization: Organization,
        settings: dict,
    ) -> Organization:
        organization.update_settings(
            settings
        )
        self.db.commit()
        self.db.refresh(organization)
        return organization

    # Lifecycle Management
    def activate(
        self,
        organization: Organization,
    ) -> Organization:
        organization.activate()
        self.db.commit()
        self.db.refresh(organization)
        return organization

    def suspend(
        self,
        organization: Organization,
    ) -> Organization:
        organization.suspend()
        self.db.commit()
        self.db.refresh(organization)
        return organization

    def deactivate(
        self,
        organization: Organization,
    ) -> Organization:
        organization.deactivate()
        self.db.commit()
        self.db.refresh(organization)
        return organization

    # Search
    def search(
        self,
        keyword: str,
    ) -> list[Organization]:
        stmt = (
            select(Organization)
            .where(
                Organization.name.ilike(
                    f"%{keyword}%"
                )
            )
            .order_by(
                Organization.name
            )
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Executive Analytics
    def metrics(self) -> dict:
        total = self.db.scalar(
            select(
                func.count(
                    Organization.id
                )
            )
        ) or 0

        active = self.db.scalar(
            select(
                func.count(
                    Organization.id
                )
            ).where(
                Organization.status
                == OrganizationStatus.ACTIVE
            )
        ) or 0

        suspended = self.db.scalar(
            select(
                func.count(
                    Organization.id
                )
            ).where(
                Organization.status
                == OrganizationStatus.SUSPENDED
            )
        ) or 0

        inactive = self.db.scalar(
            select(
                func.count(
                    Organization.id
                )
            ).where(
                Organization.status
                == OrganizationStatus.INACTIVE
            )
        ) or 0

        return {
            "total_organizations": total,
            "active_organizations": active,
            "suspended_organizations": suspended,
            "inactive_organizations": inactive,
        }

    # Validation
    def code_exists(
        self,
        code: str,
    ) -> bool:
        stmt = select(
            Organization.id
        ).where(
            Organization.code == code
        )

        return self.db.scalar(stmt) is not None

    def name_exists(
        self,
        name: str,
    ) -> bool:
        stmt = select(
            Organization.id
        ).where(
            Organization.name == name
        )

        return self.db.scalar(stmt) is not None