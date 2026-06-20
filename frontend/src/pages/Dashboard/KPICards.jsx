import React from "react";
import {
  DollarSign,
  TrendingUp,
  Brain,
  Package,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const kpiData = [
  {
    title: "Revenue Forecast",
    value: "$5.24M",
    change: "+18.4%",
    icon: DollarSign,
    color: "emerald",
  },
  {
    title: "Forecast Accuracy",
    value: "96.8%",
    change: "+3.2%",
    icon: Brain,
    color: "blue",
  },
  {
    title: "Demand Growth",
    value: "24.5%",
    change: "+8.7%",
    icon: TrendingUp,
    color: "violet",
  },
  {
    title: "Inventory Risk",
    value: "14",
    change: "-12.1%",
    icon: Package,
    color: "amber",
  },
  {
    title: "AI Confidence",
    value: "98.1%",
    change: "+1.4%",
    icon: Activity,
    color: "cyan",
  },
];

const colorStyles = {
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
  amber: {
    bg: "bg-amber-50",
    icon: "text-amber-600",
    progress: "bg-amber-500",
  },
  cyan: {
    bg: "bg-cyan-50",
    icon: "text-cyan-600",
    progress: "bg-cyan-500",
  },
};

const KPIHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Executive KPI Overview
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Real-time business performance and AI forecasting metrics
        </p>
      </div>

      <div
        className="
          px-4
          py-2
          rounded-xl
          bg-green-50
          text-green-700
          text-sm
          font-semibold
        "
      >
        Platform Healthy
      </div>
    </div>
  );
};

const KPICard = ({ item }) => {
  const Icon = item.icon;
  const style = colorStyles[item.color];

  return (
    <div
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
            ${style.bg}
          `}
        >
          <Icon
            size={24}
            className={style.icon}
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

      <div className="mt-5">
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

      <div className="mt-5">
        <div className="w-full h-2 bg-slate-100 rounded-full">
          <div
            className={`
              h-2
              rounded-full
              ${style.progress}
            `}
            style={{
              width:
                item.title === "Revenue Forecast"
                  ? "88%"
                  : item.title === "Forecast Accuracy"
                  ? "97%"
                  : item.title === "Demand Growth"
                  ? "82%"
                  : item.title === "Inventory Risk"
                  ? "68%"
                  : "98%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const KPICards = () => {
  return (
    <div className="space-y-4">

      <KPIHeader />

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-5
          gap-4
        "
      >
        {kpiData.map((item) => (
          <KPICard
            key={item.title}
            item={item}
          />
        ))}
      </div>

    </div>
  );
};

export default KPICards;