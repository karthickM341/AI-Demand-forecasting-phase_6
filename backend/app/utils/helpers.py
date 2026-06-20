from __future__ import annotations

from datetime import datetime, timezone
from typing import Any
from uuid import uuid4


class Helpers:
    """
    Enterprise Helper Utilities

    Features
    --------
    - UUID Generation
    - Timestamp Utilities
    - Pagination Helpers
    - Percentage Calculations
    - Safe Conversions
    - Common Formatting
    """

    # IDs
    @staticmethod
    def generate_uuid() -> str:
        """
        Generate unique identifier.
        """
        return str(uuid4())

    # Date & Time
    @staticmethod
    def utc_now() -> datetime:
        """
        Current UTC timestamp.
        """
        return datetime.now(
            timezone.utc
        )

    @staticmethod
    def format_datetime(
        value: datetime | None,
        fmt: str = "%Y-%m-%d %H:%M:%S",
    ) -> str | None:
        """
        Format datetime.
        """
        if not value:
            return None

        return value.strftime(fmt)

    # Pagination
    @staticmethod
    def pagination(
        page: int,
        page_size: int,
    ) -> tuple[int, int]:
        """
        Calculate offset and limit.
        """
        page = max(page, 1)
        page_size = max(page_size, 1)

        offset = (
            page - 1
        ) * page_size

        return offset, page_size

    # Percentage
    @staticmethod
    def percentage(
        value: float,
        total: float,
        precision: int = 2,
    ) -> float:
        """
        Calculate percentage.
        """
        if total <= 0:
            return 0.0

        return round(
            (value / total) * 100,
            precision,
        )

    @staticmethod
    def achievement_rate(
        actual: float,
        target: float,
    ) -> float:
        """
        KPI / Planning achievement.
        """
        if target <= 0:
            return 0.0

        return round(
            (actual / target) * 100,
            2,
        )

    # Forecast Metrics
    @staticmethod
    def demand_gap(
        forecast: float,
        target: float,
    ) -> float:
        """
        Forecast vs target gap.
        """
        return round(
            forecast - target,
            2,
        )

    # Safe Conversion
    @staticmethod
    def to_float(
        value: Any,
        default: float = 0.0,
    ) -> float:
        """
        Safe float conversion.
        """
        try:
            return float(value)
        except (
            TypeError,
            ValueError,
        ):
            return default

    @staticmethod
    def to_int(
        value: Any,
        default: int = 0,
    ) -> int:
        """
        Safe integer conversion.
        """
        try:
            return int(value)
        except (
            TypeError,
            ValueError,
        ):
            return default

   # Dictionary Utilities
    @staticmethod
    def remove_none(
        payload: dict,
    ) -> dict:
        """
        Remove None values.
        """
        return {
            key: value
            for key, value in payload.items()
            if value is not None
        }

    @staticmethod
    def merge_dicts(
        *dictionaries: dict,
    ) -> dict:
        """
        Merge multiple dictionaries.
        """
        result = {}

        for item in dictionaries:
            result.update(item)

        return result

    # Text Utilities
    @staticmethod
    def truncate(
        text: str,
        length: int = 100,
    ) -> str:
        """
        Truncate text safely.
        """
        if len(text) <= length:
            return text

        return (
            text[:length] + "..."
        )

    @staticmethod
    def normalize_text(
        text: str,
    ) -> str:
    
        return (
            text.strip()
            .lower()
        )

    # Organization Validation
    @staticmethod
    def same_organization(
        resource_org_id: int,
        user_org_id: int,
    ) -> bool:
        
        return (
            resource_org_id
            == user_org_id
        )

    # Executive Metrics
    @staticmethod
    def health_score(
        scores: list[float],
    ) -> float:
        """
        Aggregate business score.
        """
        valid_scores = [
            score
            for score in scores
            if score is not None
        ]

        if not valid_scores:
            return 0.0

        return round(
            sum(valid_scores)
            / len(valid_scores),
            2,
        )