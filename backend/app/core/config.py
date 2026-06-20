from functools import lru_cache
from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    """
    Enterprise Application Settings
    """

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    # Application
    APP_NAME: str = "Advanced AI Demand Forecasting"
    APP_VERSION: str = "6.0.0"
    DEBUG: bool = False
    ENVIRONMENT: str = "development"

    # Database
    DATABASE_URL: str = Field(
    default="mysql+pymysql://root:admin123@localhost/forecasting_db"
)

   # Security
    SECRET_KEY: str = Field(
        default="change_this_in_production"
    )
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

   # Multi Organization
    DEFAULT_ORGANIZATION: str = "Default Organization"

    # Redis / Cache
    REDIS_URL: str = "redis://localhost:6379/0"

    # Celery
    CELERY_BROKER_URL: str = "redis://localhost:6379/1"
    CELERY_RESULT_BACKEND: str = "redis://localhost:6379/2"

    # Forecasting
    FORECAST_HORIZON_DAYS: int = 30
    MODEL_RETRAIN_INTERVAL_DAYS: int = 7
    ANOMALY_THRESHOLD: float = 0.80

    # Workflow Automation
    MAX_WORKFLOW_RETRIES: int = 3
    WORKFLOW_TIMEOUT_SECONDS: int = 300

    # Data Quality
    MIN_DATA_QUALITY_SCORE: float = 75.0

    # Reporting
    DEFAULT_REPORT_FORMAT: str = "pdf"
    REPORT_STORAGE_PATH: str = "storage/reports"

    # Logging
    LOG_LEVEL: str = "INFO"
    AUDIT_LOG_RETENTION_DAYS: int = 365

    # Email Notifications
    SMTP_HOST: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_USERNAME: str = ""
    SMTP_PASSWORD: str = ""
    EMAIL_FROM: str = "noreply@forecasting.com"

    # CORS
    CORS_ORIGINS: list[str] = [
         "http://localhost:3000",
         "http://127.0.0.1:3000",
          ]


@lru_cache
def get_settings() -> Settings:
    """
    Cached settings instance.
    """
    return Settings()


settings = get_settings()