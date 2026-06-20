import React from "react";
import {
  BarChart3,
  TrendingUp,
  Download,
  Eye,
  FileText,
  Users,
  Activity,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const analyticsMetrics = [
  {
    title: "Reports Generated",
    value: "12,486",
    growth: "+18%",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Report Views",
    value: "48,320",
    growth: "+24%",
    icon: Eye,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Downloads",
    value: "16,245",
    growth: "+15%",
    icon: Download,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Active Users",
    value: "4,286",
    growth: "+9%",
    icon: Users,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

const reportUsage = [
  {
    report: "Demand Forecast Report",
    usage: 96,
  },
  {
    report: "Revenue Analytics Report",
    usage: 88,
  },
  {
    report: "Inventory Performance Report",
    usage: 82,
  },
  {
    report: "Governance Compliance Report",
    usage: 74,
  },
];

const ReportAnalytics = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        <h2 className="text-xl font-bold text-slate-900">
          Report Analytics
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Report performance, usage metrics and business intelligence insights
        </p>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {analyticsMetrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                shadow-sm
                p-5
              "
            >
              <div className="flex items-center justify-between">

                <div
                  className={`
                    h-12
                    w-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${metric.bg}
                  `}
                >
                  <Icon
                    size={24}
                    className={metric.color}
                  />
                </div>

                <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                  <ArrowUpRight size={16} />
                  {metric.growth}
                </div>

              </div>

              <p className="text-sm text-slate-500 mt-4">
                {metric.title}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {metric.value}
              </h3>

            </div>
          );
        })}

      </div>

      {/* Report Usage */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Most Viewed Reports
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Report popularity and engagement metrics
          </p>

        </div>

        <div className="p-5 space-y-5">

          {reportUsage.map((report) => (
            <div key={report.report}>

              <div className="flex justify-between mb-2">

                <span className="font-medium">
                  {report.report}
                </span>

                <span className="font-semibold">
                  {report.usage}%
                </span>

              </div>

              <div className="w-full h-3 bg-slate-100 rounded-full">

                <div
                  className="h-3 bg-blue-600 rounded-full"
                  style={{
                    width: `${report.usage}%`,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Analytics Overview */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <BarChart3
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Business Intelligence
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Executive reporting adoption continues
            to increase across all departments.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <TrendingUp
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Growth Analytics
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Report usage has increased significantly
            due to forecasting adoption.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Activity
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Performance Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Real-time report monitoring provides
            actionable business insights.
          </p>

        </div>

      </div>

      {/* AI Analytics Intelligence */}

      <div
        className="
          rounded-2xl
          bg-gradient-to-r
          from-slate-950
          via-blue-950
          to-slate-950
          p-6
          text-white
        "
      >

        <div className="flex items-center gap-3 mb-5">

          <Sparkles size={22} />

          <h3 className="text-xl font-bold">
            Analytics Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Report Trends
            </h4>

            <p className="text-slate-300 mt-2">
              Demand forecasting reports remain the
              most utilized reports across the platform.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              User Engagement
            </h4>

            <p className="text-slate-300 mt-2">
              Executive users show increased engagement
              with strategic business reports.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              AI Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Expand automated reporting workflows
              to improve reporting efficiency.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ReportAnalytics;