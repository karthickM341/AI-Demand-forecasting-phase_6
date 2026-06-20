from __future__ import annotations
from dataclasses import dataclass
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score,
)


@dataclass
class ForecastResult:
    predictions: list[float]
    mae: float
    rmse: float
    r2_score: float


class ForecastEngine:
    """
    Enterprise Demand Forecasting Engine

    Features:
    - Demand forecasting
    - Model evaluation
    - Future prediction
    - Business insights
    """

    def __init__(self) -> None:
        self.model = RandomForestRegressor(
            n_estimators=200,
            max_depth=10,
            random_state=42,
        )

    def train(
        self,
        features: pd.DataFrame,
        target: pd.Series,
    ) -> None:
        """
        Train forecasting model.
        """
        self.model.fit(features, target)

    def predict(
        self,
        features: pd.DataFrame,
    ) -> np.ndarray:
        """
        Generate demand predictions.
        """
        return self.model.predict(features)

    def evaluate(
        self,
        x_test: pd.DataFrame,
        y_test: pd.Series,
    ) -> ForecastResult:
        """
        Evaluate forecasting performance.
        """

        predictions = self.predict(x_test)

        mae = mean_absolute_error(
            y_test,
            predictions,
        )

        rmse = np.sqrt(
            mean_squared_error(
                y_test,
                predictions,
            )
        )

        score = r2_score(
            y_test,
            predictions,
        )

        return ForecastResult(
            predictions=predictions.tolist(),
            mae=round(mae, 4),
            rmse=round(rmse, 4),
            r2_score=round(score, 4),
        )

    def forecast(
        self,
        train_features: pd.DataFrame,
        train_target: pd.Series,
        future_features: pd.DataFrame,
    ) -> list[float]:
        """
        Train and generate future forecast.
        """

        self.train(
            train_features,
            train_target,
        )

        return self.predict(
            future_features
        ).tolist()

    def forecast_summary(
        self,
        predictions: list[float],
    ) -> dict:
        """
        Generate forecast insights.
        """

        values = np.array(predictions)

        return {
            "forecast_periods": len(values),
            "average_demand": round(
                float(values.mean()), 2
            ),
            "minimum_demand": round(
                float(values.min()), 2
            ),
            "maximum_demand": round(
                float(values.max()), 2
            ),
            "total_forecast": round(
                float(values.sum()), 2
            ),
        }


forecast_engine = ForecastEngine()