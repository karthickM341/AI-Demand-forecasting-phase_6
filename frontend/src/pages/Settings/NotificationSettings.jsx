import React, { useState } from "react";
import {
  Bell,
  Mail,
  Smartphone,
  Shield,
  AlertTriangle,
  Brain,
  Save,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    forecastAlerts: true,
    anomalyAlerts: true,
    governanceAlerts: true,
    securityAlerts: true,
    aiInsights: true,
    weeklyReports: true,
  });

  const toggleSetting = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  const Toggle = ({ enabled, onClick }) => (
    <button
      onClick={onClick}
      className={`
        relative
        w-12
        h-6
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

  const notificationOptions = [
    {
      key: "emailNotifications",
      title: "Email Notifications",
      description: "Receive system notifications via email",
      icon: Mail,
    },
    {
      key: "pushNotifications",
      title: "Push Notifications",
      description: "Real-time browser and mobile alerts",
      icon: Bell,
    },
    {
      key: "forecastAlerts",
      title: "Forecast Alerts",
      description: "Demand forecasting and prediction alerts",
      icon: Brain,
    },
    {
      key: "anomalyAlerts",
      title: "Anomaly Detection Alerts",
      description: "AI anomaly and risk notifications",
      icon: AlertTriangle,
    },
    {
      key: "governanceAlerts",
      title: "Governance Alerts",
      description: "Compliance and policy notifications",
      icon: Shield,
    },
    {
      key: "securityAlerts",
      title: "Security Alerts",
      description: "Authentication and access alerts",
      icon: Shield,
    },
    {
      key: "aiInsights",
      title: "AI Insights",
      description: "Receive AI recommendations and insights",
      icon: Brain,
    },
    {
      key: "weeklyReports",
      title: "Weekly Reports",
      description: "Scheduled executive report delivery",
      icon: Mail,
    },
  ];

  return (
    <div className="space-y-4">

      {/* HEADER */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        <div className="flex items-center gap-3">

          <Bell
            size={24}
            className="text-blue-600"
          />

          <div>

            <h2 className="text-lg font-bold text-slate-900">
              Notification Settings
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Manage enterprise alerts, notifications and AI insights
            </p>

          </div>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Bell
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Active Notifications
          </p>

          <h3 className="text-3xl font-bold mt-2">
            128
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Smartphone
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Delivery Rate
          </p>

          <h3 className="text-3xl font-bold mt-2">
            99.4%
          </h3>

        </div>

      </div>

      {/* SETTINGS PANEL */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Notification Preferences
          </h3>

        </div>

        <div className="p-5 space-y-5">

          {notificationOptions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className="
                  flex
                  items-center
                  justify-between
                  pb-4
                  border-b
                  border-slate-100
                  last:border-none
                  last:pb-0
                "
              >
                <div className="flex items-center gap-4">

                  <div
                    className="
                      h-11
                      w-11
                      rounded-xl
                      bg-blue-50
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      size={20}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <h4 className="font-medium">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {item.description}
                    </p>

                  </div>

                </div>

                <Toggle
                  enabled={settings[item.key]}
                  onClick={() =>
                    toggleSetting(item.key)
                  }
                />

              </div>
            );
          })}

        </div>

      </div>

      {/* STATUS CARDS */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Notification Health
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            All notification channels are operating normally.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Mail
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Email Delivery
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Email delivery success rate remains above target.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Shield
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Security Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Critical security notifications are enabled.
          </p>

        </div>

      </div>

      {/* SAVE BUTTON */}

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
            transition
          "
        >
          <Save size={18} />
          Save Settings
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
            Notification Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Smart Alerts
            </h4>

            <p className="text-slate-300 mt-2">
              AI prioritizes critical alerts to reduce notification fatigue.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Delivery Optimization
            </h4>

            <p className="text-slate-300 mt-2">
              Intelligent routing ensures timely alert delivery.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              AI Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Enable anomaly and forecast alerts for proactive decision-making.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default NotificationSettings;