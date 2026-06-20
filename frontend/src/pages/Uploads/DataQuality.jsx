import React from "react";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  Brain,
  Activity,
  Sparkles,
} from "lucide-react";

const qualityMetrics = [
  {
    title: "Quality Score",
    value: "94%",
    color: "text-green-600",
    bg: "bg-green-50",
    icon: ShieldCheck,
  },
  {
    title: "Missing Values",
    value: "0.8%",
    color: "text-amber-600",
    bg: "bg-amber-50",
    icon: AlertTriangle,
  },
  {
    title: "Valid Records",
    value: "98.6%",
    color: "text-blue-600",
    bg: "bg-blue-50",
    icon: CheckCircle2,
  },
  {
    title: "Duplicate Rows",
    value: "1.2%",
    color: "text-purple-600",
    bg: "bg-purple-50",
    icon: Database,
  },
];

const validationChecks = [
  {
    name: "Schema Validation",
    status: "Passed",
  },
  {
    name: "Missing Value Detection",
    status: "Passed",
  },
  {
    name: "Duplicate Detection",
    status: "Warning",
  },
  {
    name: "Forecast Readiness",
    status: "Passed",
  },
  {
    name: "Data Consistency",
    status: "Passed",
  },
];

const DataQuality = () => {
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
          Data Quality Center
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Dataset validation, quality assessment and forecasting readiness
        </p>
      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-2 gap-4">

        {qualityMetrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                shadow-sm
                p-5
              "
            >
              <div
                className={`
                  h-12
                  w-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  ${metric.bg}
                `}
              >
                <Icon
                  size={24}
                  className={metric.color}
                />
              </div>

              <p className="text-sm text-slate-500 mt-4">
                {metric.title}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {metric.value}
              </h3>

            </div>
          );
        })}
      </div>

      {/* Quality Score */}

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
        <h3 className="font-semibold mb-5">
          Dataset Health Score
        </h3>

        <div className="space-y-5">

          <div>

            <div className="flex justify-between mb-2">
              <span>Data Completeness</span>
              <span className="font-semibold">
                96%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: "96%" }}
              />
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Data Accuracy</span>
              <span className="font-semibold">
                94%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-blue-500 rounded-full"
                style={{ width: "94%" }}
              />
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Forecast Readiness</span>
              <span className="font-semibold">
                92%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-purple-500 rounded-full"
                style={{ width: "92%" }}
              />
            </div>

          </div>

        </div>

      </div>

      {/* Validation Checks */}

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

          <h3 className="font-semibold">
            Validation Checks
          </h3>

        </div>

        <div className="p-5 space-y-4">

          {validationChecks.map((item) => (
            <div
              key={item.name}
              className="
                flex
                items-center
                justify-between
              "
            >

              <div className="flex items-center gap-3">

                <FileSpreadsheet
                  size={18}
                  className="text-blue-600"
                />

                <span>{item.name}</span>

              </div>

              <span
                className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  ${
                    item.status === "Passed"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }
                `}
              >
                {item.status}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* Quality Insights */}

      <div className="grid md:grid-cols-2 gap-4">

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

          <Activity
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Quality Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Continuous validation ensures uploaded
            datasets meet enterprise forecasting standards.
          </p>

        </div>

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

          <Brain
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            AI Validation Engine
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            AI-driven quality checks automatically
            identify anomalies and forecasting risks.
          </p>

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
            Data Quality Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Quality Assessment
            </h4>

            <p className="text-slate-300 mt-2">
              Uploaded datasets exceed enterprise
              quality thresholds for forecasting.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Validation Success
            </h4>

            <p className="text-slate-300 mt-2">
              AI validation detects issues before
              model training begins.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Remove duplicate records to further
              improve forecast accuracy.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DataQuality;