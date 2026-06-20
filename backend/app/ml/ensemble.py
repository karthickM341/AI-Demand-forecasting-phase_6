from __future__ import annotations
from dataclasses import dataclass
import numpy as np
import pandas as pd
from sklearn.ensemble import (
    RandomForestRegressor,
    GradientBoostingRegressor,
)
from sklearn.linear_model import LinearRegression
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
)


@dataclass
class EnsembleResult:
    predictions: np.ndarray
    mae: float
    rmse: float


class EnsembleForecaster:
    """
    Enterprise Ensemble Forecasting Engine.

    Models:
    - Random Forest
    - Gradient Boosting
    - Linear Regression

    Final Prediction:
    Weighted Average Ensemble
    """

    def __init__(self):
        self.models = {
            "rf": RandomForestRegressor(
                n_estimators=150,
                random_state=42,
            ),
            "gb": GradientBoostingRegressor(
                random_state=42,
            ),
            "lr": LinearRegression(),
        }

    def train(
        self,
        x_train: pd.DataFrame,
        y_train: pd.Series,
    ) -> None:
        """
        Train all models.
        """

        for model in self.models.values():
            model.fit(x_train, y_train)

    def predict(
        self,
        x_test: pd.DataFrame,
    ) -> np.ndarray:
        """
        Ensemble prediction.
        """

        predictions = np.column_stack(
            [
                model.predict(x_test)
                for model in self.models.values()
            ]
        )

        weights = np.array([
            0.4,   # Random Forest
            0.4,   # Gradient Boosting
            0.2,   # Linear Regression
        ])

        return np.average(
            predictions,
            axis=1,
            weights=weights,
        )

    def evaluate(
        self,
        x_test: pd.DataFrame,
        y_test: pd.Series,
    ) -> EnsembleResult:
        """
        Evaluate ensemble performance.
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

        return EnsembleResult(
            predictions=predictions,
            mae=round(mae, 4),
            rmse=round(rmse, 4),
        )

    def forecast(
        self,
        x_train: pd.DataFrame,
        y_train: pd.Series,
        x_future: pd.DataFrame,
    ) -> np.ndarray:
        """
        Train and forecast.
        """

        self.train(
            x_train=x_train,
            y_train=y_train,
        )

        return self.predict(x_future)


ensemble_forecaster = EnsembleForecaster()