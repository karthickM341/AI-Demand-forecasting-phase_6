import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  Brain,
  TrendingUp,
  Activity,
  Target,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const forecastData = [
  { month: "Jan", actual: 120, forecast: 125 },
  { month: "Feb", actual: 135, forecast: 140 },
  { month: "Mar", actual: 152, forecast: 158 },
  { month: "Apr", actual: 168, forecast: 172 },
  { month: "May", actual: 185, forecast: 190 },
  { month: "Jun", actual: 210, forecast: 218 },
  { month: "Jul", actual: 238, forecast: 245 },
  { month: "Aug", actual: 260, forecast: 270 },
  { month: "Sep", actual: 285, forecast: 295 },
  { month: "Oct", actual: 315, forecast: 328 },
  { month: "Nov", actual: 345, forecast: 360 },
  { month: "Dec", actual: 378, forecast: 395 },
];

const ForecastChart = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Forecast Analytics
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              AI-driven forecasting trends and demand projections
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 text-green-700 font-semibold">
            <ArrowUpRight size={16} />
            +24.5%
          </div>

        </div>

      </div>

      {/* KPI ROW */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Brain className="text-blue-600" size={24} />

          <p className="text-sm text-slate-500 mt-3">
            Forecast Accuracy
          </p>

          <h3 className="text-3xl font-bold mt-2">
            96.8%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Target className="text-green-600" size={24} />

          <p className="text-sm text-slate-500 mt-3">
            Forecast Horizon
          </p>

          <h3 className="text-3xl font-bold mt-2">
            90 Days
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <TrendingUp className="text-purple-600" size={24} />

          <p className="text-sm text-slate-500 mt-3">
            Demand Growth
          </p>

          <h3 className="text-3xl font-bold mt-2">
            +24.5%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Activity className="text-cyan-600" size={24} />

          <p className="text-sm text-slate-500 mt-3">
            AI Confidence
          </p>

          <h3 className="text-3xl font-bold mt-2">
            98.1%
          </h3>
        </div>

      </div>

      {/* DEMAND FORECAST TREND */}

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

        <div className="mb-5">
          <h3 className="font-semibold text-lg">
            Demand Forecast Trend
          </h3>

          <p className="text-sm text-slate-500">
            Actual demand versus AI forecast prediction
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

      {/* FORECAST PROJECTION */}

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

        <div className="mb-5">
          <h3 className="font-semibold text-lg">
            Forecast Projection
          </h3>

          <p className="text-sm text-slate-500">
            Predicted future demand trajectory
          </p>
        </div>

        <div className="h-[380px]">

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

      {/* AI FORECAST INTELLIGENCE */}

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

            <p className="text-slate-300 mt-2">
              Forecasted demand is expected to grow
              steadily over the next quarter.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Inventory Planning
            </h4>

            <p className="text-slate-300 mt-2">
              Recommended inventory increase of
              18% to support projected demand.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Model Insight
            </h4>

            <p className="text-slate-300 mt-2">
              Forecast confidence remains above
              enterprise performance targets.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ForecastChart;