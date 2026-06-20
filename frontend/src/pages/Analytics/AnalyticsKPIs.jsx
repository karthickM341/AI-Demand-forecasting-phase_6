import React from "react";
import {
  DollarSign,
  TrendingUp,
  Target,
  Globe,
  Activity,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const analyticsKPIs = [
  {
    title: "Revenue Forecast",
    value: "$12.8M",
    change: "+18.4%",
    icon: DollarSign,
    color: "emerald",
  },
  {
    title: "Forecast Accuracy",
    value: "96.8%",
    change: "+2.3%",
    icon: Target,
    color: "blue",
  },
  {
    title: "Growth Index",
    value: "124.5",
    change: "+11.2%",
    icon: TrendingUp,
    color: "violet",
  },
  {
    title: "Regions Covered",
    value: "18",
    change: "+3",
    icon: Globe,
    color: "cyan",
  },
  {
    title: "Active Models",
    value: "12",
    change: "+2",
    icon: Activity,
    color: "orange",
  },
  {
    title: "Analytics Score",
    value: "98.1%",
    change: "+1.5%",
    icon: BarChart3,
    color: "green",
  },
];

const colorMap = {
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    progress: "bg-emerald-500",
  },
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    progress: "bg-blue-500",
  },
  violet: {
    bg: "bg-violet-50",
    icon: "text-violet-600",
    progress: "bg-violet-500",
  },
  cyan: {
    bg: "bg-cyan-50",
    icon: "text-cyan-600",
    progress: "bg-cyan-500",
  },
  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    progress: "bg-orange-500",
  },
  green: {
    bg: "bg-green-50",
    icon: "text-green-600",
    progress: "bg-green-500",
  },
};

const AnalyticsKPIs = () => {
  return (
    <PageContainer
  title="Analytics Center"
  subtitle="Advanced forecasting and business intelligence"
>
    <div className="space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Analytics KPI Overview
          </h2>

          <p className="text-sm text-slate-500">
            Real-time business intelligence and forecasting metrics
          </p>
        </div>

        <div
          className="
            px-4
            py-2
            rounded-xl
            bg-blue-50
            text-blue-700
            text-sm
            font-semibold
          "
        >
          Analytics Active
        </div>
      </div>

      {/* KPI Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-6
          gap-4
        "
      >
        {analyticsKPIs.map((item) => {
          const Icon = item.icon;
          const styles = colorMap[item.color];

          return (
            <div
              key={item.title}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
                shadow-sm
                hover:shadow-lg
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
                    ${styles.bg}
                  `}
                >
                  <Icon
                    size={24}
                    className={styles.icon}
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
                  <ArrowUpRight size={14} />
                  {item.change}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h3
                  className="
                    text-3xl
                    font-bold
                    text-slate-900
                    mt-1
                  "
                >
                  {item.value}
                </h3>
              </div>

              <div className="mt-4">
                <div className="w-full h-2 bg-slate-100 rounded-full">
                  <div
                    className={`
                      h-2
                      rounded-full
                      ${styles.progress}
                    `}
                    style={{
                      width: `${70 + Math.random() * 25}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
</PageContainer>
  );
};


export default AnalyticsKPIs;