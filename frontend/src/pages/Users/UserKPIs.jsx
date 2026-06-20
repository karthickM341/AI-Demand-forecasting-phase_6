import React from "react";
import {
  Users,
  UserCheck,
  UserPlus,
  UserX,
  Shield,
  Activity,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const userMetrics = [
  {
    title: "Total Users",
    value: "4,286",
    growth: "+12%",
    icon: Users,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Users",
    value: "3,842",
    growth: "+8%",
    icon: UserCheck,
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "New Users",
    value: "248",
    growth: "+21%",
    icon: UserPlus,
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Inactive Users",
    value: "196",
    growth: "-6%",
    icon: UserX,
    iconColor: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Admin Users",
    value: "34",
    growth: "+4%",
    icon: Shield,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Login Success",
    value: "98.7%",
    growth: "+2%",
    icon: Activity,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "User Growth",
    value: "+18%",
    growth: "+5%",
    icon: TrendingUp,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Security Score",
    value: "96%",
    growth: "+3%",
    icon: Shield,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const UserKPIs = () => {
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
          User Performance Dashboard
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Enterprise workforce analytics, access governance and user engagement metrics
        </p>
      </div>

      {/* KPI GRID */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-4
        "
      >
        {userMetrics.map((metric) => {
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
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div className="flex items-center justify-between">

                <div
                  className={`
                    h-12
                    w-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${metric.bgColor}
                  `}
                >
                  <Icon
                    size={24}
                    className={metric.iconColor}
                  />
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-green-600
                    text-sm
                    font-semibold
                  "
                >
                  <ArrowUpRight size={16} />
                  {metric.growth}
                </div>

              </div>

              <div className="mt-4">

                <p className="text-sm text-slate-500">
                  {metric.title}
                </p>

                <h3 className="text-3xl font-bold text-slate-900 mt-2">
                  {metric.value}
                </h3>

              </div>

            </div>
          );
        })}
      </div>

      {/* USER HEALTH */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          p-6
        "
      >
        <h3 className="text-lg font-semibold mb-5">
          User Health Overview
        </h3>

        <div className="space-y-5">

          <div>

            <div className="flex justify-between mb-2">
              <span>Platform Adoption</span>
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
              <span>User Engagement</span>
              <span className="font-semibold">
                91%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: "91%" }}
              />
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Security Compliance</span>
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

      {/* AI USER INTELLIGENCE */}

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
            User Intelligence Center
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Workforce Growth
            </h4>

            <p className="text-slate-300 mt-2">
              User adoption increased significantly across forecasting,
              planning and analytics teams.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Access Governance
            </h4>

            <p className="text-slate-300 mt-2">
              RBAC controls continue maintaining secure access
              across all enterprise modules.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Enable automated onboarding workflows and
              quarterly access reviews for improved governance.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserKPIs;