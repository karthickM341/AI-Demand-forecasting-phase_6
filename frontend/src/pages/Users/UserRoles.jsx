import React from "react";
import {
  Shield,
  Crown,
  UserCog,
  BarChart3,
  Eye,
  CheckCircle2,
  Users,
  Lock,
  Sparkles,
} from "lucide-react";

const roles = [
  {
    role: "Super Admin",
    users: 8,
    icon: Crown,
    color: "text-red-600",
    bg: "bg-red-50",
    permissions: [
      "Full System Access",
      "User Management",
      "Security Control",
      "Platform Configuration",
    ],
  },
  {
    role: "Admin",
    users: 26,
    icon: UserCog,
    color: "text-purple-600",
    bg: "bg-purple-50",
    permissions: [
      "User Administration",
      "Forecast Management",
      "Reports Access",
      "Analytics Access",
    ],
  },
  {
    role: "Analyst",
    users: 148,
    icon: BarChart3,
    color: "text-blue-600",
    bg: "bg-blue-50",
    permissions: [
      "Forecast Analysis",
      "Reporting",
      "Data Upload",
      "Planning Access",
    ],
  },
  {
    role: "Viewer",
    users: 412,
    icon: Eye,
    color: "text-green-600",
    bg: "bg-green-50",
    permissions: [
      "Dashboard Access",
      "View Reports",
      "View Analytics",
      "Read Only Access",
    ],
  },
];

const UserRoles = () => {
  return (
    <div className="space-y-4">

      {/* HEADER */}

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
          Role Management
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Enterprise role-based access control and permission governance
        </p>
      </div>

      {/* ROLE SUMMARY */}

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
        <div className="grid grid-cols-2 gap-4">

          <div>

            <p className="text-sm text-slate-500">
              Total Roles
            </p>

            <h3 className="text-3xl font-bold mt-2">
              4
            </h3>

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Assigned Users
            </p>

            <h3 className="text-3xl font-bold mt-2">
              594
            </h3>

          </div>

        </div>
      </div>

      {/* ROLES */}

      {roles.map((role) => {
        const Icon = role.icon;

        return (
          <div
            key={role.role}
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              shadow-sm
              overflow-hidden
            "
          >

            <div className="p-5">

              <div className="flex items-start gap-4">

                <div
                  className={`
                    h-12
                    w-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${role.bg}
                  `}
                >
                  <Icon
                    size={24}
                    className={role.color}
                  />
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="font-bold text-slate-900">
                        {role.role}
                      </h3>

                      <div className="flex items-center gap-2 mt-1">

                        <Users
                          size={14}
                          className="text-slate-400"
                        />

                        <span className="text-sm text-slate-500">
                          {role.users} assigned users
                        </span>

                      </div>

                    </div>

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
                      Active
                    </span>

                  </div>

                  <div className="mt-4 space-y-2">

                    {role.permissions.map(
                      (permission) => (
                        <div
                          key={permission}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-green-600"
                          />

                          <span className="text-sm text-slate-600">
                            {permission}
                          </span>

                        </div>
                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>
        );
      })}

      {/* ROLE HEALTH */}

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
          Access Governance Health
        </h3>

        <div className="space-y-5">

          <div>

            <div className="flex justify-between mb-2">

              <span>
                Permission Compliance
              </span>

              <span className="font-semibold">
                98%
              </span>

            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">

              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: "98%" }}
              />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <span>
                RBAC Coverage
              </span>

              <span className="font-semibold">
                100%
              </span>

            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">

              <div
                className="h-3 bg-blue-500 rounded-full"
                style={{ width: "100%" }}
              />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <span>
                Security Compliance
              </span>

              <span className="font-semibold">
                96%
              </span>

            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">

              <div
                className="h-3 bg-purple-500 rounded-full"
                style={{ width: "96%" }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* SECURITY INSIGHTS */}

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
          <Shield
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Access Security
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Enterprise RBAC policies protect
            critical forecasting and planning modules.
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
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Compliance Controls
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            User permissions align with governance
            and enterprise security standards.
          </p>

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
            Role Intelligence Center
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Access Analytics
            </h4>

            <p className="text-slate-300 mt-2">
              Role assignments remain balanced across
              analytics, planning and governance teams.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Security Assessment
            </h4>

            <p className="text-slate-300 mt-2">
              No excessive permission exposure detected
              in current RBAC configuration.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Perform quarterly role reviews and
              enforce least-privilege access policies.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserRoles;