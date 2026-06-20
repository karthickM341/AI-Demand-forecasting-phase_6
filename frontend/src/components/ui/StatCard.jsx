import React from "react";
import {
  TrendingUp,
  TrendingDown,
  MoreVertical,
} from "lucide-react";

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  color = "indigo",
}) => {
  const colors = {
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-600",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-600",
    },
    cyan: {
      bg: "bg-cyan-100",
      text: "text-cyan-600",
    },
  };

  const selected =
    colors[color] || colors.indigo;

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
      {/* Header */}

      <div className="flex items-center justify-between">

        <div
          className={`
            h-14
            w-14
            rounded-2xl
            flex
            items-center
            justify-center
            ${selected.bg}
          `}
        >
          {Icon && (
            <Icon
              size={28}
              className={selected.text}
            />
          )}
        </div>

        <button
          className="
            h-10
            w-10
            rounded-xl
            hover:bg-slate-100
            flex
            items-center
            justify-center
          "
        >
          <MoreVertical size={18} />
        </button>

      </div>

      {/* Content */}

      <div className="mt-5">

        <p className="text-slate-500 text-sm font-medium">
          {title}
        </p>

        <h2
          className="
            text-4xl
            font-bold
            text-slate-900
            mt-2
          "
        >
          {value}
        </h2>

        {subtitle && (
          <p
            className="
              text-sm
              text-slate-400
              mt-2
            "
          >
            {subtitle}
          </p>
        )}

      </div>

      {/* Footer */}

      {trendValue && (
        <div className="mt-5 flex items-center gap-2">

          <span
            className={`
              flex
              items-center
              gap-1
              text-sm
              font-semibold
              ${
                trend === "down"
                  ? "text-red-600"
                  : "text-green-600"
              }
            `}
          >
            {trend === "down" ? (
              <TrendingDown size={16} />
            ) : (
              <TrendingUp size={16} />
            )}

            {trendValue}
          </span>

          <span className="text-sm text-slate-400">
            vs previous period
          </span>

        </div>
      )}

    </div>
  );
};

export default StatCard;