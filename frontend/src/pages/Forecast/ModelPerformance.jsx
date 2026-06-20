import React from "react";
import {
  Brain,
  TrendingUp,
  Activity,
  CheckCircle2,
  Cpu,
  Database,
  Sparkles,
} from "lucide-react";

const models = [
  {
    name: "Prophet Forecast Model",
    accuracy: "96.8%",
    confidence: "98.1%",
    status: "Healthy",
    color: "green",
  },
  {
    name: "XGBoost Demand Engine",
    accuracy: "95.4%",
    confidence: "96.2%",
    status: "Healthy",
    color: "blue",
  },
  {
    name: "LSTM Forecast Network",
    accuracy: "94.2%",
    confidence: "95.0%",
    status: "Monitoring",
    color: "amber",
  },
  {
    name: "Inventory AI Predictor",
    accuracy: "97.1%",
    confidence: "98.8%",
    status: "Healthy",
    color: "purple",
  },
];

const getStatusColor = (status) => {
  if (status === "Healthy") {
    return "bg-green-100 text-green-700";
  }

  return "bg-amber-100 text-amber-700";
};

const ModelPerformance = () => {
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
        <h2 className="text-xl font-bold text-slate-900">
          Model Performance
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          AI forecasting engine monitoring and performance tracking
        </p>
      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Brain
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Avg Accuracy
          </p>

          <h3 className="text-3xl font-bold mt-2">
            96.8%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Activity
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            AI Confidence
          </p>

          <h3 className="text-3xl font-bold mt-2">
            98.1%
          </h3>
        </div>

      </div>

      {/* Model List */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
        "
      >
        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold text-lg">
            Active Forecast Models
          </h3>

        </div>

        <div className="divide-y divide-slate-100">

          {models.map((model) => (
            <div
              key={model.name}
              className="p-5"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {model.name}
                  </h4>

                  <p className="text-sm text-slate-500 mt-1">
                    Forecast Accuracy:
                    {" "}
                    {model.accuracy}
                  </p>

                  <p className="text-sm text-slate-500">
                    Confidence:
                    {" "}
                    {model.confidence}
                  </p>
                </div>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    ${getStatusColor(model.status)}
                  `}
                >
                  {model.status}
                </span>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Health Metrics */}

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
          Model Health Metrics
        </h3>

        <div className="space-y-5">

          <div>

            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-500">
                Forecast Accuracy
              </span>

              <span className="font-semibold">
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
                Model Reliability
              </span>

              <span className="font-semibold">
                98.1%
              </span>
            </div>

            <div className="w-full h-2 bg-slate-100 rounded-full">
              <div
                className="h-2 rounded-full bg-green-500"
                style={{ width: "98.1%" }}
              />
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-500">
                Governance Compliance
              </span>

              <span className="font-semibold">
                99.2%
              </span>
            </div>

            <div className="w-full h-2 bg-slate-100 rounded-full">
              <div
                className="h-2 rounded-full bg-purple-500"
                style={{ width: "99.2%" }}
              />
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
            AI Model Intelligence
          </h3>

        </div>

        <div className="grid gap-5">

          <div className="flex gap-3">
            <Cpu className="text-cyan-400" />

            <div>
              <h4 className="font-semibold text-cyan-300">
                Forecast Engine Status
              </h4>

              <p className="text-slate-300 mt-1">
                All active forecasting engines
                are operating within enterprise
                performance thresholds.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Database className="text-green-400" />

            <div>
              <h4 className="font-semibold text-green-300">
                Retraining Recommendation
              </h4>

              <p className="text-slate-300 mt-1">
                Next automated retraining cycle
                scheduled within 48 hours.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 className="text-yellow-400" />

            <div>
              <h4 className="font-semibold text-yellow-300">
                Governance Status
              </h4>

              <p className="text-slate-300 mt-1">
                Forecast models remain fully
                compliant with enterprise AI
                governance policies.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ModelPerformance;