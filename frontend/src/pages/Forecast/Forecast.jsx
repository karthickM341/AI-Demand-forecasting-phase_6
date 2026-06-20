import React from "react";
import PageHeader from "../../components/ui/PageHeader";
import KPICard from "../../components/ui/KPICard";
import PageContainer from "../../components/PageContainer";
import History from "./History";
import ForecastChart from "./ForecastChart";
import GeneralForecast from "./GeneralForecast";
import ModelPerformance from "./ModelPerformance";
import ForecastTable from "./ForecastTable";

const Forecast = () => {
  return (
    <PageContainer
      title="AI Forecasting Center"
      subtitle="Enterprise demand forecasting, predictive analytics and model intelligence"
    >
      {/* KPI SECTION */}
      <KPICard />

      {/* MAIN GRID */}
      <div
        className="
          grid
          grid-cols-12
          gap-4
          lg:gap-6
        "
      >
        {/* Forecast Visualization */}
        <div
          className="
            col-span-12
            xl:col-span-8
          "
        >
          <ForecastChart />
        </div>

        {/* Model Performance */}
        <div
          className="
            col-span-12
            xl:col-span-4
          "
        >
          <ModelPerformance />
        </div>
      </div>

      <GeneralForecast />
      <History />
      <ForecastTable />

      {/* Executive AI Panel */}
      <div
        className="
          rounded-3xl
          bg-gradient-to-r
          from-slate-950
          via-blue-950
          to-slate-950
          p-8
          text-white
        "
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold">
              AI Forecast Intelligence
            </h2>

            <p className="text-slate-300 mt-2 max-w-3xl">
              Advanced machine learning models continuously
              analyze demand patterns, seasonality,
              inventory behavior and revenue signals to
              deliver enterprise-grade forecasting insights.
            </p>
          </div>

          <div
            className="
              px-4
              py-2
              rounded-xl
              bg-green-500/20
              border
              border-green-500/30
              text-green-300
              font-semibold
            "
          >
            Model Status: Active
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div>
            <h4 className="font-semibold text-cyan-300">
              Forecast Accuracy
            </h4>

            <p className="mt-2 text-slate-300">
              Current forecasting accuracy remains above
              enterprise target levels.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-green-300">
              Demand Outlook
            </h4>

            <p className="mt-2 text-slate-300">
              Demand growth expected across strategic
              product categories over the next quarter.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-300">
              Recommendation
            </h4>

            <p className="mt-2 text-slate-300">
              Increase inventory allocation and continue
              automated model retraining cycles.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Forecast;