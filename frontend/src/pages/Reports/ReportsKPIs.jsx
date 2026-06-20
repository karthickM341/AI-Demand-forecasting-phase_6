import React from "react";
import {
  FileText,
  Download,
  Eye,
  Calendar,
  Brain,
  TrendingUp,
  Users,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const reportsKPIs = [
  {
    title: "Total Reports",
    value: "12,486",
    growth: "+18%",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Downloads",
    value: "16,245",
    growth: "+24%",
    icon: Download,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Report Views",
    value: "48,320",
    growth: "+31%",
    icon: Eye,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Scheduled Reports",
    value: "324",
    growth: "+12%",
    icon: Calendar,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    title: "AI Reports",
    value: "1,248",
    growth: "+27%",
    icon: Brain,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Forecast Accuracy",
    value: "96.8%",
    growth: "+3.2%",
    icon: TrendingUp,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Active Users",
    value: "4,286",
    growth: "+14%",
    icon: Users,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Report Utilization",
    value: "92%",
    growth: "+7%",
    icon: BarChart3,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const ReportsKPIs = () => {
  return (
    <div className="space-y-4">

      {/* HEADER */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          p-5
        "
      >
        <h2 className="text-xl font-bold text-slate-900">
          Reports Performance Dashboard
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Enterprise reporting, analytics and business intelligence KPIs
        </p>
      </div>

      {/* KPI GRID */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-4
        "
      >
        {reportsKPIs.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                shadow-sm
                p-5
                hover:shadow-md
                transition-all
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
                    ${item.bg}
                  `}
                >
                  <Icon
                    size={24}
                    className={item.color}
                  />
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-green-600
                    text-sm
                    font-semibold
                  "
                >
                  <ArrowUpRight size={16} />
                  {item.growth}
                </div>

              </div>

              <div className="mt-4">

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h3 className="text-3xl font-bold text-slate-900 mt-2">
                  {item.value}
                </h3>

              </div>

            </div>
          );
        })}
      </div>

      {/* EXECUTIVE OVERVIEW */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          p-6
        "
      >
        <h3 className="text-lg font-semibold mb-5">
          Reports Performance Overview
        </h3>

        <div className="space-y-5">

          <div>

            <div className="flex justify-between mb-2">
              <span>Report Adoption</span>
              <span className="font-semibold">
                92%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-blue-500 rounded-full"
                style={{ width: "92%" }}
              />
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Executive Usage</span>
              <span className="font-semibold">
                88%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: "88%" }}
              />
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>AI Report Accuracy</span>
              <span className="font-semibold">
                96.8%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-purple-500 rounded-full"
                style={{ width: "96.8%" }}
              />
            </div>

          </div>

        </div>

      </div>

      {/* AI REPORTING INTELLIGENCE */}

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
        <h3 className="text-xl font-bold mb-5">
          AI Reporting Intelligence
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Reporting Growth
            </h4>

            <p className="text-slate-300 mt-2">
              Report generation increased significantly
              across all business units this quarter.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Executive Adoption
            </h4>

            <p className="text-slate-300 mt-2">
              Leadership teams actively use forecasting
              and analytics reports for decision-making.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              AI Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Expand automated report scheduling to
              improve operational reporting efficiency.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ReportsKPIs;