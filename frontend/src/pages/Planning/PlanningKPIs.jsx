import React from "react";
import {
  TrendingUp,
  Package,
  Factory,
  Brain,
  Target,
  Activity,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

const planningKPIs = [
  {
    title: "Forecast Accuracy",
    value: "96.8%",
    change: "+3.2%",
    icon: Brain,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Demand Growth",
    value: "+13.2%",
    change: "+2.4%",
    icon: TrendingUp,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Inventory Health",
    value: "92%",
    change: "+5.1%",
    icon: Package,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Capacity Usage",
    value: "82%",
    change: "+4.8%",
    icon: Factory,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    title: "Planning Efficiency",
    value: "94%",
    change: "+6.3%",
    icon: Target,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Resource Utilization",
    value: "88%",
    change: "+3.9%",
    icon: Activity,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Projected Revenue",
    value: "$24.8M",
    change: "+18%",
    icon: DollarSign,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Demand Coverage",
    value: "98%",
    change: "+2.1%",
    icon: TrendingUp,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const PlanningKPIs = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

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
          Planning Performance KPIs
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Enterprise planning, forecasting and inventory performance metrics
        </p>
      </div>

      {/* KPI Grid */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-4
        "
      >
        {planningKPIs.map((item) => {
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
                  {item.change}
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

      {/* Executive KPI Summary */}

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
          Planning Performance Overview
        </h3>

        <div className="space-y-5">

          <div>

            <div className="flex justify-between mb-2">
              <span>Forecast Reliability</span>
              <span className="font-semibold">
                96.8%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-blue-500 rounded-full"
                style={{ width: "96.8%" }}
              />
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Inventory Optimization</span>
              <span className="font-semibold">
                92%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: "92%" }}
              />
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Capacity Readiness</span>
              <span className="font-semibold">
                88%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-purple-500 rounded-full"
                style={{ width: "88%" }}
              />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PlanningKPIs;