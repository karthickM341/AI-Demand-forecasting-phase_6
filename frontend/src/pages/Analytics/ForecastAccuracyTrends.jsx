import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  Target,
  Brain,
  TrendingUp,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const accuracyData = [
  { month: "Jan", prophet: 88, lstm: 85, xgboost: 84 },
  { month: "Feb", prophet: 89, lstm: 86, xgboost: 85 },
  { month: "Mar", prophet: 90, lstm: 88, xgboost: 86 },
  { month: "Apr", prophet: 91, lstm: 89, xgboost: 87 },
  { month: "May", prophet: 92, lstm: 90, xgboost: 89 },
  { month: "Jun", prophet: 94, lstm: 92, xgboost: 90 },
  { month: "Jul", prophet: 95, lstm: 93, xgboost: 91 },
  { month: "Aug", prophet: 96, lstm: 94, xgboost: 92 },
  { month: "Sep", prophet: 96.8, lstm: 95, xgboost: 93 },
];

const modelPerformance = [
  {
    model: "Prophet",
    accuracy: "96.8%",
    status: "Best Performing",
  },
  {
    model: "LSTM",
    accuracy: "95.0%",
    status: "Stable",
  },
  {
    model: "XGBoost",
    accuracy: "93.0%",
    status: "Good",
  },
];

const ForecastAccuracyTrends = () => {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Forecast Accuracy Trends
          </h2>

          <p className="text-sm text-slate-500">
            Model performance and forecasting accuracy analysis
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
          <CheckCircle2 size={18} />
          Accuracy Optimized
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <Target
            className="text-blue-600"
            size={26}
          />

          <p className="text-slate-500 mt-4 text-sm">
            Current Accuracy
          </p>

          <h3 className="text-3xl font-bold mt-2">
            96.8%
          </h3>
        </div>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <TrendingUp
            className="text-green-600"
            size={26}
          />

          <p className="text-slate-500 mt-4 text-sm">
            Improvement
          </p>

          <h3 className="text-3xl font-bold mt-2">
            +8.2%
          </h3>
        </div>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <Brain
            className="text-purple-600"
            size={26}
          />

          <p className="text-slate-500 mt-4 text-sm">
            Active Models
          </p>

          <h3 className="text-3xl font-bold mt-2">
            12
          </h3>
        </div>

      </div>

      {/* Accuracy Trend Chart */}
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
            Model Accuracy Trend
          </h3>

          <p className="text-sm text-slate-500">
            Forecast accuracy comparison across models
          </p>
        </div>

        <div className="h-[420px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis domain={[80, 100]} />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="prophet"
                stroke="#2563eb"
                strokeWidth={4}
                name="Prophet"
              />

              <Line
                type="monotone"
                dataKey="lstm"
                stroke="#10b981"
                strokeWidth={4}
                name="LSTM"
              />

              <Line
                type="monotone"
                dataKey="xgboost"
                stroke="#8b5cf6"
                strokeWidth={4}
                name="XGBoost"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Model Comparison */}
      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          overflow-hidden
        "
      >
        <div className="p-5 border-b border-slate-200">
          <h3 className="font-semibold text-lg">
            Model Performance Comparison
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left">
                  Model
                </th>

                <th className="px-6 py-4 text-left">
                  Accuracy
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {modelPerformance.map((model) => (
                <tr
                  key={model.model}
                  className="border-t border-slate-100"
                >
                  <td className="px-6 py-4 font-medium">
                    {model.model}
                  </td>

                  <td className="px-6 py-4">
                    {model.accuracy}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-green-100
                        text-green-700
                        text-xs
                        font-semibold
                      "
                    >
                      {model.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Insight */}
      <div
        className="
          rounded-2xl
          bg-gradient-to-r
          from-slate-900
          via-blue-900
          to-slate-900
          p-8
          text-white
        "
      >
        <div className="flex items-center gap-3 mb-4">
          <Sparkles size={22} />

          <h3 className="text-2xl font-bold">
            AI Forecast Intelligence
          </h3>
        </div>

        <p className="text-slate-300">
          Forecast accuracy improved by 8.2%
          through automated retraining and
          feature engineering. Prophet remains
          the highest-performing model with
          enterprise-grade forecasting reliability.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Best Model
            </h4>

            <p className="mt-2 text-slate-300">
              Prophet consistently achieves
              accuracy above 96%.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Performance Trend
            </h4>

            <p className="mt-2 text-slate-300">
              Model accuracy is improving
              month-over-month.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="mt-2 text-slate-300">
              Continue automated retraining
              every 30 days.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ForecastAccuracyTrends;