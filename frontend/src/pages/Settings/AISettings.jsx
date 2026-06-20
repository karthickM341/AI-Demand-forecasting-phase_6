import React, { useState } from "react";
import {
  Brain,
  Cpu,
  Target,
  Activity,
  RefreshCw,
  AlertTriangle,
  Sparkles,
  Save,
} from "lucide-react";

const AISettings = () => {
  const [settings, setSettings] = useState({
    forecastModel: "Prophet",
    confidenceThreshold: 95,
    retrainingEnabled: true,
    anomalyDetection: true,
    autoForecast: true,
    demandPrediction: true,
  });

  const toggleSetting = (field) => {
    setSettings({
      ...settings,
      [field]: !settings[field],
    });
  };

  const Toggle = ({ enabled, onClick }) => (
    <button
      onClick={onClick}
      className={`
        relative
        h-6
        w-12
        rounded-full
        transition-all
        ${enabled ? "bg-blue-600" : "bg-slate-300"}
      `}
    >
      <span
        className={`
          absolute
          top-1
          h-4
          w-4
          rounded-full
          bg-white
          transition-all
          ${enabled ? "left-7" : "left-1"}
        `}
      />
    </button>
  );

  return (
    <div className="space-y-4">

      {/* HEADER */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        <div className="flex items-center gap-3">

          <Brain
            size={24}
            className="text-blue-600"
          />

          <div>

            <h2 className="text-lg font-bold text-slate-900">
              AI Settings
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Configure forecasting intelligence and machine learning controls
            </p>

          </div>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Target
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            AI Accuracy
          </p>

          <h3 className="text-3xl font-bold mt-2">
            96.8%
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Cpu
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Models Running
          </p>

          <h3 className="text-3xl font-bold mt-2">
            12
          </h3>

        </div>

      </div>

      {/* MODEL SETTINGS */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Forecast Configuration
          </h3>

        </div>

        <div className="p-5 space-y-5">

          <div>

            <label className="block text-sm font-medium mb-2">
              Forecast Model
            </label>

            <select
              value={settings.forecastModel}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  forecastModel: e.target.value,
                })
              }
              className="
                w-full
                h-11
                px-4
                rounded-xl
                border
                border-slate-300
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option>Prophet</option>
              <option>XGBoost</option>
              <option>LSTM</option>
              <option>Random Forest</option>
            </select>

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Confidence Threshold
            </label>

            <input
              type="range"
              min="70"
              max="100"
              value={settings.confidenceThreshold}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  confidenceThreshold: e.target.value,
                })
              }
              className="w-full"
            />

            <div className="text-sm text-slate-500 mt-2">
              {settings.confidenceThreshold}% Confidence
            </div>

          </div>

        </div>

      </div>

      {/* AI FEATURES */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            AI Features
          </h3>

        </div>

        <div className="p-5 space-y-5">

          <div className="flex items-center justify-between">

            <div>
              <h4 className="font-medium">
                Auto Forecast Generation
              </h4>

              <p className="text-sm text-slate-500">
                Generate forecasts automatically
              </p>
            </div>

            <Toggle
              enabled={settings.autoForecast}
              onClick={() =>
                toggleSetting("autoForecast")
              }
            />

          </div>

          <div className="flex items-center justify-between">

            <div>
              <h4 className="font-medium">
                Anomaly Detection
              </h4>

              <p className="text-sm text-slate-500">
                Detect unusual demand patterns
              </p>
            </div>

            <Toggle
              enabled={settings.anomalyDetection}
              onClick={() =>
                toggleSetting("anomalyDetection")
              }
            />

          </div>

          <div className="flex items-center justify-between">

            <div>
              <h4 className="font-medium">
                Demand Prediction
              </h4>

              <p className="text-sm text-slate-500">
                Enable predictive demand intelligence
              </p>
            </div>

            <Toggle
              enabled={settings.demandPrediction}
              onClick={() =>
                toggleSetting("demandPrediction")
              }
            />

          </div>

          <div className="flex items-center justify-between">

            <div>
              <h4 className="font-medium">
                Automatic Retraining
              </h4>

              <p className="text-sm text-slate-500">
                Continuously improve AI models
              </p>
            </div>

            <Toggle
              enabled={settings.retrainingEnabled}
              onClick={() =>
                toggleSetting("retrainingEnabled")
              }
            />

          </div>

        </div>

      </div>

      {/* AI STATUS */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Activity
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Model Health
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            All forecasting models are operating normally.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <RefreshCw
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Retraining Status
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Last retraining completed successfully.
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
            No active anomalies detected.
          </p>

        </div>

      </div>

      {/* SAVE */}

      <div className="flex justify-end">

        <button
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-blue-600
            text-white
            hover:bg-blue-700
          "
        >
          <Save size={18} />
          Save AI Settings
        </button>

      </div>

      {/* AI INTELLIGENCE */}

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
            AI Intelligence Center
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Forecast Optimization
            </h4>

            <p className="text-slate-300 mt-2">
              AI models continue to improve demand prediction accuracy.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Automated Learning
            </h4>

            <p className="text-slate-300 mt-2">
              Continuous retraining adapts to changing market conditions.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              AI Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Enable anomaly detection for proactive demand risk management.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AISettings;