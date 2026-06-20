import React from "react";
import {
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Globe,
  Target,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const kpis = [
  {
    title: "Organizations",
    value: "48",
    growth: "+12%",
    icon: Building2,
    iconColor: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Enterprise Users",
    value: "4,286",
    growth: "+18%",
    icon: Users,
    iconColor: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Annual Revenue",
    value: "$24.8M",
    growth: "+24%",
    icon: DollarSign,
    iconColor: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Forecast Accuracy",
    value: "96.8%",
    growth: "+3.2%",
    icon: Target,
    iconColor: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    title: "Active Forecasts",
    value: "1,248",
    growth: "+15%",
    icon: Activity,
    iconColor: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Global Presence",
    value: "18",
    growth: "+4",
    icon: Globe,
    iconColor: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Compliance Score",
    value: "99.2%",
    growth: "+1.5%",
    icon: ShieldCheck,
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Growth Index",
    value: "128",
    growth: "+22%",
    icon: TrendingUp,
    iconColor: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const OrganizationKPIs = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          p-5
          shadow-sm
        "
      >
        <h2 className="text-xl font-bold text-slate-900">
          Organization KPIs
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Enterprise business performance and organizational metrics
        </p>
      </div>

      {/* KPI Grid */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-4
        "
      >
        {kpis.map((item) => {
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
                    className={item.iconColor}
                  />
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-green-600
                    font-semibold
                    text-sm
                  "
                >
                  <ArrowUpRight size={16} />
                  {item.growth}
                </div>

              </div>

              <div className="mt-4">

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h3 className="text-3xl font-bold text-slate-900 mt-2">
                  {item.value}
                </h3>

              </div>

            </div>
          );
        })}
      </div>

      {/* Executive Summary */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          p-6
          shadow-sm
        "
      >
        <h3 className="text-lg font-semibold mb-5">
          KPI Performance Overview
        </h3>

        <div className="space-y-5">

          <div>
            <div className="flex justify-between mb-2">
              <span>Total Adoption</span>
              <span className="font-semibold">
                92%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-blue-500 rounded-full"
                style={{ width: "92%" }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Forecast Utilization</span>
              <span className="font-semibold">
                96%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: "96%" }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Compliance Coverage</span>
              <span className="font-semibold">
                99%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-purple-500 rounded-full"
                style={{ width: "99%" }}
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default OrganizationKPIs;