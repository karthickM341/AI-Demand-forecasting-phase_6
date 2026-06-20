from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.api import (
    approvals,
    auth,
    dashboards,
    executive,
    forecasts,
    governance,
    kpi,
    notifications,
    organizations,
    planning,
    quality,
    reports,
    users,
    workflows,
)
from app.core.config import settings
from app.core.database import Base, engine
from app.utils.logger import logger
from app.models.user import User
from app.models.role import Role
from app.models.organization import Organization
from app.models.dataset import Dataset
from app.models.forecast_version import ForecastVersion

@asynccontextmanager
async def lifespan(app: FastAPI):
    

    logger.info(
        "Starting Enterprise Forecasting Platform..."
    )

    try:
        Base.metadata.create_all(
            bind=engine
        )

        logger.info(
            "Database initialized successfully"
        )

    except Exception as exc:
        logger.exception(
            "Database initialization failed"
        )
        raise exc

    yield

    logger.info(
        "Application shutdown completed"
    )


app = FastAPI(
    title="Enterprise AI Demand Forecasting API",
    description=(
        "Advanced multi-organization demand "
        "forecasting and governance platform"
    ),
    version="6.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.exception_handler(Exception)
async def global_exception_handler(
    request,
    exc,
):
    logger.exception(
        f"Unhandled exception: {exc}"
    )

    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": (
                "Internal server error"
            ),
        },
    )


@app.get(
    "/health",
    tags=["Health"],
)
async def health_check():

    return {
        "status": "healthy",
        "service": (
            "Enterprise Forecasting API"
        ),
        "version": "6.0.0",
    }

@app.get(
    "/",
    tags=["System"],
)
async def root():

    return {
        "application":
            "Enterprise AI Demand Forecasting",
        "version": "6.0.0",
        "status": "running",
    }

API_PREFIX = "/api/v1"
app.include_router(
    auth.router,
    prefix=f"{API_PREFIX}/auth",
    tags=["Authentication"],
)
app.include_router(
    users.router,
    prefix=f"{API_PREFIX}/users",
    tags=["Users"],
)
app.include_router(
    organizations.router,
    prefix=f"{API_PREFIX}/organizations",
    tags=["Organizations"],
)
app.include_router(
    forecasts.router,
    prefix=f"{API_PREFIX}/forecasts",
    tags=["Forecasts"],
)
app.include_router(
    approvals.router,
    prefix=f"{API_PREFIX}/approvals",
    tags=["Approvals"],
)
app.include_router(
    governance.router,
    prefix=f"{API_PREFIX}/governance",
    tags=["Governance"],
)
app.include_router(
    planning.router,
    prefix=f"{API_PREFIX}/planning",
    tags=["Planning"],
)
app.include_router(
    kpi.router,
    prefix=f"{API_PREFIX}/kpis",
    tags=["KPI Management"],
)
app.include_router(
    quality.router,
    prefix=f"{API_PREFIX}/quality",
    tags=["Data Quality"],
)
app.include_router(
    workflows.router,
    prefix=f"{API_PREFIX}/workflows",
    tags=["Workflow Automation"],
)
app.include_router(
    reports.router,
    prefix=f"{API_PREFIX}/reports",
    tags=["Reports"],
)
app.include_router(
    notifications.router,
    prefix=f"{API_PREFIX}/notifications",
    tags=["Notifications"],
)
app.include_router(
    dashboards.router,
    prefix=f"{API_PREFIX}/dashboards",
    tags=["Dashboards"],
)
app.include_router(
    executive.router,
    prefix=f"{API_PREFIX}/executive",
    tags=["Executive Command Center"],
)

logger.info(
    "Enterprise AI Demand Forecasting API Loaded"
)