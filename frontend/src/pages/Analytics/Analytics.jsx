import React from "react";
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Target,
  Activity,
  Globe,
} from "lucide-react";

import PageContainer from "../../components/PageContainer";
import KPICards from "../../components/ui/KPICard";
import AnalyticsKPIs from "./AnalyticsKPIs";
import RevenueTrendChart from "./RevenueTrendChart";
import ForecastAccuracyTrends from "./ForecastAccuracyTrends";
import ProductAnalysis from "./ProductAnalysis";
import RegionalPerformance from "./RegionalPerformance";

const Analytics = () => {
  return (
    <PageContainer
      title="Analytics Center"
      subtitle="Advanced business intelligence and forecasting analytics"
    >
      {/* KPI Section */}
      <KPICards />

       {/* REVENUE ANALYSIS */}
      <RevenueTrendChart />

      {/* FORECAST ACCURACY */}
      <ForecastAccuracyTrends />

      {/* PRODUCT ANALYSIS */}
      <ProductAnalysis />

      {/* REGIONAL PERFORMANCE */}
      <RegionalPerformance />


      {/* Analytics Overview */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        {/* Revenue Trend */}
        <div
          className="
            xl:col-span-2
            bg-white
            rounded-2xl
            border
            border-slate-200
            p-6
            shadow-sm
          "
        >
          <div className="flex items-center gap-3 mb-6">
            <BarChart3
              size={24}
              className="text-blue-600"
            />

            <div>
              <h3 className="text-lg font-semibold">
                Revenue Trend Analysis
              </h3>

              <p className="text-sm text-slate-500">
                Revenue growth performance across forecasting periods
              </p>
            </div>
          </div>

          <div
            className="
              h-[350px]
              rounded-xl
              bg-slate-50
              border
              border-dashed
              border-slate-300
              flex
              items-center
              justify-center
            "
          >
            <div className="text-center">
              <BarChart3
                size={50}
                className="mx-auto text-slate-400"
              />

              <p className="mt-3 text-slate-500">
                Revenue Analytics Chart
              </p>
            </div>
          </div>
        </div>

        {/* Forecast Insights */}
        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            p-6
            shadow-sm
          "
        >
          <h3 className="text-lg font-semibold mb-5">
            Forecast Insights
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <TrendingUp
                size={20}
                className="text-green-600"
              />

              <div>
                <p className="font-medium">
                  Demand Growth
                </p>

                <p className="text-sm text-slate-500">
                  +24.5% projected increase
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Target
                size={20}
                className="text-blue-600"
              />

              <div>
                <p className="font-medium">
                  Forecast Accuracy
                </p>

                <p className="text-sm text-slate-500">
                  96.8% prediction accuracy
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Activity
                size={20}
                className="text-purple-600"
              />

              <div>
                <p className="font-medium">
                  AI Confidence
                </p>

                <p className="text-sm text-slate-500">
                  98.1% confidence score
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Analytics Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            p-5
            shadow-sm
          "
        >
          <DollarSign
            size={28}
            className="text-green-600"
          />

          <h3 className="mt-4 text-lg font-semibold">
            Revenue Forecast
          </h3>

          <p className="text-3xl font-bold mt-2">
            $5.24M
          </p>

          <p className="text-sm text-slate-500 mt-2">
            Expected quarterly revenue
          </p>
        </div>

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            p-5
            shadow-sm
          "
        >
          <Globe
            size={28}
            className="text-cyan-600"
          />

          <h3 className="mt-4 text-lg font-semibold">
            Regional Coverage
          </h3>

          <p className="text-3xl font-bold mt-2">
            18
          </p>

          <p className="text-sm text-slate-500 mt-2">
            Active forecasting regions
          </p>
        </div>

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            p-5
            shadow-sm
          "
        >
          <TrendingUp
            size={28}
            className="text-violet-600"
          />

          <h3 className="mt-4 text-lg font-semibold">
            Growth Index
          </h3>

          <p className="text-3xl font-bold mt-2">
            124.5
          </p>

          <p className="text-sm text-slate-500 mt-2">
            Forecast performance indicator
          </p>
        </div>

      </div>

      {/* AI Analytics Intelligence */}
      <div
        className="
          bg-gradient-to-r
          from-slate-900
          via-blue-900
          to-slate-900
          rounded-2xl
          p-8
          text-white
        "
      >
        <h2 className="text-2xl font-bold">
          AI Analytics Intelligence
        </h2>

        <p className="text-slate-300 mt-2">
          AI forecasting models indicate strong
          revenue growth opportunities while
          maintaining forecast accuracy above
          enterprise targets.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div>
            <h4 className="font-semibold text-cyan-300">
              Revenue Opportunity
            </h4>

            <p className="text-slate-300 mt-2">
              High-growth product categories
              expected to contribute 34% of
              projected revenue.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-green-300">
              Forecast Reliability
            </h4>

            <p className="text-slate-300 mt-2">
              Forecast accuracy remains above
              strategic business thresholds.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-300">
              AI Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Increase inventory allocation
              in high-demand regions.
            </p>
          </div>

        </div>
      </div>

    </PageContainer>
  );
};

export default Analytics;