import React from "react";
import {
  Calendar,
  Clock,
  FileText,
  CheckCircle2,
  AlertTriangle,
  PlayCircle,
  Brain,
  Sparkles,
  Mail,
} from "lucide-react";

const scheduledReports = [
  {
    id: 1,
    name: "Daily Demand Forecast",
    frequency: "Daily",
    nextRun: "Tomorrow 08:00 AM",
    status: "Active",
  },
  {
    id: 2,
    name: "Revenue Analytics Report",
    frequency: "Weekly",
    nextRun: "Monday 09:00 AM",
    status: "Active",
  },
  {
    id: 3,
    name: "Inventory Optimization",
    frequency: "Weekly",
    nextRun: "Friday 06:00 PM",
    status: "Pending",
  },
  {
    id: 4,
    name: "Executive Business Summary",
    frequency: "Monthly",
    nextRun: "1st July 08:00 AM",
    status: "Active",
  },
];

const ScheduledReports = () => {
  return (
    <div className="space-y-4">

      {/* HEADER */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          p-5
        "
      >
        <h2 className="text-xl font-bold text-slate-900">
          Scheduled Reports
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Automated reporting schedules and delivery management
        </p>
      </div>

      {/* KPI SECTION */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Calendar
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Scheduled Reports
          </p>

          <h3 className="text-3xl font-bold mt-2">
            324
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Mail
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Deliveries Today
          </p>

          <h3 className="text-3xl font-bold mt-2">
            48
          </h3>

        </div>

      </div>

      {/* SCHEDULE LIST */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Active Report Schedules
          </h3>

        </div>

        <div className="divide-y divide-slate-100">

          {scheduledReports.map((report) => (
            <div
              key={report.id}
              className="p-5 hover:bg-slate-50 transition"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      h-12
                      w-12
                      rounded-xl
                      bg-blue-50
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FileText
                      size={22}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <h4 className="font-semibold">
                      {report.name}
                    </h4>

                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500">

                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {report.frequency}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {report.nextRun}
                      </span>

                    </div>

                  </div>

                </div>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    ${
                      report.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }
                  `}
                >
                  {report.status}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* PERFORMANCE CARDS */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Successful Deliveries
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            99.2% report delivery success rate across
            all scheduled workflows.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <PlayCircle
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Automation Efficiency
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Automated reporting reduces manual effort
            and improves reporting consistency.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <AlertTriangle
            size={24}
            className="text-amber-600"
          />

          <h3 className="font-semibold mt-4">
            Schedule Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Monitor pending reports to ensure timely
            executive report delivery.
          </p>

        </div>

      </div>

      {/* AI SECTION */}

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
            Reporting Automation Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Delivery Optimization
            </h4>

            <p className="text-slate-300 mt-2">
              AI scheduling ensures reports reach
              stakeholders at optimal times.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Workflow Automation
            </h4>

            <p className="text-slate-300 mt-2">
              Automated reporting improves operational
              efficiency and governance compliance.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              AI Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Expand scheduled executive reporting
              to improve strategic decision-making.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ScheduledReports;