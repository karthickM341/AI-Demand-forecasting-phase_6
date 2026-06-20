import React, { useState } from "react";
import {
  Server,
  Database,
  Cpu,
  HardDrive,
  Globe,
  Shield,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Save,
  Sparkles,
  RefreshCw,
} from "lucide-react";

const SystemSettings = () => {
  const [systemConfig, setSystemConfig] = useState({
    autoBackup: true,
    maintenanceMode: false,
    auditLogging: true,
    apiMonitoring: true,
    realtimeAnalytics: true,
  });

  const toggleSetting = (field) => {
    setSystemConfig({
      ...systemConfig,
      [field]: !systemConfig[field],
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

          <Server
            size={24}
            className="text-blue-600"
          />

          <div>

            <h2 className="text-lg font-bold text-slate-900">
              System Settings
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Enterprise platform configuration and infrastructure management
            </p>

          </div>

        </div>

      </div>

      {/* SYSTEM KPI CARDS */}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Server
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Server Health
          </p>

          <h3 className="text-3xl font-bold mt-2">
            99.9%
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Database
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Database Uptime
          </p>

          <h3 className="text-3xl font-bold mt-2">
            99.8%
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Cpu
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            CPU Usage
          </p>

          <h3 className="text-3xl font-bold mt-2">
            42%
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <HardDrive
            size={24}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Storage Usage
          </p>

          <h3 className="text-3xl font-bold mt-2">
            68%
          </h3>

        </div>

      </div>

      {/* CONFIGURATION PANEL */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Platform Configuration
          </h3>

        </div>

        <div className="p-5 space-y-5">

          <div className="flex items-center justify-between">

            <div>
              <h4 className="font-medium">
                Automatic Backups
              </h4>

              <p className="text-sm text-slate-500">
                Daily database and system backups
              </p>
            </div>

            <Toggle
              enabled={systemConfig.autoBackup}
              onClick={() =>
                toggleSetting("autoBackup")
              }
            />

          </div>

          <div className="flex items-center justify-between">

            <div>
              <h4 className="font-medium">
                Audit Logging
              </h4>

              <p className="text-sm text-slate-500">
                Track all platform activities
              </p>
            </div>

            <Toggle
              enabled={systemConfig.auditLogging}
              onClick={() =>
                toggleSetting("auditLogging")
              }
            />

          </div>

          <div className="flex items-center justify-between">

            <div>
              <h4 className="font-medium">
                API Monitoring
              </h4>

              <p className="text-sm text-slate-500">
                Monitor API health and performance
              </p>
            </div>

            <Toggle
              enabled={systemConfig.apiMonitoring}
              onClick={() =>
                toggleSetting("apiMonitoring")
              }
            />

          </div>

          <div className="flex items-center justify-between">

            <div>
              <h4 className="font-medium">
                Real-Time Analytics
              </h4>

              <p className="text-sm text-slate-500">
                Enable live analytics processing
              </p>
            </div>

            <Toggle
              enabled={systemConfig.realtimeAnalytics}
              onClick={() =>
                toggleSetting("realtimeAnalytics")
              }
            />

          </div>

          <div className="flex items-center justify-between">

            <div>
              <h4 className="font-medium text-red-600">
                Maintenance Mode
              </h4>

              <p className="text-sm text-slate-500">
                Temporarily disable user access
              </p>
            </div>

            <Toggle
              enabled={systemConfig.maintenanceMode}
              onClick={() =>
                toggleSetting("maintenanceMode")
              }
            />

          </div>

        </div>

      </div>

      {/* INFRASTRUCTURE STATUS */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            System Health
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            All enterprise services are operational and healthy.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Activity
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Performance Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Real-time monitoring active across all services.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Shield
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Security Compliance
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Infrastructure complies with enterprise standards.
          </p>

        </div>

      </div>

      {/* SYSTEM SERVICES */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Infrastructure Services
          </h3>

        </div>

        <div className="p-5 space-y-4">

          {[
            {
              service: "Forecasting Engine",
              status: "Operational",
            },
            {
              service: "Analytics Service",
              status: "Operational",
            },
            {
              service: "Database Cluster",
              status: "Operational",
            },
            {
              service: "Notification Service",
              status: "Operational",
            },
            {
              service: "AI Model Service",
              status: "Operational",
            },
          ].map((item) => (
            <div
              key={item.service}
              className="flex items-center justify-between"
            >
              <span>{item.service}</span>

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
                {item.status}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* ACTION BUTTONS */}

      <div className="flex justify-end gap-3">

        <button
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            border
            border-slate-300
            bg-white
            hover:bg-slate-50
          "
        >
          <RefreshCw size={18} />
          Restart Services
        </button>

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
          Save Configuration
        </button>

      </div>

      {/* AI SYSTEM INTELLIGENCE */}

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
            System Intelligence Center
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Infrastructure Health
            </h4>

            <p className="text-slate-300 mt-2">
              System performance remains within optimal enterprise thresholds.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Resource Optimization
            </h4>

            <p className="text-slate-300 mt-2">
              AI recommends scaling storage resources within the next quarter.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Enable automated backup verification for maximum reliability.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SystemSettings;