from typing import Generator
from sqlalchemy import create_engine
from sqlalchemy.orm import (
    DeclarativeBase,
    sessionmaker,
    Session,
)
from app.core.config import settings


# Database Engine
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20,
    pool_recycle=3600,
    echo=settings.DEBUG,
    future=True,
)

# Session Factory
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
    expire_on_commit=False,
)

# Base Model
class Base(DeclarativeBase):
    """
    Base class for all SQLAlchemy models.
    """
    pass

# Database Dependency
def get_db() -> Generator[Session, None, None]:
    """
    FastAPI database dependency.
    """

    db = SessionLocal()

    try:
        yield db

    except Exception:
        db.rollback()
        raise

    finally:
        db.close()

# Database Utilities
def create_tables() -> None:
    """
    Create all database tables.
    """
    Base.metadata.create_all(bind=engine)


def drop_tables() -> None:
    """
    Drop all database tables.
    Use only in development/testing.
    """
    Base.metadata.drop_all(bind=engine)


def health_check() -> bool:
    """
    Verify database connectivity.
    """

    try:
        with engine.connect() as connection:
            connection.execute("SELECT 1")
        return True

    except Exception:
        return False