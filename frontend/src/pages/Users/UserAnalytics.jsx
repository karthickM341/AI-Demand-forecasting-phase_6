import React from "react";
import {
  Users,
  TrendingUp,
  Activity,
  Shield,
  UserCheck,
  BarChart3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const analyticsKPIs = [
  {
    title: "Total Users",
    value: "4,286",
    growth: "+12%",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Active Users",
    value: "3,842",
    growth: "+8%",
    icon: UserCheck,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "User Growth",
    value: "+18%",
    growth: "+4%",
    icon: TrendingUp,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Security Score",
    value: "98%",
    growth: "+2%",
    icon: Shield,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

const departmentData = [
  {
    department: "Sales",
    users: 92,
  },
  {
    department: "Operations",
    users: 85,
  },
  {
    department: "Analytics",
    users: 78,
  },
  {
    department: "Finance",
    users: 65,
  },
];

const UserAnalytics = () => {
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
          User Analytics
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Enterprise user engagement, growth and platform adoption analytics
        </p>
      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {analyticsKPIs.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                shadow-sm
                p-5
                hover:shadow-md
                transition-all
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
                    ${item.bg}
                  `}
                >
                  <Icon
                    size={24}
                    className={item.color}
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
                  {item.growth}
                </div>

              </div>

              <p className="text-sm text-slate-500 mt-4">
                {item.title}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {item.value}
              </h3>

            </div>
          );
        })}
      </div>

      {/* USER DISTRIBUTION */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
        "
      >
        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Department User Distribution
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            User adoption across enterprise departments
          </p>

        </div>

        <div className="p-5 space-y-5">

          {departmentData.map((item) => (
            <div key={item.department}>

              <div className="flex justify-between mb-2">

                <span className="font-medium">
                  {item.department}
                </span>

                <span className="font-semibold">
                  {item.users}%
                </span>

              </div>

              <div className="w-full h-3 bg-slate-100 rounded-full">

                <div
                  className="h-3 bg-blue-600 rounded-full"
                  style={{
                    width: `${item.users}%`,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ANALYTICS INSIGHTS */}

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
          <TrendingUp
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            User Growth
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Platform adoption continues to increase
            across all business units.
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
          <Activity
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Engagement Analytics
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Daily user activity remains strong with
            high forecasting platform usage.
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
          <BarChart3
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Adoption Metrics
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Analytics and forecasting modules drive
            the highest user engagement.
          </p>

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
              Adoption Trends
            </h4>

            <p className="text-slate-300 mt-2">
              User growth remains strong across
              forecasting, analytics and planning modules.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Engagement Analysis
            </h4>

            <p className="text-slate-300 mt-2">
              AI identifies increasing engagement
              among enterprise leadership teams.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Expand onboarding workflows to accelerate
              adoption among new platform users.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserAnalytics;