from __future__ import annotations

import logging
import logging.handlers
from pathlib import Path


# Log Configuration
LOG_DIR = Path("logs")
LOG_DIR.mkdir(
    parents=True,
    exist_ok=True,
)

LOG_FILE = LOG_DIR / "application.log"

LOG_FORMAT = (
    "%(asctime)s | "
    "%(levelname)s | "
    "%(name)s | "
    "%(filename)s:%(lineno)d | "
    "%(message)s"
)

DATE_FORMAT = "%Y-%m-%d %H:%M:%S"

# Logger Factory
class LoggerFactory:
    """
    Centralized Logger Factory

    Features
    --------
    - Console Logging
    - File Logging
    - Rotating Files
    - Structured Format
    - Service-Level Loggers
    """

    _configured = False

    @classmethod
    def configure(cls) -> None:
    
        if cls._configured:
            return

        formatter = logging.Formatter(
            fmt=LOG_FORMAT,
            datefmt=DATE_FORMAT,
        )

        # Console Handler
        console_handler = (
            logging.StreamHandler()
        )
        console_handler.setFormatter(
            formatter
        )

        # Rotating File Handler
        file_handler = (
            logging.handlers.RotatingFileHandler(
                filename=LOG_FILE,
                maxBytes=10 * 1024 * 1024,
                backupCount=5,
                encoding="utf-8",
            )
        )

        file_handler.setFormatter(
            formatter
        )

        root_logger = logging.getLogger()

        root_logger.setLevel(
            logging.INFO
        )

        root_logger.addHandler(
            console_handler
        )

        root_logger.addHandler(
            file_handler
        )

        cls._configured = True

    @classmethod
    def get_logger(
        cls,
        name: str,
    ) -> logging.Logger:

        cls.configure()

        return logging.getLogger(name)


# Application Logger

logger = LoggerFactory.get_logger(
    "forecasting-platform"
)


# Specialized Loggers

api_logger = LoggerFactory.get_logger(
    "api"
)

service_logger = LoggerFactory.get_logger(
    "service"
)

audit_logger = LoggerFactory.get_logger(
    "audit"
)

workflow_logger = LoggerFactory.get_logger(
    "workflow"
)

forecast_logger = LoggerFactory.get_logger(
    "forecast"
)

security_logger = LoggerFactory.get_logger(
    "security"
)

notification_logger = LoggerFactory.get_logger(
    "notification"
)

# Structured Logging Helper

def log_event(
    logger_instance: logging.Logger,
    event: str,
    **kwargs,
) -> None:
    """
    Structured event logging.

    Example:
        log_event(
            audit_logger,
            "forecast_approved",
            forecast_id=10,
            user_id=1,
        )
    """

    metadata = " | ".join(
        [
            f"{k}={v}"
            for k, v in kwargs.items()
        ]
    )

    logger_instance.info(
        f"{event} | {metadata}"
    )