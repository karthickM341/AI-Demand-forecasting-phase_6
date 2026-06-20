import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const KPICard = ({
  title,
  value,
  change,
  icon: Icon,
  trend = "up",
  color = "indigo",
  subtitle,
}) => {
  const colorClasses = {
    indigo: "bg-indigo-100 text-indigo-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
    cyan: "bg-cyan-100 text-cyan-600",
  };

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-slate-200
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        p-6
      "
    >
      <div className="flex items-start justify-between">
        <div
          className={`
            h-14
            w-14
            rounded-xl
            flex
            items-center
            justify-center
            ${colorClasses[color]}
          `}
        >
          {Icon && <Icon size={28} />}
        </div>

        {change && (
          <div
            className={`
              flex
              items-center
              gap-1
              text-sm
              font-semibold
              ${
                trend === "up"
                  ? "text-green-600"
                  : "text-red-600"
              }
            `}
          >
            {trend === "up" ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}

            {change}
          </div>
        )}
      </div>

      <div className="mt-5">
        <p className="text-slate-500 text-sm font-medium">
          {title}
        </p>

        <h2 className="text-4xl font-bold text-slate-900 mt-2">
          {value}
        </h2>

        {subtitle && (
          <p className="text-sm text-slate-400 mt-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default KPICard;