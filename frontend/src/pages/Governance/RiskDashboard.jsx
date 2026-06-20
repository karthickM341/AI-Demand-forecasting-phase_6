import React from "react";
import {
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
  Brain,
  Database,
  Activity,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const risks = [
  {
    id: 1,
    title: "Forecast Accuracy Drift",
    category: "AI Model Risk",
    severity: "High",
    impact: "Forecast accuracy dropped below threshold.",
  },
  {
    id: 2,
    title: "Data Quality Issue",
    category: "Data Governance",
    severity: "Medium",
    impact: "Missing records detected in uploaded dataset.",
  },
  {
    id: 3,
    title: "Compliance Review Pending",
    category: "Governance",
    severity: "Low",
    impact: "Policy validation awaiting approval.",
  },
  {
    id: 4,
    title: "Demand Spike Anomaly",
    category: "Forecast Risk",
    severity: "Critical",
    impact: "Unexpected demand surge identified.",
  },
];

const getSeverityColor = (severity) => {
  switch (severity) {
    case "Critical":
      return "bg-red-100 text-red-700";

    case "High":
      return "bg-orange-100 text-orange-700";

    case "Medium":
      return "bg-blue-100 text-blue-700";

    default:
      return "bg-green-100 text-green-700";
  }
};

const RiskDashboard = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <ShieldAlert
            size={28}
            className="text-red-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Enterprise Risk Dashboard
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              AI governance, forecasting and compliance risk monitoring
            </p>
          </div>

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <AlertTriangle
            size={24}
            className="text-red-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Active Risks
          </p>

          <h3 className="text-3xl font-bold mt-2">
            24
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <ShieldCheck
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Mitigated Risks
          </p>

          <h3 className="text-3xl font-bold mt-2">
            148
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Brain
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            AI Risk Score
          </p>

          <h3 className="text-3xl font-bold mt-2">
            8.4
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Activity
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Monitoring Coverage
          </p>

          <h3 className="text-3xl font-bold mt-2">
            99.1%
          </h3>
        </div>

      </div>

      {/* Risk Overview */}

      <div className="grid grid-cols-12 gap-4">

        {/* Risk Distribution */}

        <div className="col-span-12 xl:col-span-8">

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

            <h3 className="text-lg font-semibold mb-6">
              Risk Distribution
            </h3>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span>Critical Risk</span>
                  <span>18%</span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 bg-red-500 rounded-full"
                    style={{ width: "18%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>High Risk</span>
                  <span>34%</span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 bg-orange-500 rounded-full"
                    style={{ width: "34%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Medium Risk</span>
                  <span>28%</span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 bg-blue-500 rounded-full"
                    style={{ width: "28%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Low Risk</span>
                  <span>20%</span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 bg-green-500 rounded-full"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Risk Summary */}

        <div className="col-span-12 xl:col-span-4">

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full">

            <h3 className="font-semibold mb-5">
              Risk Summary
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Overall Risk</span>
                <span className="text-orange-600 font-semibold">
                  Moderate
                </span>
              </div>

              <div className="flex justify-between">
                <span>Compliance Risk</span>
                <span className="text-green-600 font-semibold">
                  Low
                </span>
              </div>

              <div className="flex justify-between">
                <span>Model Risk</span>
                <span className="text-red-600 font-semibold">
                  High
                </span>
              </div>

              <div className="flex justify-between">
                <span>Data Risk</span>
                <span className="text-blue-600 font-semibold">
                  Medium
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Risk Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="text-lg font-semibold">
            Active Risk Register
          </h3>

          <p className="text-sm text-slate-500">
            Enterprise forecasting and governance risks
          </p>

        </div>

        <div className="divide-y divide-slate-100">

          {risks.map((risk) => (
            <div
              key={risk.id}
              className="p-5 hover:bg-slate-50 transition"
            >
              <div className="flex items-start justify-between gap-4">

                <div>

                  <h4 className="font-semibold text-slate-900">
                    {risk.title}
                  </h4>

                  <p className="text-sm text-slate-500 mt-1">
                    {risk.category}
                  </p>

                  <p className="text-sm text-slate-600 mt-3">
                    {risk.impact}
                  </p>

                </div>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    ${getSeverityColor(risk.severity)}
                  `}
                >
                  {risk.severity}
                </span>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Executive Intelligence */}

      <div
        className="
          rounded-2xl
          bg-gradient-to-r
          from-slate-950
          via-red-950
          to-slate-950
          p-6
          text-white
        "
      >

        <div className="flex items-center gap-3 mb-5">
          <Sparkles size={22} />

          <h3 className="text-xl font-bold">
            Risk Intelligence
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-red-300 font-semibold">
              Critical Risk Focus
            </h4>

            <p className="text-slate-300 mt-2">
              AI model drift remains the highest priority risk area.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Compliance Health
            </h4>

            <p className="text-slate-300 mt-2">
              Governance controls remain above enterprise targets.
            </p>
          </div>

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Mitigation Progress
            </h4>

            <p className="text-slate-300 mt-2">
              86% of identified risks have active mitigation plans.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default RiskDashboard;