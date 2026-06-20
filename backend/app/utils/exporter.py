from __future__ import annotations

import json
from io import BytesIO
from pathlib import Path
from typing import Any

import pandas as pd


class Exporter:
    """
    Enterprise Export Utility

    Features
    --------
    - CSV Export
    - Excel Export
    - JSON Export
    - Report File Generation
    - Dashboard Export Support
    """

    @staticmethod
    def export_csv(
        data: list[dict[str, Any]],
        file_path: str,
    ) -> str:
        """
        Export records to CSV.
        """

        df = pd.DataFrame(data)

        Path(file_path).parent.mkdir(
            parents=True,
            exist_ok=True,
        )

        df.to_csv(
            file_path,
            index=False,
        )

        return file_path

    @staticmethod
    def export_excel(
        data: list[dict[str, Any]],
        file_path: str,
        sheet_name: str = "Report",
    ) -> str:
        """
        Export records to Excel.
        """

        df = pd.DataFrame(data)

        Path(file_path).parent.mkdir(
            parents=True,
            exist_ok=True,
        )

        with pd.ExcelWriter(
            file_path,
            engine="openpyxl",
        ) as writer:
            df.to_excel(
                writer,
                sheet_name=sheet_name,
                index=False,
            )

        return file_path

    @staticmethod
    def export_json(
        data: dict | list,
        file_path: str,
    ) -> str:
        """
        Export data to JSON.
        """

        Path(file_path).parent.mkdir(
            parents=True,
            exist_ok=True,
        )

        with open(
            file_path,
            "w",
            encoding="utf-8",
        ) as file:
            json.dump(
                data,
                file,
                indent=4,
                default=str,
            )

        return file_path

    @staticmethod
    def dataframe(
        data: list[dict[str, Any]],
    ) -> pd.DataFrame:
        """
        Convert records to DataFrame.
        """

        return pd.DataFrame(data)

    @staticmethod
    def excel_bytes(
        data: list[dict[str, Any]],
        sheet_name: str = "Report",
    ) -> BytesIO:
        """
        Generate Excel in memory.
        Useful for API downloads.
        """

        df = pd.DataFrame(data)

        output = BytesIO()

        with pd.ExcelWriter(
            output,
            engine="openpyxl",
        ) as writer:
            df.to_excel(
                writer,
                sheet_name=sheet_name,
                index=False,
            )

        output.seek(0)

        return output

    @staticmethod
    def csv_bytes(
        data: list[dict[str, Any]],
    ) -> BytesIO:
        """
        Generate CSV in memory.
        """

        df = pd.DataFrame(data)

        output = BytesIO()

        output.write(
            df.to_csv(
                index=False
            ).encode("utf-8")
        )

        output.seek(0)

        return output

    @staticmethod
    def validate_export_data(
        data: list[dict[str, Any]],
    ) -> bool:
        """
        Validate export payload.
        """

        if not data:
            return False

        if not isinstance(
            data,
            list,
        ):
            return False

        return all(
            isinstance(
                row,
                dict,
            )
            for row in data
        )