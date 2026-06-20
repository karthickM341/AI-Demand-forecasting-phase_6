import React from "react";
import {
  Brain,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  DollarSign,
  Activity,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const metrics = [
  {
    title: "Forecast Accuracy",
    value: "96.8%",
    icon: Brain,
    color: "text-blue-600",
    bg: "bg-blue-50",
    status: "Excellent",
  },
  {
    title: "Revenue Growth",
    value: "+24.5%",
    icon: TrendingUp,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    status: "Growing",
  },
  {
    title: "Governance Score",
    value: "98.2%",
    icon: ShieldCheck,
    color: "text-violet-600",
    bg: "bg-violet-50",
    status: "Compliant",
  },
  {
    title: "Risk Alerts",
    value: "14",
    icon: AlertTriangle,
    color: "text-amber-600",
    bg: "bg-amber-50",
    status: "Monitor",
  },
];

const ExecutiveSummary = () => {
  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Executive Summary
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Enterprise performance overview
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              px-3
              py-2
              rounded-xl
              bg-green-50
              text-green-700
              text-sm
              font-semibold
            "
          >
            <ArrowUpRight size={16} />
            Healthy
          </div>

        </div>
      </div>

      {/* KPI Cards */}
      {metrics.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              p-5
              shadow-sm
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

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  bg-slate-100
                  text-slate-600
                "
              >
                {item.status}
              </span>

            </div>

            <div className="mt-4">
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <h3 className="text-3xl font-bold text-slate-900 mt-1">
                {item.value}
              </h3>
            </div>
          </div>
        );
      })}

      {/* Business Health */}
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
        <h3 className="font-semibold text-slate-900 mb-4">
          Business Health Score
        </h3>

        <div className="space-y-5">

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-500">
                Revenue Performance
              </span>

              <span className="font-semibold text-green-600">
                92%
              </span>
            </div>

            <div className="w-full h-2 bg-slate-100 rounded-full">
              <div
                className="h-2 rounded-full bg-green-500"
                style={{ width: "92%" }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-500">
                Forecast Reliability
              </span>

              <span className="font-semibold text-blue-600">
                96.8%
              </span>
            </div>

            <div className="w-full h-2 bg-slate-100 rounded-full">
              <div
                className="h-2 rounded-full bg-blue-500"
                style={{ width: "96.8%" }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-500">
                Governance Compliance
              </span>

              <span className="font-semibold text-violet-600">
                98.2%
              </span>
            </div>

            <div className="w-full h-2 bg-slate-100 rounded-full">
              <div
                className="h-2 rounded-full bg-violet-500"
                style={{ width: "98.2%" }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Executive Snapshot */}
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
        <h3 className="font-semibold mb-4">
          Executive Snapshot
        </h3>

        <div className="space-y-4">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign
                size={18}
                className="text-green-600"
              />

              <span className="text-sm">
                Revenue Forecast
              </span>
            </div>

            <span className="font-bold">
              $5.24M
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-blue-600"
              />

              <span className="text-sm">
                Active Models
              </span>
            </div>

            <span className="font-bold">
              12
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity
                size={18}
                className="text-purple-600"
              />

              <span className="text-sm">
                AI Confidence
              </span>
            </div>

            <span className="font-bold">
              98.1%
            </span>
          </div>

        </div>
      </div>

      {/* AI Insight Panel */}
      <div
        className="
          bg-gradient-to-br
          from-slate-900
          via-blue-900
          to-slate-900
          rounded-2xl
          p-6
          text-white
        "
      >
        <div className="flex items-center gap-2 mb-4">
          <Brain size={20} />

          <h3 className="font-semibold">
            AI Executive Insight
          </h3>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed">
          Demand forecasting accuracy remains above
          enterprise targets. Revenue growth is
          accelerating across strategic business
          units. Inventory optimization initiatives
          are projected to reduce stock risk by
          12% during the next quarter.
        </p>
      </div>

    </div>
  );
};

export default ExecutiveSummary;