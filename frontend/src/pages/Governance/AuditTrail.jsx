import React from "react";
import {
  ShieldCheck,
  Clock,
  User,
  Brain,
  Database,
  AlertTriangle,
  CheckCircle2,
  FileText,
} from "lucide-react";

const auditLogs = [
  {
    id: 1,
    event: "Forecast Model Retrained",
    user: "AI Scheduler",
    time: "10 Minutes Ago",
    severity: "Info",
    icon: Brain,
  },
  {
    id: 2,
    event: "Dataset Updated",
    user: "Admin User",
    time: "45 Minutes Ago",
    severity: "Medium",
    icon: Database,
  },
  {
    id: 3,
    event: "Compliance Validation Completed",
    user: "Governance Engine",
    time: "2 Hours Ago",
    severity: "Success",
    icon: CheckCircle2,
  },
  {
    id: 4,
    event: "Unauthorized Access Attempt",
    user: "Unknown User",
    time: "5 Hours Ago",
    severity: "Critical",
    icon: AlertTriangle,
  },
  {
    id: 5,
    event: "Forecast Report Generated",
    user: "Business Analyst",
    time: "Yesterday",
    severity: "Info",
    icon: FileText,
  },
];

const getSeverityStyle = (severity) => {
  switch (severity) {
    case "Critical":
      return "bg-red-100 text-red-700";

    case "Success":
      return "bg-green-100 text-green-700";

    case "Medium":
      return "bg-amber-100 text-amber-700";

    default:
      return "bg-blue-100 text-blue-700";
  }
};

const AuditTrail = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <ShieldCheck
            size={26}
            className="text-blue-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Audit Trail
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Enterprise governance activity monitoring and compliance tracking
            </p>
          </div>

        </div>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <FileText
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Audit Events
          </p>

          <h3 className="text-3xl font-bold mt-2">
            12,458
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <User
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Active Users
          </p>

          <h3 className="text-3xl font-bold mt-2">
            184
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <CheckCircle2
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Passed Audits
          </p>

          <h3 className="text-3xl font-bold mt-2">
            124
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <AlertTriangle
            size={24}
            className="text-red-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Critical Events
          </p>

          <h3 className="text-3xl font-bold mt-2">
            3
          </h3>
        </div>

      </div>

      {/* Audit Timeline */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold text-lg">
            Recent Audit Activity
          </h3>

          <p className="text-sm text-slate-500">
            Enterprise audit and governance event history
          </p>

        </div>

        <div className="p-5 space-y-4">

          {auditLogs.map((log) => {
            const Icon = log.icon;

            return (
              <div
                key={log.id}
                className="
                  flex
                  items-start
                  gap-4
                  p-4
                  rounded-xl
                  border
                  border-slate-100
                  hover:bg-slate-50
                  transition
                "
              >
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
                      {log.event}
                    </h4>

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${getSeverityStyle(log.severity)}
                      `}
                    >
                      {log.severity}
                    </span>

                  </div>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500">

                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {log.user}
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {log.time}
                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Audit Intelligence */}

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

        <h3 className="text-xl font-bold mb-5">
          Audit Intelligence
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Compliance Monitoring
            </h4>

            <p className="text-slate-300 mt-2">
              All governance activities are continuously
              tracked and audited.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Risk Visibility
            </h4>

            <p className="text-slate-300 mt-2">
              Real-time monitoring enables rapid
              identification of governance risks.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Audit Readiness
            </h4>

            <p className="text-slate-300 mt-2">
              Enterprise systems remain fully prepared
              for regulatory reviews and audits.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AuditTrail;