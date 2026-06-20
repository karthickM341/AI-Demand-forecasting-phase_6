import React from "react";
import {
  Activity,
  User,
  Shield,
  LogIn,
  FileText,
  AlertTriangle,
  Clock,
  Sparkles,
} from "lucide-react";

const recentActivities = [
  {
    id: 1,
    user: "Admin User",
    action: "Logged into platform",
    time: "2 minutes ago",
    type: "login",
  },
  {
    id: 2,
    user: "Sarah Johnson",
    action: "Generated Forecast Report",
    time: "15 minutes ago",
    type: "report",
  },
  {
    id: 3,
    user: "Michael Brown",
    action: "Updated Inventory Plan",
    time: "28 minutes ago",
    type: "update",
  },
  {
    id: 4,
    user: "Security System",
    action: "Failed Login Attempt Detected",
    time: "1 hour ago",
    type: "security",
  },
  {
    id: 5,
    user: "David Wilson",
    action: "Uploaded Dataset",
    time: "2 hours ago",
    type: "upload",
  },
];

const activityStats = [
  {
    title: "Daily Logins",
    value: "4,286",
    color: "text-blue-600",
  },
  {
    title: "Active Sessions",
    value: "326",
    color: "text-green-600",
  },
  {
    title: "Security Events",
    value: "12",
    color: "text-amber-600",
  },
  {
    title: "User Actions",
    value: "18.4K",
    color: "text-purple-600",
  },
];

const getActivityIcon = (type) => {
  switch (type) {
    case "login":
      return <LogIn size={18} className="text-blue-600" />;
    case "report":
      return <FileText size={18} className="text-green-600" />;
    case "security":
      return <Shield size={18} className="text-red-600" />;
    case "upload":
      return <Activity size={18} className="text-cyan-600" />;
    default:
      return <User size={18} className="text-purple-600" />;
  }
};

const UserActivity = () => {
  return (
    <div className="space-y-4">

      {/* HEADER */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        <h2 className="text-xl font-bold text-slate-900">
          User Activity Monitoring
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Real-time user activity, audit tracking and security monitoring
        </p>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">

        {activityStats.map((item) => (
          <div
            key={item.title}
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              shadow-sm
              p-5
            "
          >
            <p className="text-sm text-slate-500">
              {item.title}
            </p>

            <h3
              className={`
                text-3xl
                font-bold
                mt-2
                ${item.color}
              `}
            >
              {item.value}
            </h3>

          </div>
        ))}

      </div>

      {/* ACTIVITY FEED */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Recent Activity Feed
          </h3>

        </div>

        <div className="divide-y divide-slate-100">

          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="
                p-5
                hover:bg-slate-50
                transition-all
              "
            >
              <div className="flex items-start gap-4">

                <div
                  className="
                    h-10
                    w-10
                    rounded-xl
                    bg-slate-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  {getActivityIcon(activity.type)}
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        {activity.user}
                      </h4>

                      <p className="text-sm text-slate-600 mt-1">
                        {activity.action}
                      </p>

                    </div>

                    <div className="flex items-center gap-2 text-slate-500 text-sm">

                      <Clock size={14} />

                      {activity.time}

                    </div>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ACTIVITY INSIGHTS */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <User
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            User Engagement
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Platform engagement increased by 18%
            compared to the previous month.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Shield
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Security Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Security controls continue monitoring
            all authentication activities.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <AlertTriangle
            size={24}
            className="text-amber-600"
          />

          <h3 className="font-semibold mt-4">
            Risk Events
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            No critical user security incidents
            detected in the last 24 hours.
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
            User Activity Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Activity Trends
            </h4>

            <p className="text-slate-300 mt-2">
              User engagement continues to rise
              across forecasting and analytics modules.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Security Analysis
            </h4>

            <p className="text-slate-300 mt-2">
              AI monitoring identifies unusual
              activity patterns in real-time.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Enable advanced audit logging for
              improved governance visibility.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserActivity;