import React from "react";
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  Brain,
  Database,
  ShieldCheck,
  User,
  ArrowRight,
} from "lucide-react";

const approvalRequests = [
  {
    id: 1,
    title: "Forecast Model Deployment",
    category: "AI Model",
    requester: "Data Science Team",
    priority: "High",
    submitted: "2 Hours Ago",
    status: "Pending",
    icon: Brain,
  },
  {
    id: 2,
    title: "Dataset Validation Approval",
    category: "Data Governance",
    requester: "Analytics Team",
    priority: "Medium",
    submitted: "5 Hours Ago",
    status: "Pending",
    icon: Database,
  },
  {
    id: 3,
    title: "Compliance Policy Update",
    category: "Governance",
    requester: "Risk Team",
    priority: "Critical",
    submitted: "Today",
    status: "Pending",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Forecast Report Release",
    category: "Reporting",
    requester: "Business Team",
    priority: "Low",
    submitted: "Today",
    status: "Pending",
    icon: CheckCircle2,
  },
];

const getPriorityStyle = (priority) => {
  switch (priority) {
    case "Critical":
      return "bg-red-100 text-red-700";

    case "High":
      return "bg-orange-100 text-orange-700";

    case "Medium":
      return "bg-blue-100 text-blue-700";

    default:
      return "bg-green-100 text-green-700";
  }
};

const PendingApprovals = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <Clock
            size={28}
            className="text-amber-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Pending Approvals
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Governance workflow approvals awaiting review
            </p>
          </div>

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Clock
            size={24}
            className="text-amber-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Pending Requests
          </p>

          <h3 className="text-3xl font-bold mt-2">
            24
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <AlertTriangle
            size={24}
            className="text-red-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Critical Reviews
          </p>

          <h3 className="text-3xl font-bold mt-2">
            4
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Approved Today
          </p>

          <h3 className="text-3xl font-bold mt-2">
            18
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <User
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Active Reviewers
          </p>

          <h3 className="text-3xl font-bold mt-2">
            12
          </h3>
        </div>

      </div>

      {/* Approval Queue */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="text-lg font-semibold">
            Approval Queue
          </h3>

          <p className="text-sm text-slate-500">
            Governance and compliance approval workflow
          </p>

        </div>

        <div className="divide-y divide-slate-100">

          {approvalRequests.map((request) => {
            const Icon = request.icon;

            return (
              <div
                key={request.id}
                className="p-5 hover:bg-slate-50 transition"
              >
                <div className="flex items-start justify-between gap-4">

                  <div className="flex gap-4">

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

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        {request.title}
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        {request.category}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500">

                        <span>
                          Requested By:
                          {" "}
                          {request.requester}
                        </span>

                        <span>
                          Submitted:
                          {" "}
                          {request.submitted}
                        </span>

                      </div>

                    </div>

                  </div>

                  <div className="text-right">

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${getPriorityStyle(request.priority)}
                      `}
                    >
                      {request.priority}
                    </span>

                    <div className="mt-3">

                      <button
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-xl
                          bg-slate-900
                          text-white
                          hover:bg-slate-800
                          text-sm
                        "
                      >
                        Review
                        <ArrowRight size={16} />
                      </button>

                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* Executive Governance Intelligence */}

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
          Approval Intelligence
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Workflow Efficiency
            </h4>

            <p className="text-slate-300 mt-2">
              Average approval turnaround time has improved
              by 22% this month.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Governance Readiness
            </h4>

            <p className="text-slate-300 mt-2">
              Approval backlog remains within enterprise
              operational thresholds.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Risk Visibility
            </h4>

            <p className="text-slate-300 mt-2">
              Critical approval requests are prioritized
              automatically for faster review.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default PendingApprovals;