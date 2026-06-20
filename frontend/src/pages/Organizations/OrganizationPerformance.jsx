import React from "react";
import {
  TrendingUp,
  Building2,
  Users,
  DollarSign,
  Target,
  Activity,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const performanceMetrics = [
  {
    title: "Revenue Performance",
    value: "$24.8M",
    growth: "+24%",
    icon: DollarSign,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Forecast Accuracy",
    value: "96.8%",
    growth: "+3.2%",
    icon: Target,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "User Engagement",
    value: "92%",
    growth: "+12%",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Organization Growth",
    value: "48",
    growth: "+18%",
    icon: Building2,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

const organizations = [
  {
    name: "Future Manufacturing",
    revenue: "$8.7M",
    performance: 98,
    users: 214,
  },
  {
    name: "Global Retail Group",
    revenue: "$5.2M",
    performance: 96,
    users: 124,
  },
  {
    name: "Smart Logistics",
    revenue: "$3.8M",
    performance: 94,
    users: 86,
  },
  {
    name: "Digital Commerce",
    revenue: "$2.9M",
    performance: 91,
    users: 96,
  },
];

const OrganizationPerformance = () => {
  return (
    <div className="space-y-4">

      {/* HEADER */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <h2 className="text-xl font-bold text-slate-900">
          Organization Performance
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Enterprise performance tracking and operational excellence metrics
        </p>

      </div>

      {/* KPI SECTION */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {performanceMetrics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                p-5
                shadow-sm
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

                <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
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

      {/* PERFORMANCE TABLE */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100">

          <h3 className="text-lg font-semibold">
            Top Performing Organizations
          </h3>

          <p className="text-sm text-slate-500">
            Revenue and forecasting performance ranking
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-slate-50">

                <th className="text-left p-4">
                  Organization
                </th>

                <th className="text-left p-4">
                  Revenue
                </th>

                <th className="text-left p-4">
                  Users
                </th>

                <th className="text-left p-4">
                  Performance
                </th>

              </tr>

            </thead>

            <tbody>

              {organizations.map((org) => (
                <tr
                  key={org.name}
                  className="border-t border-slate-100 hover:bg-slate-50"
                >

                  <td className="p-4 font-medium">
                    {org.name}
                  </td>

                  <td className="p-4">
                    {org.revenue}
                  </td>

                  <td className="p-4">
                    {org.users}
                  </td>

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="flex-1 h-2 bg-slate-100 rounded-full">

                        <div
                          className="h-2 bg-green-500 rounded-full"
                          style={{
                            width: `${org.performance}%`,
                          }}
                        />

                      </div>

                      <span className="font-semibold text-green-600">
                        {org.performance}%
                      </span>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* PERFORMANCE SUMMARY */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <TrendingUp
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Revenue Growth
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Enterprise revenue continues to exceed
            quarterly targets across major accounts.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Activity
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Forecast Utilization
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Forecast adoption remains above 90%
            across active organizations.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <CheckCircle2
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Operational Excellence
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Organizations maintain strong governance
            and performance compliance scores.
          </p>

        </div>

      </div>

      {/* AI INSIGHTS */}

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
            Performance Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Growth Outlook
            </h4>

            <p className="text-slate-300 mt-2">
              Organizational performance is expected
              to improve by 15% next quarter.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Revenue Forecast
            </h4>

            <p className="text-slate-300 mt-2">
              Top-performing organizations continue
              to drive enterprise revenue expansion.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              AI Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Focus onboarding efforts on high-growth
              organizations to maximize ROI.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default OrganizationPerformance;