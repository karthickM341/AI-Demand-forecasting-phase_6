import React from "react";
import {
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Globe,
  BarChart3,
  Target,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const analyticsData = [
  {
    title: "Total Organizations",
    value: "48",
    change: "+12%",
    icon: Building2,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Active Users",
    value: "4,286",
    change: "+18%",
    icon: Users,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Revenue Growth",
    value: "$24.8M",
    change: "+24%",
    icon: DollarSign,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Forecast Accuracy",
    value: "96.8%",
    change: "+3.2%",
    icon: Target,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

const topOrganizations = [
  {
    name: "Global Retail Group",
    revenue: "$5.2M",
    users: 124,
    accuracy: "98%",
  },
  {
    name: "Future Manufacturing",
    revenue: "$8.7M",
    users: 214,
    accuracy: "97%",
  },
  {
    name: "Smart Logistics",
    revenue: "$3.8M",
    users: 86,
    accuracy: "96%",
  },
  {
    name: "Digital Commerce",
    revenue: "$2.9M",
    users: 96,
    accuracy: "95%",
  },
];

const regions = [
  {
    region: "North America",
    percentage: 92,
    color: "bg-blue-500",
  },
  {
    region: "Europe",
    percentage: 85,
    color: "bg-green-500",
  },
  {
    region: "Asia Pacific",
    percentage: 96,
    color: "bg-purple-500",
  },
  {
    region: "Middle East",
    percentage: 74,
    color: "bg-orange-500",
  },
];

const OrganizationAnalytics = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <BarChart3
            size={28}
            className="text-blue-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Organization Analytics
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Enterprise performance intelligence and organizational insights
            </p>
          </div>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {analyticsData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm"
            >
              <div className="flex justify-between items-center">

                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.bg}`}
                >
                  <Icon
                    size={24}
                    className={item.color}
                  />
                </div>

                <div className="flex items-center gap-1 text-green-600 font-semibold text-sm">
                  <ArrowUpRight size={16} />
                  {item.change}
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

      {/* ANALYTICS SECTION */}

      <div className="grid grid-cols-12 gap-4">

        {/* TOP ORGANIZATIONS */}

        <div className="col-span-12 xl:col-span-8">

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

            <div className="p-5 border-b border-slate-100">

              <h3 className="text-lg font-semibold">
                Top Performing Organizations
              </h3>

              <p className="text-sm text-slate-500">
                Revenue and forecasting performance leaders
              </p>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="bg-slate-50">

                    <th className="text-left p-4 text-sm">
                      Organization
                    </th>

                    <th className="text-left p-4 text-sm">
                      Revenue
                    </th>

                    <th className="text-left p-4 text-sm">
                      Users
                    </th>

                    <th className="text-left p-4 text-sm">
                      Accuracy
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {topOrganizations.map((org) => (
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

                      <td className="p-4 text-green-600 font-semibold">
                        {org.accuracy}
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

        {/* SIDEBAR */}

        <div className="col-span-12 xl:col-span-4">

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

            <h3 className="font-semibold mb-5">
              Regional Performance
            </h3>

            <div className="space-y-5">

              {regions.map((item) => (
                <div key={item.region}>

                  <div className="flex justify-between mb-2">

                    <span className="text-sm">
                      {item.region}
                    </span>

                    <span className="font-semibold">
                      {item.percentage}%
                    </span>

                  </div>

                  <div className="w-full h-3 bg-slate-100 rounded-full">

                    <div
                      className={`h-3 rounded-full ${item.color}`}
                      style={{
                        width: `${item.percentage}%`,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* BUSINESS INSIGHTS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Globe
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Global Expansion
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Organizations expanded into 18 countries
            with growing forecasting adoption.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Activity
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Platform Engagement
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Enterprise engagement increased by
            22% compared to the previous quarter.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <TrendingUp
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Revenue Performance
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Forecast-driven revenue growth remains
            above enterprise targets.
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
            Organization Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Growth Forecast
            </h4>

            <p className="text-slate-300 mt-2">
              Enterprise organization growth is expected
              to increase by 20% over the next quarter.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Adoption Trends
            </h4>

            <p className="text-slate-300 mt-2">
              Forecasting adoption continues to grow
              across manufacturing and retail sectors.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              AI Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Focus onboarding efforts on high-growth
              regions to maximize platform utilization.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default OrganizationAnalytics;