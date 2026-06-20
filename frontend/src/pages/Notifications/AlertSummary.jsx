import React from "react";
import {
  Bell,
  AlertTriangle,
  ShieldAlert,
  CheckCircle2,
  Activity,
  TrendingUp,
  Clock,
  Sparkles,
} from "lucide-react";

const recentAlerts = [
  {
    id: 1,
    title: "Demand Spike Detected",
    severity: "Critical",
    source: "Forecast Engine",
    time: "5 min ago",
  },
  {
    id: 2,
    title: "Inventory Threshold Breached",
    severity: "High",
    source: "Inventory Monitor",
    time: "18 min ago",
  },
  {
    id: 3,
    title: "Model Retraining Completed",
    severity: "Info",
    source: "AI Engine",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Governance Validation Passed",
    severity: "Success",
    source: "Compliance Engine",
    time: "2 hours ago",
  },
];

const getSeverityStyle = (severity) => {
  switch (severity) {
    case "Critical":
      return "bg-red-100 text-red-700";

    case "High":
      return "bg-orange-100 text-orange-700";

    case "Success":
      return "bg-green-100 text-green-700";

    default:
      return "bg-blue-100 text-blue-700";
  }
};

const AlertSummary = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <Bell
            size={28}
            className="text-blue-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Alert Summary
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Enterprise alert monitoring and incident overview
            </p>
          </div>

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Bell
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Total Alerts
          </p>

          <h3 className="text-3xl font-bold mt-2">
            128
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <ShieldAlert
            size={24}
            className="text-red-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Critical Alerts
          </p>

          <h3 className="text-3xl font-bold mt-2">
            8
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <AlertTriangle
            size={24}
            className="text-orange-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            High Priority
          </p>

          <h3 className="text-3xl font-bold mt-2">
            14
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Resolved Alerts
          </p>

          <h3 className="text-3xl font-bold mt-2">
            94
          </h3>

        </div>

      </div>

      {/* Alert Health */}

      <div className="grid grid-cols-12 gap-4">

        <div className="col-span-12 xl:col-span-8">

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

            <h3 className="text-lg font-semibold mb-6">
              Alert Distribution
            </h3>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span>Critical Alerts</span>
                  <span>8%</span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 bg-red-500 rounded-full"
                    style={{ width: "8%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>High Priority</span>
                  <span>18%</span>
                </div>

                <div className="w-full h-3 bg-orange-500 rounded-full"
                     style={{ width: "18%" }}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Informational</span>
                  <span>44%</span>
                </div>

                <div className="w-full h-3 bg-blue-500 rounded-full"
                     style={{ width: "44%" }}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Resolved</span>
                  <span>30%</span>
                </div>

                <div className="w-full h-3 bg-green-500 rounded-full"
                     style={{ width: "30%" }}
                />
              </div>

            </div>

          </div>

        </div>

        <div className="col-span-12 xl:col-span-4">

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full">

            <h3 className="font-semibold mb-5">
              Alert Health Status
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>System Health</span>
                <span className="text-green-600 font-semibold">
                  Excellent
                </span>
              </div>

              <div className="flex justify-between">
                <span>Forecast Engine</span>
                <span className="text-blue-600 font-semibold">
                  Stable
                </span>
              </div>

              <div className="flex justify-between">
                <span>Governance</span>
                <span className="text-purple-600 font-semibold">
                  Healthy
                </span>
              </div>

              <div className="flex justify-between">
                <span>Risk Level</span>
                <span className="text-orange-600 font-semibold">
                  Moderate
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Recent Alerts */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="text-lg font-semibold">
            Recent Alerts
          </h3>

          <p className="text-sm text-slate-500">
            Latest enterprise incidents and notifications
          </p>

        </div>

        <div className="divide-y divide-slate-100">

          {recentAlerts.map((alert) => (
            <div
              key={alert.id}
              className="p-5 hover:bg-slate-50 transition"
            >
              <div className="flex items-center justify-between">

                <div>

                  <h4 className="font-semibold text-slate-900">
                    {alert.title}
                  </h4>

                  <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">

                    <span>{alert.source}</span>

                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {alert.time}
                    </span>

                  </div>

                </div>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    ${getSeverityStyle(alert.severity)}
                  `}
                >
                  {alert.severity}
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
          via-blue-950
          to-slate-950
          p-6
          text-white
        "
      >

        <div className="flex items-center gap-3 mb-5">

          <Sparkles size={22} />

          <h3 className="text-xl font-bold">
            Alert Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <TrendingUp className="text-cyan-400 mb-3" />

            <h4 className="text-cyan-300 font-semibold">
              Forecast Monitoring
            </h4>

            <p className="text-slate-300 mt-2">
              Demand forecasting alerts increased by 12%
              due to seasonal demand changes.
            </p>
          </div>

          <div>
            <Activity className="text-green-400 mb-3" />

            <h4 className="text-green-300 font-semibold">
              System Stability
            </h4>

            <p className="text-slate-300 mt-2">
              Platform health remains above enterprise
              operational targets.
            </p>
          </div>

          <div>
            <ShieldAlert className="text-yellow-400 mb-3" />

            <h4 className="text-yellow-300 font-semibold">
              Risk Intelligence
            </h4>

            <p className="text-slate-300 mt-2">
              No major governance or compliance risks
              detected during the last cycle.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AlertSummary;