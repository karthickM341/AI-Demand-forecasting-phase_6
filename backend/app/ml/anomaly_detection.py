from __future__ import annotations
import numpy as np
import pandas as pd
from sklearn.ensemble import IsolationForest

class AnomalyDetector:
    """
    Enterprise Anomaly Detection Engine.

    Detects:
    - Demand spikes
    - Sales drops
    - Forecast outliers
    - Inventory anomalies
    """

    def __init__(
        self,
        contamination: float = 0.05,
        random_state: int = 42,
    ):
        self.model = IsolationForest(
            contamination=contamination,
            random_state=random_state,
            n_estimators=100,
        )

    def detect(
        self,
        data: pd.DataFrame,
        feature_column: str,
    ) -> pd.DataFrame:
        """
        Detect anomalies in a dataset.

        Returns:
            DataFrame with anomaly labels.
        """

        if feature_column not in data.columns:
            raise ValueError(
                f"{feature_column} not found in dataset"
            )

        df = data.copy()

        values = df[[feature_column]]

        self.model.fit(values)

        predictions = self.model.predict(values)

        df["is_anomaly"] = predictions == -1

        df["anomaly_score"] = (
            self.model.decision_function(values)
        )

        return df

    def anomaly_summary(
        self,
        data: pd.DataFrame,
    ) -> dict:
        """
        Generate anomaly statistics.
        """

        total_records = len(data)

        anomalies = int(
            data["is_anomaly"].sum()
        )

        anomaly_rate = round(
            (anomalies / total_records) * 100,
            2,
        ) if total_records else 0

        return {
            "total_records": total_records,
            "anomalies_detected": anomalies,
            "anomaly_rate": anomaly_rate,
        }

    def get_anomalies(
        self,
        data: pd.DataFrame,
    ) -> pd.DataFrame:
        """
        Return anomaly rows only.
        """

        return data[
            data["is_anomaly"] == True
        ].copy()


anomaly_detector = AnomalyDetector()