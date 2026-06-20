import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  Brain,
  TrendingUp,
  Target,
  Activity,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const forecastData = [
  { month: "Jan", actual: 120, forecast: 125 },
  { month: "Feb", actual: 135, forecast: 138 },
  { month: "Mar", actual: 150, forecast: 154 },
  { month: "Apr", actual: 165, forecast: 170 },
  { month: "May", actual: 185, forecast: 190 },
  { month: "Jun", actual: 205, forecast: 210 },
  { month: "Jul", actual: 225, forecast: 232 },
  { month: "Aug", actual: 245, forecast: 252 },
  { month: "Sep", actual: 268, forecast: 275 },
  { month: "Oct", actual: 292, forecast: 300 },
  { month: "Nov", actual: 318, forecast: 327 },
  { month: "Dec", actual: 345, forecast: 356 },
];

const ForecastChart = () => {
  return (
    <div className="space-y-5">

      {/* HEADER */}

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
        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Forecast Analytics
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              AI-powered demand forecasting and prediction insights
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              bg-green-50
              text-green-700
              font-semibold
            "
          >
            <ArrowUpRight size={16} />
            +24.5%
          </div>

        </div>
      </div>

      {/* KPI ROW */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Brain
            size={26}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Forecast Accuracy
          </p>

          <h3 className="text-3xl font-bold mt-2">
            96.8%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Target
            size={26}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Forecast Horizon
          </p>

          <h3 className="text-3xl font-bold mt-2">
            30 Days
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <TrendingUp
            size={26}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Demand Growth
          </p>

          <h3 className="text-3xl font-bold mt-2">
            +24.5%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Activity
            size={26}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            AI Confidence
          </p>

          <h3 className="text-3xl font-bold mt-2">
            98.1%
          </h3>
        </div>

      </div>

      {/* DEMAND FORECAST CHART */}

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
        <div className="mb-5">
          <h3 className="font-semibold text-lg">
            Demand Forecast Trend
          </h3>

          <p className="text-sm text-slate-500">
            Actual demand vs AI forecast prediction
          </p>
        </div>

        <div className="h-[420px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart data={forecastData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="actual"
                stroke="#10b981"
                strokeWidth={4}
                name="Actual Demand"
              />

              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#2563eb"
                strokeWidth={4}
                strokeDasharray="5 5"
                name="Forecast Demand"
              />

            </LineChart>
          </ResponsiveContainer>

        </div>
      </div>

      {/* REVENUE PROJECTION */}

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
        <div className="mb-5">
          <h3 className="font-semibold text-lg">
            Forecast Projection
          </h3>

          <p className="text-sm text-slate-500">
            Future demand trajectory and growth outlook
          </p>
        </div>

        <div className="h-[400px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart data={forecastData}>

              <defs>
                <linearGradient
                  id="forecastGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#2563eb"
                    stopOpacity={0.35}
                  />

                  <stop
                    offset="95%"
                    stopColor="#2563eb"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="forecast"
                stroke="#2563eb"
                strokeWidth={3}
                fill="url(#forecastGradient)"
              />

            </AreaChart>
          </ResponsiveContainer>

        </div>
      </div>

      {/* AI INSIGHT */}

      <div
        className="
          bg-gradient-to-r
          from-slate-950
          via-blue-950
          to-slate-950
          rounded-2xl
          p-6
          text-white
        "
      >
        <div className="flex items-center gap-3 mb-4">
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

            <p className="text-slate-300 mt-2">
              Demand is expected to increase by
              24.5% over the next quarter.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Inventory Impact
            </h4>

            <p className="text-slate-300 mt-2">
              Increase inventory allocation by
              18% to avoid stock shortages.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Continue automated model retraining
              and monitor seasonal demand spikes.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ForecastChart;