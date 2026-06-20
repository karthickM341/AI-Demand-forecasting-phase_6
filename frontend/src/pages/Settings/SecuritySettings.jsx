import React, { useState } from "react";
import {
  Shield,
  Lock,
  Key,
  Smartphone,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertTriangle,
  Activity,
  Save,
  Sparkles,
} from "lucide-react";

const SecuritySettings = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const [settings, setSettings] = useState({
    mfaEnabled: true,
    sessionTimeout: true,
    loginAlerts: true,
    passwordExpiry: true,
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
        ${
          enabled
            ? "bg-blue-600"
            : "bg-slate-300"
        }
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
          ${
            enabled
              ? "left-7"
              : "left-1"
          }
        `}
      />
    </button>
  );

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
        <div className="flex items-center gap-3">

          <Shield
            size={24}
            className="text-blue-600"
          />

          <div>

            <h2
              className="
                text-lg
                font-bold
                text-slate-900
              "
            >
              Security Settings
            </h2>

            <p
              className="
                text-sm
                text-slate-500
                mt-1
              "
            >
              Enterprise security controls,
              authentication and access
              management
            </p>

          </div>

        </div>
      </div>

      {/* Security KPIs */}

      <div className="grid grid-cols-2 gap-4">

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
          <Shield
            size={24}
            className="text-green-600"
          />

          <p
            className="
              text-sm
              text-slate-500
              mt-3
            "
          >
            Security Score
          </p>

          <h3
            className="
              text-3xl
              font-bold
              mt-2
            "
          >
            98%
          </h3>

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
          <Activity
            size={24}
            className="text-blue-600"
          />

          <p
            className="
              text-sm
              text-slate-500
              mt-3
            "
          >
            Active Sessions
          </p>

          <h3
            className="
              text-3xl
              font-bold
              mt-2
            "
          >
            12
          </h3>

        </div>

      </div>

      {/* Password Settings */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
        "
      >
        <div
          className="
            p-5
            border-b
            border-slate-100
          "
        >
          <h3 className="font-semibold">
            Password Management
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>

            <label
              className="
                block
                text-sm
                font-medium
                mb-2
              "
            >
              New Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter new password"
                className="
                  w-full
                  h-11
                  px-4
                  pr-12
                  rounded-xl
                  border
                  border-slate-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                "
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

          <div>

            <label
              className="
                block
                text-sm
                font-medium
                mb-2
              "
            >
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
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

        </div>

      </div>

      {/* Security Controls */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
        "
      >
        <div
          className="
            p-5
            border-b
            border-slate-100
          "
        >
          <h3 className="font-semibold">
            Authentication Controls
          </h3>
        </div>

        <div className="p-5 space-y-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Smartphone
                size={20}
                className="text-blue-600"
              />

              <div>

                <h4 className="font-medium">
                  Multi-Factor Authentication
                </h4>

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Additional login protection
                </p>

              </div>

            </div>

            <Toggle
              enabled={settings.mfaEnabled}
              onClick={() =>
                toggleSetting(
                  "mfaEnabled"
                )
              }
            />

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Lock
                size={20}
                className="text-green-600"
              />

              <div>

                <h4 className="font-medium">
                  Session Timeout
                </h4>

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Auto logout inactive users
                </p>

              </div>

            </div>

            <Toggle
              enabled={settings.sessionTimeout}
              onClick={() =>
                toggleSetting(
                  "sessionTimeout"
                )
              }
            />

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <AlertTriangle
                size={20}
                className="text-amber-600"
              />

              <div>

                <h4 className="font-medium">
                  Login Alerts
                </h4>

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Notify suspicious logins
                </p>

              </div>

            </div>

            <Toggle
              enabled={settings.loginAlerts}
              onClick={() =>
                toggleSetting(
                  "loginAlerts"
                )
              }
            />

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Key
                size={20}
                className="text-purple-600"
              />

              <div>

                <h4 className="font-medium">
                  Password Expiry
                </h4>

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Force periodic password changes
                </p>

              </div>

            </div>

            <Toggle
              enabled={settings.passwordExpiry}
              onClick={() =>
                toggleSetting(
                  "passwordExpiry"
                )
              }
            />

          </div>

        </div>

      </div>

      {/* Security Status */}

      <div className="grid md:grid-cols-3 gap-4">

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
          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Security Health
          </h3>

          <p
            className="
              text-sm
              text-slate-500
              mt-2
            "
          >
            All security controls are active
            and operating normally.
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
          <Lock
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Access Protection
          </h3>

          <p
            className="
              text-sm
              text-slate-500
              mt-2
            "
          >
            Role-based access controls are
            enforced platform-wide.
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
          <Shield
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Compliance Status
          </h3>

          <p
            className="
              text-sm
              text-slate-500
              mt-2
            "
          >
            Enterprise security policies are
            fully compliant.
          </p>

        </div>

      </div>

      {/* Save */}

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
          Save Security Settings
        </button>

      </div>

      {/* AI Security Intelligence */}

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
            Security Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Threat Detection
            </h4>

            <p className="text-slate-300 mt-2">
              AI continuously monitors login
              activity and suspicious behavior.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Risk Prevention
            </h4>

            <p className="text-slate-300 mt-2">
              Multi-factor authentication
              significantly reduces account risk.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Enable password rotation and MFA
              for all enterprise users.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SecuritySettings;