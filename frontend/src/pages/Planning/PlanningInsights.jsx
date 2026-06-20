import React from "react";
import {
  Sparkles,
  Brain,
  TrendingUp,
  AlertTriangle,
  Package,
  Factory,
  Target,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const insights = [
  {
    title: "Demand Growth Forecast",
    value: "+13.2%",
    icon: TrendingUp,
    color: "text-green-600",
    bg: "bg-green-50",
    description:
      "Projected demand increase over the next quarter.",
  },
  {
    title: "Inventory Optimization",
    value: "18%",
    icon: Package,
    color: "text-blue-600",
    bg: "bg-blue-50",
    description:
      "Potential inventory cost reduction opportunity.",
  },
  {
    title: "Capacity Utilization",
    value: "82%",
    icon: Factory,
    color: "text-purple-600",
    bg: "bg-purple-50",
    description:
      "Current manufacturing utilization rate.",
  },
  {
    title: "Forecast Accuracy",
    value: "96.8%",
    icon: Target,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    description:
      "AI model forecasting confidence score.",
  },
];

const recommendations = [
  {
    title: "Increase Safety Stock",
    description:
      "Product D inventory levels are below recommended thresholds.",
    priority: "High",
  },
  {
    title: "Expand Production Capacity",
    description:
      "Demand growth may exceed current production limits next quarter.",
    priority: "Medium",
  },
  {
    title: "Optimize Warehouse Allocation",
    description:
      "Redistribute inventory across regional warehouses.",
    priority: "Low",
  },
];

const PlanningInsights = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        <div className="flex items-center gap-3">

          <Brain
            size={26}
            className="text-blue-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              AI Planning Intelligence
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Strategic recommendations powered by enterprise forecasting AI
            </p>
          </div>

        </div>

      </div>

      {/* Insight KPIs */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {insights.map((item) => {
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

                <ArrowUpRight
                  size={18}
                  className="text-green-600"
                />

              </div>

              <p className="text-sm text-slate-500 mt-4">
                {item.title}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {item.value}
              </h3>

              <p className="text-xs text-slate-500 mt-2">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>

      {/* AI Recommendations */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold text-slate-900">
            AI Recommendations
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Intelligent actions to improve planning performance
          </p>

        </div>

        <div className="divide-y divide-slate-100">

          {recommendations.map((item) => (
            <div
              key={item.title}
              className="p-5 hover:bg-slate-50 transition"
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="flex items-center gap-2">

                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />

                    <h4 className="font-semibold">
                      {item.title}
                    </h4>

                  </div>

                  <p className="text-sm text-slate-500 mt-2">
                    {item.description}
                  </p>

                </div>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    ${
                      item.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : item.priority === "Medium"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-green-100 text-green-700"
                    }
                  `}
                >
                  {item.priority}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Strategic Insights */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <TrendingUp
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Demand Outlook
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Enterprise demand is expected to remain
            strong with sustained growth trends.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Package
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Inventory Strategy
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Maintain optimal inventory levels to
            balance cost and service efficiency.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <AlertTriangle
            size={24}
            className="text-amber-600"
          />

          <h3 className="font-semibold mt-4">
            Risk Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Monitor high-growth products closely to
            prevent stock shortages and delays.
          </p>

        </div>

      </div>

      {/* AI Executive Intelligence */}

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
            Executive Planning Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Growth Opportunity
            </h4>

            <p className="text-slate-300 mt-2">
              Demand forecasts indicate strong
              expansion opportunities in key markets.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Resource Optimization
            </h4>

            <p className="text-slate-300 mt-2">
              AI recommends reallocating production
              resources for maximum efficiency.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Strategic Action
            </h4>

            <p className="text-slate-300 mt-2">
              Increase inventory buffers for
              high-growth products before peak demand.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PlanningInsights;