import React, { useState } from "react";
import {
  Bell,
  Mail,
  Smartphone,
  ShieldCheck,
  Brain,
  Save,
  Settings,
  Sparkles,
} from "lucide-react";

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
    aiInsights: true,
    governanceAlerts: true,
    forecastAlerts: true,
    systemAlerts: true,
    weeklyReports: true,
  });

  const handleToggle = (field) => {
    setSettings((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const Toggle = ({ enabled, onChange }) => (
    <button
      onClick={onChange}
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

  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <Settings
            size={28}
            className="text-blue-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Notification Settings
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Configure enterprise alerts, AI notifications and governance updates
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
            Active Notifications
          </p>

          <h3 className="text-3xl font-bold mt-2">
            8
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Mail
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Email Channels
          </p>

          <h3 className="text-3xl font-bold mt-2">
            Enabled
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Brain
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            AI Insights
          </p>

          <h3 className="text-3xl font-bold mt-2">
            Active
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <ShieldCheck
            size={24}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Governance Alerts
          </p>

          <h3 className="text-3xl font-bold mt-2">
            Enabled
          </h3>

        </div>

      </div>

      {/* Settings Panel */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="text-lg font-semibold">
            Notification Preferences
          </h3>

          <p className="text-sm text-slate-500">
            Customize notification delivery channels
          </p>

        </div>

        <div className="p-6 space-y-6">

          {/* Email */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <Mail
                size={22}
                className="text-green-600"
              />

              <div>
                <h4 className="font-semibold">
                  Email Notifications
                </h4>

                <p className="text-sm text-slate-500">
                  Receive alerts through email
                </p>
              </div>

            </div>

            <Toggle
              enabled={settings.emailAlerts}
              onChange={() =>
                handleToggle("emailAlerts")
              }
            />

          </div>

          {/* SMS */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <Smartphone
                size={22}
                className="text-orange-600"
              />

              <div>
                <h4 className="font-semibold">
                  SMS Notifications
                </h4>

                <p className="text-sm text-slate-500">
                  Receive alerts via SMS
                </p>
              </div>

            </div>

            <Toggle
              enabled={settings.smsAlerts}
              onChange={() =>
                handleToggle("smsAlerts")
              }
            />

          </div>

          {/* Push */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <Bell
                size={22}
                className="text-blue-600"
              />

              <div>
                <h4 className="font-semibold">
                  Push Notifications
                </h4>

                <p className="text-sm text-slate-500">
                  Browser and application alerts
                </p>
              </div>

            </div>

            <Toggle
              enabled={settings.pushNotifications}
              onChange={() =>
                handleToggle("pushNotifications")
              }
            />

          </div>

          {/* AI */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <Brain
                size={22}
                className="text-purple-600"
              />

              <div>
                <h4 className="font-semibold">
                  AI Insights
                </h4>

                <p className="text-sm text-slate-500">
                  Receive AI-generated recommendations
                </p>
              </div>

            </div>

            <Toggle
              enabled={settings.aiInsights}
              onChange={() =>
                handleToggle("aiInsights")
              }
            />

          </div>

          {/* Governance */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <ShieldCheck
                size={22}
                className="text-cyan-600"
              />

              <div>
                <h4 className="font-semibold">
                  Governance Alerts
                </h4>

                <p className="text-sm text-slate-500">
                  Compliance and audit notifications
                </p>
              </div>

            </div>

            <Toggle
              enabled={settings.governanceAlerts}
              onChange={() =>
                handleToggle("governanceAlerts")
              }
            />

          </div>

          {/* Forecast */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <Brain
                size={22}
                className="text-indigo-600"
              />

              <div>
                <h4 className="font-semibold">
                  Forecast Alerts
                </h4>

                <p className="text-sm text-slate-500">
                  Demand forecasting notifications
                </p>
              </div>

            </div>

            <Toggle
              enabled={settings.forecastAlerts}
              onChange={() =>
                handleToggle("forecastAlerts")
              }
            />

          </div>

          {/* Weekly Reports */}

          <div className="flex items-center justify-between">

            <div>
              <h4 className="font-semibold">
                Weekly Executive Reports
              </h4>

              <p className="text-sm text-slate-500">
                Receive weekly business intelligence summaries
              </p>
            </div>

            <Toggle
              enabled={settings.weeklyReports}
              onChange={() =>
                handleToggle("weeklyReports")
              }
            />

          </div>

        </div>

      </div>

      {/* Save Section */}

      <div className="flex justify-end">

        <button
          className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-blue-600
            text-white
            hover:bg-blue-700
            transition
            shadow-sm
          "
        >
          <Save size={18} />
          Save Settings
        </button>

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
            Notification Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Smart Alert Routing
            </h4>

            <p className="text-slate-300 mt-2">
              AI automatically prioritizes critical business alerts.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Forecast Monitoring
            </h4>

            <p className="text-slate-300 mt-2">
              Real-time notifications ensure proactive decision making.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Governance Visibility
            </h4>

            <p className="text-slate-300 mt-2">
              Compliance alerts remain fully aligned with enterprise policies.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default NotificationSettings;