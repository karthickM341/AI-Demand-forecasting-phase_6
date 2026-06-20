import React from "react";
import {
  Server,
  AlertTriangle,
  ShieldAlert,
  CheckCircle2,
  Activity,
  Cpu,
  Database,
  Wifi,
  Clock,
  Sparkles,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    title: "Forecast Engine Latency Increase",
    description:
      "Prediction response time exceeded recommended threshold.",
    severity: "High",
    source: "Forecast Engine",
    time: "5 mins ago",
    icon: Cpu,
  },
  {
    id: 2,
    title: "Database Replication Delay",
    description:
      "Database synchronization delay detected.",
    severity: "Medium",
    source: "Database Cluster",
    time: "20 mins ago",
    icon: Database,
  },
  {
    id: 3,
    title: "Security Policy Validation Passed",
    description:
      "Governance security scan completed successfully.",
    severity: "Success",
    source: "Security Engine",
    time: "1 hour ago",
    icon: ShieldAlert,
  },
  {
    id: 4,
    title: "API Gateway Connectivity Stable",
    description:
      "All enterprise services operating normally.",
    severity: "Info",
    source: "Infrastructure",
    time: "2 hours ago",
    icon: Wifi,
  },
];

const getSeverityStyle = (severity) => {
  switch (severity) {
    case "High":
      return "bg-red-100 text-red-700";

    case "Medium":
      return "bg-orange-100 text-orange-700";

    case "Success":
      return "bg-green-100 text-green-700";

    default:
      return "bg-blue-100 text-blue-700";
  }
};

const SystemAlerts = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <Server
            size={28}
            className="text-blue-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              System Alerts
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Enterprise infrastructure monitoring and operational alerts
            </p>
          </div>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <AlertTriangle
            size={24}
            className="text-red-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Active Alerts
          </p>

          <h3 className="text-3xl font-bold mt-2">
            12
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Activity
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            System Health
          </p>

          <h3 className="text-3xl font-bold mt-2">
            99.4%
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Resolved Today
          </p>

          <h3 className="text-3xl font-bold mt-2">
            28
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Cpu
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Services Running
          </p>

          <h3 className="text-3xl font-bold mt-2">
            48
          </h3>

        </div>

      </div>

      {/* HEALTH OVERVIEW */}

      <div className="grid grid-cols-12 gap-4">

        <div className="col-span-12 xl:col-span-8">

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

            <h3 className="text-lg font-semibold mb-6">
              Infrastructure Health
            </h3>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span>API Gateway</span>
                  <span>99%</span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 bg-green-500 rounded-full"
                    style={{ width: "99%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Forecast Engine</span>
                  <span>96%</span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 bg-blue-500 rounded-full"
                    style={{ width: "96%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Database Cluster</span>
                  <span>98%</span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 bg-purple-500 rounded-full"
                    style={{ width: "98%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Security Services</span>
                  <span>100%</span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 bg-cyan-500 rounded-full"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className="col-span-12 xl:col-span-4">

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full">

            <h3 className="font-semibold mb-5">
              System Status
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Platform Status</span>
                <span className="text-green-600 font-semibold">
                  Operational
                </span>
              </div>

              <div className="flex justify-between">
                <span>Security Status</span>
                <span className="text-blue-600 font-semibold">
                  Protected
                </span>
              </div>

              <div className="flex justify-between">
                <span>Forecast Engine</span>
                <span className="text-purple-600 font-semibold">
                  Healthy
                </span>
              </div>

              <div className="flex justify-between">
                <span>Database</span>
                <span className="text-cyan-600 font-semibold">
                  Connected
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ALERT FEED */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="text-lg font-semibold">
            Recent System Alerts
          </h3>

          <p className="text-sm text-slate-500">
            Infrastructure and platform monitoring events
          </p>

        </div>

        <div className="divide-y divide-slate-100">

          {alerts.map((alert) => {
            const Icon = alert.icon;

            return (
              <div
                key={alert.id}
                className="p-5 hover:bg-slate-50 transition"
              >
                <div className="flex items-start gap-4">

                  <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center">

                    <Icon
                      size={22}
                      className="text-slate-700"
                    />

                  </div>

                  <div className="flex-1">

                    <div className="flex items-center justify-between">

                      <h4 className="font-semibold text-slate-900">
                        {alert.title}
                      </h4>

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

                    <p className="text-slate-500 mt-2">
                      {alert.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-400">

                      <span>{alert.source}</span>

                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {alert.time}
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

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
            System Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Platform Stability
            </h4>

            <p className="text-slate-300 mt-2">
              Enterprise infrastructure remains stable with
              99.4% uptime performance.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Security Monitoring
            </h4>

            <p className="text-slate-300 mt-2">
              Security services continue to operate within
              compliance standards.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Forecast Services
            </h4>

            <p className="text-slate-300 mt-2">
              AI forecasting infrastructure is performing
              within enterprise SLA targets.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SystemAlerts;