import React from "react";
import {
  Brain,
  TrendingUp,
  Package,
  DollarSign,
  Activity,
  ArrowUpRight,
  Sparkles,
  Target,
} from "lucide-react";

const forecastMetrics = [
  {
    title: "Revenue Forecast",
    value: "$5.24M",
    growth: "+18.4%",
    icon: DollarSign,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Demand Growth",
    value: "24.5%",
    growth: "+8.7%",
    icon: TrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Inventory Forecast",
    value: "18K Units",
    growth: "+12.3%",
    icon: Package,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "AI Confidence",
    value: "98.1%",
    growth: "+1.4%",
    icon: Brain,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

const GeneralForecast = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Enterprise Forecast Summary
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              AI-powered demand, revenue and inventory forecasting
            </p>
          </div>

          <div
            className="
              px-4
              py-2
              rounded-xl
              bg-green-50
              text-green-700
              font-semibold
              flex
              items-center
              gap-2
            "
          >
            <ArrowUpRight size={16} />
            Forecast Healthy
          </div>

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {forecastMetrics.map((item) => {
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

                <span className="text-green-600 font-semibold text-sm">
                  {item.growth}
                </span>

              </div>

              <div className="mt-4">
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h3 className="text-3xl font-bold mt-1">
                  {item.value}
                </h3>
              </div>

            </div>
          );
        })}

      </div>

      {/* Forecast Overview */}

      <div className="grid grid-cols-12 gap-4">

        <div className="col-span-12 lg:col-span-8">

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              p-6
              shadow-sm
              h-full
            "
          >
            <h3 className="text-lg font-semibold mb-4">
              Forecast Overview
            </h3>

            <p className="text-slate-600 leading-7">
              Demand forecasting models predict
              sustained growth across major product
              categories. Revenue is expected to
              increase by 18.4% during the next
              quarter while inventory utilization
              remains within enterprise thresholds.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">

              <div className="bg-slate-50 rounded-xl p-4">
                <Target className="text-blue-600" />
                <h4 className="font-semibold mt-3">
                  Forecast Horizon
                </h4>
                <p className="text-slate-500 text-sm mt-1">
                  90 Days
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <Activity className="text-green-600" />
                <h4 className="font-semibold mt-3">
                  Active Models
                </h4>
                <p className="text-slate-500 text-sm mt-1">
                  12 Models
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <Brain className="text-purple-600" />
                <h4 className="font-semibold mt-3">
                  AI Confidence
                </h4>
                <p className="text-slate-500 text-sm mt-1">
                  98.1%
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="col-span-12 lg:col-span-4">

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              p-5
              shadow-sm
              h-full
            "
          >
            <h3 className="font-semibold mb-4">
              Strategic Recommendations
            </h3>

            <div className="space-y-4">

              <div className="p-4 rounded-xl bg-green-50">
                <h4 className="font-medium text-green-700">
                  Inventory Increase
                </h4>

                <p className="text-sm text-green-600 mt-1">
                  Increase stock allocation by 18%.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50">
                <h4 className="font-medium text-blue-700">
                  Revenue Optimization
                </h4>

                <p className="text-sm text-blue-600 mt-1">
                  Focus on high-growth products.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-50">
                <h4 className="font-medium text-purple-700">
                  AI Monitoring
                </h4>

                <p className="text-sm text-purple-600 mt-1">
                  Continue automated retraining.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* AI Intelligence */}

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
            AI Forecast Intelligence
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Demand Outlook
            </h4>

            <p className="mt-2 text-slate-300">
              Demand growth expected to remain
              above enterprise targets.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Inventory Impact
            </h4>

            <p className="mt-2 text-slate-300">
              Inventory optimization expected
              to reduce stock risk by 12%.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Revenue Projection
            </h4>

            <p className="mt-2 text-slate-300">
              Revenue forecast remains positive
              across all business units.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default GeneralForecast;