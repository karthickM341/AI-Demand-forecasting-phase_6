import React from "react";
import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  ShieldAlert,
  TrendingUp,
  Brain,
  Clock,
  ArrowRight,
  Activity,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    title: "Demand Spike Detected",
    description:
      "Product A demand increased by 28% compared to forecast baseline.",
    severity: "Critical",
    time: "5 mins ago",
    icon: TrendingUp,
    color: "red",
  },
  {
    id: 2,
    title: "Inventory Risk Alert",
    description:
      "Stock levels projected below safety threshold within 7 days.",
    severity: "High",
    time: "20 mins ago",
    icon: AlertTriangle,
    color: "orange",
  },
  {
    id: 3,
    title: "Forecast Accuracy Improved",
    description:
      "Retrained forecasting model achieved 96.8% accuracy.",
    severity: "Info",
    time: "1 hour ago",
    icon: Brain,
    color: "blue",
  },
  {
    id: 4,
    title: "Governance Compliance Passed",
    description:
      "Monthly forecasting compliance validation completed successfully.",
    severity: "Success",
    time: "3 hours ago",
    icon: CheckCircle2,
    color: "green",
  },
];

const getAlertStyle = (color) => {
  const styles = {
    red: {
      bg: "bg-red-50",
      text: "text-red-600",
      badge: "bg-red-100 text-red-700",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      badge: "bg-orange-100 text-orange-700",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      badge: "bg-green-100 text-green-700",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      badge: "bg-blue-100 text-blue-700",
    },
  };

  return styles[color];
};

const RecentAlerts = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Alert Center
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Real-time forecasting alerts and operational notifications
          </p>
        </div>

        <button
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            bg-slate-900
            text-white
            hover:bg-slate-800
            transition-all
          "
        >
          View All
          <ArrowRight size={16} />
        </button>

      </div>

      {/* Alert KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <Bell
              className="text-blue-600"
              size={24}
            />

            <span className="font-bold text-blue-600">
              28
            </span>
          </div>

          <h3 className="mt-4 font-semibold">
            Total Alerts
          </h3>

          <p className="text-sm text-slate-500">
            Last 24 Hours
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <ShieldAlert
              className="text-red-600"
              size={24}
            />

            <span className="font-bold text-red-600">
              4
            </span>
          </div>

          <h3 className="mt-4 font-semibold">
            Critical Alerts
          </h3>

          <p className="text-sm text-slate-500">
            Immediate Attention
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <AlertTriangle
              className="text-orange-600"
              size={24}
            />

            <span className="font-bold text-orange-600">
              9
            </span>
          </div>

          <h3 className="mt-4 font-semibold">
            Warning Alerts
          </h3>

          <p className="text-sm text-slate-500">
            Monitoring Required
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <CheckCircle2
              className="text-green-600"
              size={24}
            />

            <span className="font-bold text-green-600">
              15
            </span>
          </div>

          <h3 className="mt-4 font-semibold">
            Resolved
          </h3>

          <p className="text-sm text-slate-500">
            Successfully Closed
          </p>
        </div>

      </div>

      {/* Alert Feed */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          overflow-hidden
        "
      >
        <div className="p-5 border-b border-slate-100">
          <h3 className="font-semibold text-lg">
            Recent Activity
          </h3>

          <p className="text-sm text-slate-500">
            Latest enterprise alert stream
          </p>
        </div>

        <div className="divide-y divide-slate-100">

          {alerts.map((alert) => {
            const Icon = alert.icon;
            const style = getAlertStyle(alert.color);

            return (
              <div
                key={alert.id}
                className="
                  p-5
                  hover:bg-slate-50
                  transition-all
                "
              >
                <div className="flex gap-4">

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
                      size={22}
                      className={style.text}
                    />
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center justify-between">

                      <h4 className="font-semibold text-slate-900">
                        {alert.title}
                      </h4>

                      <span
                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          ${style.badge}
                        `}
                      >
                        {alert.severity}
                      </span>

                    </div>

                    <p className="text-sm text-slate-500 mt-2">
                      {alert.description}
                    </p>

                    <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                      <Clock size={14} />
                      {alert.time}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* AI Alert Intelligence */}

      <div
        className="
          rounded-2xl
          bg-gradient-to-r
          from-slate-950
          via-red-950
          to-slate-950
          p-6
          text-white
        "
      >

        <div className="flex items-center gap-3 mb-5">
          <Activity size={22} />

          <h3 className="text-xl font-bold">
            AI Alert Intelligence
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-red-300 font-semibold">
              Critical Forecast Risk
            </h4>

            <p className="text-slate-300 mt-2">
              Product demand volatility exceeds
              normal forecasting thresholds.
            </p>
          </div>

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Inventory Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Increase inventory allocation by
              18% to prevent stock shortages.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              AI Confidence
            </h4>

            <p className="text-slate-300 mt-2">
              Forecasting confidence remains above
              enterprise performance targets.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default RecentAlerts;