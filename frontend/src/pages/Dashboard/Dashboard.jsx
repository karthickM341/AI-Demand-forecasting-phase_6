import React from "react";
import PageContainer from "../../components/PageContainer";
import KPICards from "../../components/ui/KPICard";
import ForecastChart from "./ForecastChart";
import ExecutiveSummary from "./ExecutiveSummary";
import RecentAlerts from "./RecentAlerts";

const Dashboard = () => {
  return (
    <PageContainer
      title="Executive Dashboard"
      subtitle="Enterprise AI demand forecasting and business intelligence overview"
    >
      {/* KPI OVERVIEW */}
      <KPICards />

      {/* MAIN DASHBOARD GRID */}
      <div
        className="
          grid
          grid-cols-12
          gap-4
          lg:gap-6
        "
      >
        {/* Forecast Analytics */}
        <div
          className="
            col-span-12
            xl:col-span-8
            min-w-0
          "
        >
          <ForecastChart />
        </div>

        {/* Executive Summary */}
        <div
          className="
            col-span-12
            xl:col-span-4
            min-w-0
          "
        >
          <ExecutiveSummary />
        </div>
      </div>

      {/* Alerts & Monitoring */}
      <RecentAlerts />

      {/* AI Executive Intelligence */}
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
              AI Executive Intelligence
            </h2>

            <p className="text-slate-300 mt-2 max-w-3xl">
              Forecasting models indicate strong
              revenue growth potential, improving
              forecast accuracy, and optimized
              inventory planning across enterprise
              operations.
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
            AI Status: Operational
          </div>
        </div>

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
            mt-8
          "
        >
          <div>
            <h4 className="font-semibold text-cyan-300">
              Demand Outlook
            </h4>

            <p className="text-slate-300 mt-2">
              Demand projected to increase by
              24.5% during the next forecasting
              cycle.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-green-300">
              Revenue Forecast
            </h4>

            <p className="text-slate-300 mt-2">
              Revenue expected to exceed
              enterprise targets by 18%.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-300">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Increase inventory allocation
              in high-growth product categories.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;