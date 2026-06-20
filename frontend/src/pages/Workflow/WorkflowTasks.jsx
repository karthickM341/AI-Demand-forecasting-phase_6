import React from "react";
import {
  ClipboardCheck,
  Clock,
  CheckCircle2,
  AlertTriangle,
  User,
  Calendar,
  ArrowRight,
  Sparkles,
  Filter,
  Search,
} from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Approve Demand Forecast",
    owner: "Rithick",
    priority: "High",
    dueDate: "Today",
    status: "Pending",
  },
  {
    id: 2,
    title: "Review Inventory Plan",
    owner: "Operations Team",
    priority: "Medium",
    dueDate: "Tomorrow",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Validate Sales Dataset",
    owner: "Analytics Team",
    priority: "High",
    dueDate: "Today",
    status: "Pending",
  },
  {
    id: 4,
    title: "Publish Executive Report",
    owner: "Management",
    priority: "Low",
    dueDate: "Friday",
    status: "Completed",
  },
];

const WorkflowTasks = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-amber-100 text-amber-700";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-amber-600";
      default:
        return "text-green-600";
    }
  };

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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Workflow Task Center
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Manage workflow approvals, assignments and execution tasks
            </p>
          </div>

          <div className="flex gap-3">

            <div className="relative">
              <Search
                size={16}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="text"
                placeholder="Search tasks..."
                className="
                  h-10
                  pl-9
                  pr-4
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
                border
                border-slate-300
                hover:bg-slate-50
              "
            >
              <Filter size={16} />
              Filter
            </button>

          </div>

        </div>
      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <ClipboardCheck size={24} className="text-blue-600" />
          <p className="text-sm text-slate-500 mt-3">Total Tasks</p>
          <h3 className="text-3xl font-bold mt-2">1,284</h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <Clock size={24} className="text-amber-600" />
          <p className="text-sm text-slate-500 mt-3">Pending</p>
          <h3 className="text-3xl font-bold mt-2">124</h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <CheckCircle2 size={24} className="text-green-600" />
          <p className="text-sm text-slate-500 mt-3">Completed</p>
          <h3 className="text-3xl font-bold mt-2">1,102</h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <AlertTriangle size={24} className="text-red-600" />
          <p className="text-sm text-slate-500 mt-3">Overdue</p>
          <h3 className="text-3xl font-bold mt-2">58</h3>
        </div>

      </div>

      {/* TASK LIST */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
        "
      >
        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Active Workflow Tasks
          </h3>

        </div>

        <div className="divide-y divide-slate-100">

          {tasks.map((task) => (
            <div
              key={task.id}
              className="
                p-5
                hover:bg-slate-50
                transition-all
              "
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                <div>

                  <div className="flex items-center gap-3">

                    <h4 className="font-semibold text-slate-900">
                      {task.title}
                    </h4>

                    <span
                      className={`
                        text-xs
                        font-semibold
                        ${getPriorityColor(task.priority)}
                      `}
                    >
                      {task.priority}
                    </span>

                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">

                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {task.owner}
                    </span>

                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {task.dueDate}
                    </span>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      ${getStatusColor(task.status)}
                    `}
                  >
                    {task.status}
                  </span>

                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-xl
                      bg-blue-600
                      text-white
                      hover:bg-blue-700
                    "
                  >
                    Open
                    <ArrowRight size={14} />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* TASK PERFORMANCE */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <Clock size={24} className="text-blue-600" />

          <h3 className="font-semibold mt-4">
            Task Efficiency
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Average workflow completion time reduced
            by 18% this quarter.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <CheckCircle2 size={24} className="text-green-600" />

          <h3 className="font-semibold mt-4">
            Completion Rate
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Enterprise task completion remains above
            SLA performance targets.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <AlertTriangle size={24} className="text-amber-600" />

          <h3 className="font-semibold mt-4">
            Risk Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            AI identifies approval bottlenecks before
            workflow delays occur.
          </p>
        </div>

      </div>

      {/* AI TASK INTELLIGENCE */}

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
            Task Intelligence Center
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Smart Prioritization
            </h4>

            <p className="text-slate-300 mt-2">
              AI dynamically prioritizes workflow tasks
              based on business impact and urgency.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Productivity Insights
            </h4>

            <p className="text-slate-300 mt-2">
              Teams complete forecasting approvals
              24% faster than previous quarter.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Enable automated approval routing for
              low-risk operational workflows.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default WorkflowTasks;