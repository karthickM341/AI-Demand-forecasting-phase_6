import React from "react";
import {
  History,
  Brain,
  CheckCircle2,
  TrendingUp,
  Clock,
  Database,
} from "lucide-react";

const historyData = [
  {
    id: 1,
    model: "Prophet Forecast Model",
    version: "v4.2.1",
    date: "2026-06-15",
    accuracy: "96.8%",
    status: "Completed",
  },
  {
    id: 2,
    model: "XGBoost Forecast Engine",
    version: "v3.8.0",
    date: "2026-06-10",
    accuracy: "95.4%",
    status: "Completed",
  },
  {
    id: 3,
    model: "LSTM Demand Predictor",
    version: "v2.7.5",
    date: "2026-06-05",
    accuracy: "94.2%",
    status: "Completed",
  },
  {
    id: 4,
    model: "Inventory Forecast AI",
    version: "v5.1.0",
    date: "2026-06-01",
    accuracy: "97.1%",
    status: "Completed",
  },
];

const HistoryPage = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

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
        <div className="flex items-center gap-3">

          <History
            size={26}
            className="text-blue-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Forecast History
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Historical forecasting executions and model tracking
            </p>
          </div>

        </div>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Brain
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Total Forecast Runs
          </p>

          <h3 className="text-3xl font-bold mt-2">
            1,248
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <TrendingUp
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Avg Accuracy
          </p>

          <h3 className="text-3xl font-bold mt-2">
            96.2%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Database
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Model Versions
          </p>

          <h3 className="text-3xl font-bold mt-2">
            18
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Clock
            size={24}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Last Run
          </p>

          <h3 className="text-3xl font-bold mt-2">
            Today
          </h3>
        </div>

      </div>

      {/* History Table */}

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
        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold text-lg">
            Forecast Execution History
          </h3>

          <p className="text-sm text-slate-500">
            Historical forecasting records and model performance
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left">
                  Model
                </th>

                <th className="px-6 py-4 text-left">
                  Version
                </th>

                <th className="px-6 py-4 text-left">
                  Run Date
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

              {historyData.map((item) => (
                <tr
                  key={item.id}
                  className="
                    border-t
                    border-slate-100
                    hover:bg-slate-50
                  "
                >
                  <td className="px-6 py-4 font-medium">
                    {item.model}
                  </td>

                  <td className="px-6 py-4">
                    {item.version}
                  </td>

                  <td className="px-6 py-4">
                    {item.date}
                  </td>

                  <td className="px-6 py-4 font-semibold text-green-600">
                    {item.accuracy}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        bg-green-100
                        text-green-700
                      "
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

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

          <CheckCircle2 size={22} />

          <h3 className="text-xl font-bold">
            Historical Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Model Evolution
            </h4>

            <p className="text-slate-300 mt-2">
              Forecast accuracy has improved by
              8.4% during the last 6 months.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Performance Trend
            </h4>

            <p className="text-slate-300 mt-2">
              Current forecasting models exceed
              enterprise performance targets.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Governance Status
            </h4>

            <p className="text-slate-300 mt-2">
              All forecast executions are audited
              and fully traceable.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default HistoryPage;