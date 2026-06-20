import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  DollarSign,
  TrendingUp,
  Activity,
  BarChart3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 145000 },
  { month: "Mar", revenue: 165000 },
  { month: "Apr", revenue: 182000 },
  { month: "May", revenue: 210000 },
  { month: "Jun", revenue: 235000 },
  { month: "Jul", revenue: 260000 },
  { month: "Aug", revenue: 285000 },
  { month: "Sep", revenue: 310000 },
  { month: "Oct", revenue: 345000 },
  { month: "Nov", revenue: 385000 },
  { month: "Dec", revenue: 425000 },
];

const RevenueTrendChart = () => {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Revenue Trend Analysis
          </h2>

          <p className="text-sm text-slate-500">
            Revenue forecasting and growth performance overview
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
          <ArrowUpRight size={18} />
          +24.5% Growth
        </div>

      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <DollarSign
            size={26}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-4">
            Total Revenue
          </p>

          <h3 className="text-3xl font-bold mt-2">
            $12.8M
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <TrendingUp
            size={26}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-4">
            Growth Rate
          </p>

          <h3 className="text-3xl font-bold mt-2">
            +24.5%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <BarChart3
            size={26}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-4">
            Forecast Revenue
          </p>

          <h3 className="text-3xl font-bold mt-2">
            $15.4M
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Activity
            size={26}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-4">
            Confidence Score
          </p>

          <h3 className="text-3xl font-bold mt-2">
            98.1%
          </h3>
        </div>

      </div>

      {/* Revenue Chart */}
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

        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Monthly Revenue Trend
          </h3>

          <p className="text-sm text-slate-500">
            Historical and forecasted revenue performance
          </p>
        </div>

        <div className="h-[350px] w-full">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart data={revenueData}>

              <defs>
                <linearGradient
                  id="revenueGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#2563eb"
                    stopOpacity={0.4}
                  />

                  <stop
                    offset="95%"
                    stopColor="#2563eb"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip
                formatter={(value) =>
                  `$${value.toLocaleString()}`
                }
              />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#2563eb"
                strokeWidth={4}
                fill="url(#revenueGradient)"
              />

            </AreaChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* Revenue Insights */}
      <div className="grid md:grid-cols-3 gap-4">

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
          <h4 className="font-semibold mb-3">
            Best Performing Quarter
          </h4>

          <p className="text-3xl font-bold text-green-600">
            Q4
          </p>

          <p className="text-sm text-slate-500 mt-2">
            Highest revenue generation period
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
          <h4 className="font-semibold mb-3">
            Average Monthly Revenue
          </h4>

          <p className="text-3xl font-bold text-blue-600">
            $286K
          </p>

          <p className="text-sm text-slate-500 mt-2">
            Monthly revenue average
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
          <h4 className="font-semibold mb-3">
            Forecast Growth
          </h4>

          <p className="text-3xl font-bold text-purple-600">
            +18%
          </p>

          <p className="text-sm text-slate-500 mt-2">
            Expected next-quarter increase
          </p>
        </div>

      </div>

      {/* AI Intelligence */}
      <div
        className="
          rounded-2xl
          bg-gradient-to-r
          from-slate-900
          via-green-900
          to-slate-900
          p-8
          text-white
        "
      >

        <div className="flex items-center gap-3 mb-4">
          <Sparkles size={22} />

          <h3 className="text-2xl font-bold">
            AI Revenue Intelligence
          </h3>
        </div>

        <p className="text-slate-300">
          Revenue forecasting models predict
          sustained business growth with strong
          quarterly performance. Current demand
          patterns indicate significant revenue
          expansion opportunities across major
          business segments.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Revenue Opportunity
            </h4>

            <p className="mt-2 text-slate-300">
              High-growth products expected to
              contribute over 35% of future revenue.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Growth Forecast
            </h4>

            <p className="mt-2 text-slate-300">
              Revenue projected to exceed
              enterprise targets next quarter.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="mt-2 text-slate-300">
              Expand inventory and production
              planning to support growth.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default RevenueTrendChart;