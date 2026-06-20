from __future__ import annotations
from typing import Any

class RecommendationEngine:
    """
    Enterprise Business Recommendation Engine

    Generates actionable recommendations for:
    - Strategic Planning
    - Executive Dashboard
    - KPI Management
    - Inventory Optimization
    - Data Quality Monitoring
    """

    @staticmethod
    def forecast_recommendations(
        forecast_accuracy: float,
        anomaly_count: int,
    ) -> list[str]:
        """
        Forecast optimization recommendations.
        """

        recommendations = []

        if forecast_accuracy < 80:
            recommendations.append(
                "Consider retraining forecasting models to improve accuracy."
            )

        if anomaly_count > 0:
            recommendations.append(
                "Review detected demand anomalies before approving forecasts."
            )

        if not recommendations:
            recommendations.append(
                "Forecast performance is healthy and within expected thresholds."
            )

        return recommendations

    @staticmethod
    def inventory_recommendations(
        projected_demand: float,
        current_inventory: float,
    ) -> list[str]:
        """
        Inventory planning recommendations.
        """

        recommendations = []

        if current_inventory < projected_demand:
            recommendations.append(
                "Increase inventory levels to prevent potential stockouts."
            )

        elif current_inventory > projected_demand * 1.5:
            recommendations.append(
                "Inventory exceeds expected demand. Consider inventory optimization."
            )

        else:
            recommendations.append(
                "Inventory levels are aligned with projected demand."
            )

        return recommendations

    @staticmethod
    def kpi_recommendations(
        achievement_rate: float,
    ) -> list[str]:
        """
        KPI performance recommendations.
        """

        recommendations = []

        if achievement_rate < 70:
            recommendations.append(
                "Critical KPI underperformance detected. Immediate review required."
            )

        elif achievement_rate < 90:
            recommendations.append(
                "KPI performance is below target. Monitor closely."
            )

        else:
            recommendations.append(
                "KPI targets are being achieved successfully."
            )

        return recommendations

    @staticmethod
    def quality_recommendations(
        quality_score: float,
    ) -> list[str]:
        """
        Data quality recommendations.
        """

        if quality_score < 75:
            return [
                "Improve dataset completeness and validation before forecasting."
            ]

        return [
            "Dataset quality meets forecasting standards."
        ]

    @classmethod
    def generate(
        cls,
        metrics: dict[str, Any],
    ) -> dict[str, list[str]]:
        """
        Generate enterprise recommendations.
        """

        return {
            "forecast": cls.forecast_recommendations(
                forecast_accuracy=metrics.get(
                    "forecast_accuracy",
                    100,
                ),
                anomaly_count=metrics.get(
                    "anomaly_count",
                    0,
                ),
            ),
            "inventory": cls.inventory_recommendations(
                projected_demand=metrics.get(
                    "projected_demand",
                    0,
                ),
                current_inventory=metrics.get(
                    "current_inventory",
                    0,
                ),
            ),
            "kpi": cls.kpi_recommendations(
                achievement_rate=metrics.get(
                    "kpi_achievement_rate",
                    100,
                ),
            ),
            "quality": cls.quality_recommendations(
                quality_score=metrics.get(
                    "quality_score",
                    100,
                ),
            ),
        }


recommendation_engine = RecommendationEngine()