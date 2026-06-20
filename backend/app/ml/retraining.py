from __future__ import annotations
from dataclasses import dataclass
from datetime import datetime, timezone
import joblib
import pandas as pd
from app.ml.forecasting import ForecastEngine


@dataclass
class RetrainingResult:
    success: bool
    model_version: str
    trained_at: str
    records_processed: int


class ModelRetrainingManager:
    """
    Enterprise Model Retraining Manager

    Features:
    - Automated retraining
    - Model versioning
    - Performance monitoring
    - Model persistence
    """

    def __init__(
        self,
        model_path: str = "storage/models/forecast_model.pkl",
    ):
        self.model_path = model_path

    def retrain(
        self,
        features: pd.DataFrame,
        target: pd.Series,
    ) -> RetrainingResult:
        """
        Retrain forecasting model.
        """

        model = ForecastEngine()

        model.train(
            features=features,
            target=target,
        )

        joblib.dump(
            model,
            self.model_path,
        )

        version = (
            f"v{datetime.now().strftime('%Y%m%d%H%M%S')}"
        )

        return RetrainingResult(
            success=True,
            model_version=version,
            trained_at=datetime.now(
                timezone.utc
            ).isoformat(),
            records_processed=len(features),
        )

    def load_model(self):
        """
        Load latest trained model.
        """

        return joblib.load(
            self.model_path
        )

    def needs_retraining(
        self,
        current_accuracy: float,
        threshold: float = 80.0,
    ) -> bool:
        """
        Determine whether retraining is required.
        """

        return current_accuracy < threshold

    def model_health(
        self,
        current_accuracy: float,
    ) -> dict:
        """
        Model health status.
        """

        return {
            "accuracy": current_accuracy,
            "status": (
                "healthy"
                if current_accuracy >= 80
                else "retraining_required"
            ),
            "recommended_action": (
                "continue_monitoring"
                if current_accuracy >= 80
                else "retrain_model"
            ),
        }


retraining_manager = ModelRetrainingManager()