import React from "react";

import PageContainer from "../../components/PageContainer";

import {
  Bell,
  AlertTriangle,
  CheckCircle2,
  Brain,
  TrendingUp,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Demand Spike Detected",
    description:
      "Product A demand increased by 28% above forecast expectations.",
    type: "Critical",
    icon: AlertTriangle,
    time: "5 mins ago",
  },
  {
    id: 2,
    title: "Forecast Model Retrained",
    description:
      "AI forecasting engine successfully retrained with latest sales data.",
    type: "Success",
    icon: Brain,
    time: "25 mins ago",
  },
  {
    id: 3,
    title: "Compliance Validation Passed",
    description:
      "Monthly governance review completed successfully.",
    type: "Governance",
    icon: ShieldCheck,
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Revenue Growth Alert",
    description:
      "Forecasted quarterly revenue increased by 18.4%.",
    type: "Business",
    icon: TrendingUp,
    time: "2 hours ago",
  },
];

const getBadgeColor = (type) => {
  switch (type) {
    case "Critical":
      return "bg-red-100 text-red-700";

    case "Success":
      return "bg-green-100 text-green-700";

    case "Governance":
      return "bg-purple-100 text-purple-700";

    default:
      return "bg-blue-100 text-blue-700";
  }
};

const Notifications = () => {
  return (
    <PageContainer
      title="Notifications Center"
      subtitle="Enterprise alerts, forecasting events and AI intelligence updates"
    >
      {/* KPI SECTION */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Bell
            size={26}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Total Notifications
          </p>

          <h3 className="text-3xl font-bold mt-2">
            128
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <AlertTriangle
            size={26}
            className="text-red-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Critical Alerts
          </p>

          <h3 className="text-3xl font-bold mt-2">
            8
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <CheckCircle2
            size={26}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Resolved Events
          </p>

          <h3 className="text-3xl font-bold mt-2">
            94
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Brain
            size={26}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            AI Insights
          </p>

          <h3 className="text-3xl font-bold mt-2">
            26
          </h3>
        </div>

      </div>

      {/* MAIN NOTIFICATION PANEL */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="text-lg font-semibold">
            Recent Notifications
          </h3>

          <p className="text-sm text-slate-500">
            Real-time forecasting and governance updates
          </p>

        </div>

        <div className="divide-y divide-slate-100">

          {notifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="p-5 hover:bg-slate-50 transition"
              >
                <div className="flex items-start gap-4">

                  <div
                    className="
                      h-12
                      w-12
                      rounded-xl
                      bg-slate-100
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      size={22}
                      className="text-slate-700"
                    />
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center justify-between">

                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <span
                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          ${getBadgeColor(item.type)}
                        `}
                      >
                        {item.type}
                      </span>

                    </div>

                    <p className="text-slate-500 mt-2">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 mt-3 text-sm text-slate-400">
                      <Clock size={14} />
                      {item.time}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* EXECUTIVE SUMMARY */}

      <div className="grid grid-cols-12 gap-4">

        <div className="col-span-12 xl:col-span-4">

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

            <h3 className="font-semibold mb-5">
              Alert Summary
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Critical</span>
                <span className="font-semibold text-red-600">
                  8
                </span>
              </div>

              <div className="flex justify-between">
                <span>Warnings</span>
                <span className="font-semibold text-amber-600">
                  14
                </span>
              </div>

              <div className="flex justify-between">
                <span>Information</span>
                <span className="font-semibold text-blue-600">
                  62
                </span>
              </div>

              <div className="flex justify-between">
                <span>Resolved</span>
                <span className="font-semibold text-green-600">
                  94
                </span>
              </div>

            </div>

          </div>

        </div>

        <div className="col-span-12 xl:col-span-8">

          <div
            className="
              rounded-2xl
              bg-gradient-to-r
              from-slate-950
              via-blue-950
              to-slate-950
              p-6
              text-white
              h-full
            "
          >

            <div className="flex items-center gap-3 mb-5">

              <Sparkles size={22} />

              <h3 className="text-xl font-bold">
                Notification Intelligence
              </h3>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <div>
                <h4 className="text-cyan-300 font-semibold">
                  Forecast Monitoring
                </h4>

                <p className="text-slate-300 mt-2">
                  AI monitoring detected demand growth trends
                  across major product categories.
                </p>
              </div>

              <div>
                <h4 className="text-green-300 font-semibold">
                  System Health
                </h4>

                <p className="text-slate-300 mt-2">
                  Forecasting infrastructure operating
                  within enterprise SLA targets.
                </p>
              </div>

              <div>
                <h4 className="text-yellow-300 font-semibold">
                  Governance Updates
                </h4>

                <p className="text-slate-300 mt-2">
                  Compliance monitoring remains fully
                  aligned with governance policies.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </PageContainer>
  );
};

export default Notifications;