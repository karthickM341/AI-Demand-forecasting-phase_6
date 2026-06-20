from datetime import date
from sqlalchemy import and_, desc, func, select
from sqlalchemy.orm import Session
from app.models.forecast import (
    Forecast,
    ForecastStatus,
)

class ForecastRepository:
    """
    Enterprise Forecast Repository
    """

    def __init__(self, db: Session):
        self.db = db

    # CRUD Operations
    def create(
        self,
        forecast: Forecast,
    ) -> Forecast:
        self.db.add(forecast)
        self.db.commit()
        self.db.refresh(forecast)

        return forecast

    def get_by_id(
        self,
        forecast_id: int,
        organization_id: int,
    ) -> Forecast | None:
        stmt = select(Forecast).where(
            Forecast.id == forecast_id,
            Forecast.organization_id == organization_id,
        )

        return self.db.scalar(stmt)

    def update(
        self,
        forecast: Forecast,
    ) -> Forecast:
        self.db.commit()
        self.db.refresh(forecast)

        return forecast

    def delete(
        self,
        forecast: Forecast,
    ) -> None:
        self.db.delete(forecast)
        self.db.commit()

    # Organization Forecasts
    def list_forecasts(
        self,
        organization_id: int,
        skip: int = 0,
        limit: int = 50,
    ) -> list[Forecast]:
        stmt = (
            select(Forecast)
            .where(
                Forecast.organization_id == organization_id
            )
            .order_by(desc(Forecast.created_at))
            .offset(skip)
            .limit(limit)
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def get_active_forecasts(
        self,
        organization_id: int,
    ) -> list[Forecast]:
        stmt = (
            select(Forecast)
            .where(
                Forecast.organization_id == organization_id,
                Forecast.status == ForecastStatus.ACTIVE,
            )
            .order_by(desc(Forecast.updated_at))
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Approval Workflow
    def get_pending_approvals(
        self,
        organization_id: int,
    ) -> list[Forecast]:
        stmt = (
            select(Forecast)
            .where(
                Forecast.organization_id == organization_id,
                Forecast.status == ForecastStatus.SUBMITTED,
            )
            .order_by(desc(Forecast.created_at))
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Search & Filters
    def search(
        self,
        organization_id: int,
        keyword: str,
    ) -> list[Forecast]:
        stmt = (
            select(Forecast)
            .where(
                Forecast.organization_id == organization_id,
                Forecast.name.ilike(f"%{keyword}%"),
            )
            .order_by(desc(Forecast.created_at))
        )

        return list(
            self.db.scalars(stmt).all()
        )

    def filter_by_period(
        self,
        organization_id: int,
        start_date: date,
        end_date: date,
    ) -> list[Forecast]:
        stmt = (
            select(Forecast)
            .where(
                and_(
                    Forecast.organization_id
                    == organization_id,
                    Forecast.forecast_period_start
                    >= start_date,
                    Forecast.forecast_period_end
                    <= end_date,
                )
            )
            .order_by(
                Forecast.forecast_period_start
            )
        )

        return list(
            self.db.scalars(stmt).all()
        )

    # Dashboard Metrics
    def get_metrics(
        self,
        organization_id: int,
    ) -> dict:
        total = self.db.scalar(
            select(func.count(Forecast.id)).where(
                Forecast.organization_id
                == organization_id
            )
        )

        active = self.db.scalar(
            select(func.count(Forecast.id)).where(
                Forecast.organization_id
                == organization_id,
                Forecast.status
                == ForecastStatus.ACTIVE,
            )
        )

        approved = self.db.scalar(
            select(func.count(Forecast.id)).where(
                Forecast.organization_id
                == organization_id,
                Forecast.status
                == ForecastStatus.APPROVED,
            )
        )

        pending = self.db.scalar(
            select(func.count(Forecast.id)).where(
                Forecast.organization_id
                == organization_id,
                Forecast.status
                == ForecastStatus.SUBMITTED,
            )
        )

        return {
            "total_forecasts": total or 0,
            "active_forecasts": active or 0,
            "approved_forecasts": approved or 0,
            "pending_approvals": pending or 0,
        }

    # Governance
    def latest_forecast(
        self,
        organization_id: int,
    ) -> Forecast | None:
        stmt = (
            select(Forecast)
            .where(
                Forecast.organization_id
                == organization_id
            )
            .order_by(
                desc(Forecast.created_at)
            )
            .limit(1)
        )

        return self.db.scalar(stmt)