import React, { useState } from "react";
import {
  Bell,
  AlertTriangle,
  CheckCircle2,
  Brain,
  ShieldCheck,
  TrendingUp,
  Search,
  Filter,
  Clock,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Demand Spike Detected",
    description:
      "Product A demand increased by 28% above forecast expectations.",
    category: "Forecast",
    priority: "Critical",
    time: "5 mins ago",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Model Retraining Completed",
    description:
      "Forecasting model retrained successfully with latest data.",
    category: "AI",
    priority: "Info",
    time: "20 mins ago",
    icon: Brain,
  },
  {
    id: 3,
    title: "Governance Validation Passed",
    description:
      "Monthly governance review completed successfully.",
    category: "Governance",
    priority: "Success",
    time: "1 hour ago",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Inventory Risk Alert",
    description:
      "Inventory projected below safety stock threshold.",
    category: "Inventory",
    priority: "High",
    time: "2 hours ago",
    icon: AlertTriangle,
  },
  {
    id: 5,
    title: "Revenue Forecast Updated",
    description:
      "Quarterly revenue forecast increased by 18.4%.",
    category: "Business",
    priority: "Info",
    time: "3 hours ago",
    icon: CheckCircle2,
  },
];

const getPriorityStyle = (priority) => {
  switch (priority) {
    case "Critical":
      return "bg-red-100 text-red-700";

    case "High":
      return "bg-orange-100 text-orange-700";

    case "Success":
      return "bg-green-100 text-green-700";

    default:
      return "bg-blue-100 text-blue-700";
  }
};

const NotificationList = () => {
  const [search, setSearch] = useState("");

  const filteredNotifications =
    notifications.filter((item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <Bell
            size={28}
            className="text-blue-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Notification List
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Enterprise notification monitoring and management
            </p>
          </div>

        </div>

      </div>

      {/* Filters */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex flex-col lg:flex-row gap-4">

          <div className="relative flex-1">

            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search notifications..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                pl-11
                pr-4
                h-11
                rounded-xl
                border
                border-slate-300
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          <button
            className="
              flex
              items-center
              gap-2
              px-4
              rounded-xl
              bg-slate-900
              text-white
            "
          >
            <Filter size={16} />
            Filter
          </button>

        </div>

      </div>

      {/* Notification Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100">

          <h3 className="text-lg font-semibold">
            Notification Feed
          </h3>

          <p className="text-sm text-slate-500">
            Real-time enterprise notifications
          </p>

        </div>

        <div className="divide-y divide-slate-100">

          {filteredNotifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  p-5
                  hover:bg-slate-50
                  transition
                "
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

                    <div className="flex items-center justify-between gap-4">

                      <div>

                        <h4 className="font-semibold text-slate-900">
                          {item.title}
                        </h4>

                        <p className="text-slate-500 mt-2">
                          {item.description}
                        </p>

                      </div>

                      <span
                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          ${getPriorityStyle(item.priority)}
                        `}
                      >
                        {item.priority}
                      </span>

                    </div>

                    <div className="flex flex-wrap gap-5 mt-4 text-sm text-slate-500">

                      <span>
                        Category:
                        {" "}
                        {item.category}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {item.time}
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Footer Summary */}

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

        <h3 className="text-xl font-bold mb-4">
          Notification Intelligence
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Forecast Alerts
            </h4>

            <p className="text-slate-300 mt-2">
              Forecast-related notifications increased
              due to seasonal demand fluctuations.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              System Health
            </h4>

            <p className="text-slate-300 mt-2">
              Platform health remains within enterprise
              SLA targets.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Governance Monitoring
            </h4>

            <p className="text-slate-300 mt-2">
              Compliance and governance notifications
              remain fully operational.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default NotificationList;