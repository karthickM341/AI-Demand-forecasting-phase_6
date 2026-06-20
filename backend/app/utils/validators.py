from __future__ import annotations

import re
from datetime import datetime
from typing import Any


class ValidationError(Exception):
    """Custom validation exception."""


class Validators:
    
    EMAIL_REGEX = re.compile(
        r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
    )

    ORGANIZATION_CODE_REGEX = re.compile(
        r"^[A-Z0-9_-]{2,20}$"
    )

    # Generic Validators
    @staticmethod
    def required(
        value: Any,
        field_name: str,
    ) -> None:
        

        if value is None:
            raise ValidationError(
                f"{field_name} is required"
            )

        if (
            isinstance(value, str)
            and not value.strip()
        ):
            raise ValidationError(
                f"{field_name} is required"
            )

    @staticmethod
    def max_length(
        value: str,
        max_size: int,
        field_name: str,
    ) -> None:

        if value and len(value) > max_size:
            raise ValidationError(
                f"{field_name} exceeds "
                f"{max_size} characters"
            )

    # Email

    @classmethod
    def validate_email(
        cls,
        email: str,
    ) -> bool:

        cls.required(
            email,
            "Email",
        )

        if not cls.EMAIL_REGEX.match(
            email
        ):
            raise ValidationError(
                "Invalid email address"
            )

        return True

    # Password

    @staticmethod
    def validate_password(
        password: str,
    ) -> bool:
                 
        if len(password) < 8:
            raise ValidationError(
                "Password must contain "
                "at least 8 characters"
            )

        if not re.search(
            r"[A-Z]",
            password,
        ):
            raise ValidationError(
                "Password requires "
                "an uppercase letter"
            )

        if not re.search(
            r"[a-z]",
            password,
        ):
            raise ValidationError(
                "Password requires "
                "a lowercase letter"
            )

        if not re.search(
            r"\d",
            password,
        ):
            raise ValidationError(
                "Password requires a number"
            )

        return True

    # Organization

    @classmethod
    def validate_organization_code(
        cls,
        code: str,
    ) -> bool:

        if not cls.ORGANIZATION_CODE_REGEX.match(
            code
        ):
            raise ValidationError(
                "Invalid organization code"
            )

        return True

    # Forecast

    @staticmethod
    def validate_forecast_value(
        value: float,
    ) -> bool:
        
        if value < 0:
            raise ValidationError(
                "Forecast value cannot be negative"
            )

        return True

    # KPI
    
    @staticmethod
    def validate_kpi_thresholds(
        warning_threshold: float,
        critical_threshold: float,
    ) -> bool:      

        if (
            critical_threshold
            >= warning_threshold
        ):
            raise ValidationError(
                "Critical threshold must be "
                "less than warning threshold"
            )

        return True

    # Planning

    @staticmethod
    def validate_fiscal_year(
        year: int,
    ) -> bool:        
        

        current_year = (
            datetime.utcnow().year
        )

        if year < 2020:
            raise ValidationError(
                "Invalid fiscal year"
            )

        if year > current_year + 10:
            raise ValidationError(
                "Fiscal year exceeds limit"
            )

        return True

    # Files

    @staticmethod
    def validate_file_extension(
        filename: str,
        allowed_extensions: set[str],
    ) -> bool:     
        

        extension = (
            filename.split(".")[-1]
            .lower()
        )

        if extension not in allowed_extensions:
            raise ValidationError(
                f"Supported formats: "
                f"{', '.join(allowed_extensions)}"
            )

        return True

    # Multi-Tenant Security

    @staticmethod
    def validate_organization_access(
        resource_org_id: int,
        user_org_id: int,
    ) -> bool:

        if (
            resource_org_id
            != user_org_id
        ):
            raise ValidationError(
                "Organization access denied"
            )

        return True

    # Workflow Validation
    
    @staticmethod
    def validate_cron_expression(
        expression: str,
    ) -> bool:

        if len(
            expression.split()
        ) != 5:
            raise ValidationError(
                "Invalid cron expression"
            )

        return True

    # Report Validation

    @staticmethod
    def validate_report_format(
        file_format: str,
    ) -> bool:
        
        allowed = {
            "pdf",
            "xlsx",
            "csv",
            "json",
        }

        if (
            file_format.lower()
            not in allowed
        ):
            raise ValidationError(
                f"Unsupported format: "
                f"{file_format}"
            )

        return True