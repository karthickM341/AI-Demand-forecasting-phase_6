import React, { useState } from "react";
import {
  Settings,
  Building2,
  Globe,
  Users,
  ShieldCheck,
  Bell,
  Database,
  Save,
  Sparkles,
} from "lucide-react";

const OrganizationSettings = () => {
  const [settings, setSettings] = useState({
    organizationName: "Global Retail Group",
    industry: "Retail",
    country: "United States",
    timezone: "UTC -05:00",
    notifications: true,
    governance: true,
    forecasting: true,
    userManagement: true,
  });

  const handleToggle = (field) => {
    setSettings({
      ...settings,
      [field]: !settings[field],
    });
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
              Organization Settings
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Configure enterprise organization preferences and controls
            </p>
          </div>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Building2 size={24} className="text-blue-600" />
          <p className="text-sm text-slate-500 mt-3">
            Organizations
          </p>
          <h3 className="text-3xl font-bold mt-2">
            48
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Users size={24} className="text-green-600" />
          <p className="text-sm text-slate-500 mt-3">
            Active Users
          </p>
          <h3 className="text-3xl font-bold mt-2">
            4,286
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <ShieldCheck size={24} className="text-purple-600" />
          <p className="text-sm text-slate-500 mt-3">
            Compliance Score
          </p>
          <h3 className="text-3xl font-bold mt-2">
            99.2%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Database size={24} className="text-cyan-600" />
          <p className="text-sm text-slate-500 mt-3">
            Active Forecasts
          </p>
          <h3 className="text-3xl font-bold mt-2">
            1,248
          </h3>
        </div>

      </div>

      {/* Organization Details */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">
          <h3 className="text-lg font-semibold">
            Organization Information
          </h3>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-5">

          <div>
            <label className="block text-sm font-medium mb-2">
              Organization Name
            </label>

            <input
              type="text"
              value={settings.organizationName}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  organizationName: e.target.value,
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
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Industry
            </label>

            <input
              type="text"
              value={settings.industry}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  industry: e.target.value,
                })
              }
              className="
                w-full
                h-11
                px-4
                rounded-xl
                border
                border-slate-300
              "
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Country
            </label>

            <input
              type="text"
              value={settings.country}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  country: e.target.value,
                })
              }
              className="
                w-full
                h-11
                px-4
                rounded-xl
                border
                border-slate-300
              "
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Time Zone
            </label>

            <input
              type="text"
              value={settings.timezone}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  timezone: e.target.value,
                })
              }
              className="
                w-full
                h-11
                px-4
                rounded-xl
                border
                border-slate-300
              "
            />
          </div>

        </div>

      </div>

      {/* Feature Settings */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">
          <h3 className="text-lg font-semibold">
            Platform Features
          </h3>
        </div>

        <div className="p-6 space-y-6">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="text-blue-600" />
              <div>
                <h4 className="font-medium">
                  Notifications
                </h4>
                <p className="text-sm text-slate-500">
                  Organization alerts and updates
                </p>
              </div>
            </div>

            <Toggle
              enabled={settings.notifications}
              onChange={() =>
                handleToggle("notifications")
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-600" />
              <div>
                <h4 className="font-medium">
                  Governance Controls
                </h4>
                <p className="text-sm text-slate-500">
                  Compliance and audit monitoring
                </p>
              </div>
            </div>

            <Toggle
              enabled={settings.governance}
              onChange={() =>
                handleToggle("governance")
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="text-purple-600" />
              <div>
                <h4 className="font-medium">
                  Forecasting Engine
                </h4>
                <p className="text-sm text-slate-500">
                  AI forecasting services
                </p>
              </div>
            </div>

            <Toggle
              enabled={settings.forecasting}
              onChange={() =>
                handleToggle("forecasting")
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="text-cyan-600" />
              <div>
                <h4 className="font-medium">
                  User Management
                </h4>
                <p className="text-sm text-slate-500">
                  Role-based access controls
                </p>
              </div>
            </div>

            <Toggle
              enabled={settings.userManagement}
              onChange={() =>
                handleToggle("userManagement")
              }
            />
          </div>

        </div>

      </div>

      {/* Save Button */}

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
            font-medium
            hover:bg-blue-700
            transition
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
            Organization Intelligence
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Governance Readiness
            </h4>

            <p className="text-slate-300 mt-2">
              Compliance score remains above enterprise targets.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Forecast Optimization
            </h4>

            <p className="text-slate-300 mt-2">
              AI recommendations improve forecasting efficiency.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Growth Opportunity
            </h4>

            <p className="text-slate-300 mt-2">
              Expansion opportunities identified in emerging markets.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default OrganizationSettings;