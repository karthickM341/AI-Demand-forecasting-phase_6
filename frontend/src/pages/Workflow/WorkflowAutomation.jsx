import React from "react";
import {
  Bot,
  Zap,
  Clock,
  CheckCircle2,
  PlayCircle,
  PauseCircle,
  RefreshCw,
  Settings,
  Sparkles,
  Activity,
} from "lucide-react";

const automations = [
  {
    id: 1,
    name: "Demand Forecast Automation",
    schedule: "Every 6 Hours",
    status: "Running",
    successRate: "99.2%",
  },
  {
    id: 2,
    name: "Inventory Optimization",
    schedule: "Daily",
    status: "Running",
    successRate: "97.8%",
  },
  {
    id: 3,
    name: "Executive Report Distribution",
    schedule: "Weekly",
    status: "Paused",
    successRate: "95.4%",
  },
  {
    id: 4,
    name: "Model Retraining Pipeline",
    schedule: "Monthly",
    status: "Running",
    successRate: "98.6%",
  },
];

const WorkflowAutomation = () => {
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
        <div className="flex items-center gap-3">

          <Bot
            size={24}
            className="text-blue-600"
          />

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              Automation Engine
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Intelligent workflow orchestration and automation management
            </p>

          </div>

        </div>

      </div>

      {/* KPI SECTION */}

      <div className="grid grid-cols-2 gap-4">

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
          <Zap
            size={24}
            className="text-yellow-500"
          />

          <p className="text-sm text-slate-500 mt-3">
            Active Automations
          </p>

          <h3 className="text-3xl font-bold mt-2">
            48
          </h3>

        </div>

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
          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Success Rate
          </p>

          <h3 className="text-3xl font-bold mt-2">
            98.4%
          </h3>

        </div>

      </div>

      {/* AUTOMATION LIST */}

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
            Active Automation Workflows
          </h3>

        </div>

        <div className="divide-y divide-slate-100">

          {automations.map((item) => (
            <div
              key={item.id}
              className="p-5"
            >
              <div className="flex items-start justify-between">

                <div>

                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">

                    <Clock size={14} />
                    {item.schedule}

                  </div>

                  <div className="mt-2 text-sm">

                    Success Rate:
                    <span className="font-semibold ml-1 text-green-600">
                      {item.successRate}
                    </span>

                  </div>

                </div>

                <div className="flex flex-col items-end gap-2">

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      ${
                        item.status === "Running"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }
                    `}
                  >
                    {item.status}
                  </span>

                  <div className="flex items-center gap-2">

                    <button
                      className="
                        h-9
                        w-9
                        rounded-lg
                        bg-green-50
                        text-green-600
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <PlayCircle size={16} />
                    </button>

                    <button
                      className="
                        h-9
                        w-9
                        rounded-lg
                        bg-amber-50
                        text-amber-600
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <PauseCircle size={16} />
                    </button>

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* AUTOMATION HEALTH */}

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

        <h3 className="font-semibold mb-5">
          Automation Health
        </h3>

        <div className="space-y-5">

          <div>

            <div className="flex justify-between mb-2">

              <span>Workflow Reliability</span>

              <span className="font-semibold">
                98%
              </span>

            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">

              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: "98%" }}
              />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <span>Automation Coverage</span>

              <span className="font-semibold">
                87%
              </span>

            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">

              <div
                className="h-3 bg-blue-500 rounded-full"
                style={{ width: "87%" }}
              />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <span>Execution Performance</span>

              <span className="font-semibold">
                95%
              </span>

            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">

              <div
                className="h-3 bg-purple-500 rounded-full"
                style={{ width: "95%" }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* QUICK ACTIONS */}

      <div className="grid md:grid-cols-3 gap-4">

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
          <RefreshCw
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Retraining Pipeline
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Automatically retrains forecasting
            models using updated datasets.
          </p>

        </div>

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
          <Settings
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Smart Scheduling
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Dynamic workflow scheduling based
            on workload and priorities.
          </p>

        </div>

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
          <Activity
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Live Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Continuous monitoring of workflow
            execution and automation health.
          </p>

        </div>

      </div>

      {/* AI AUTOMATION INTELLIGENCE */}

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
            Automation Intelligence Center
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Predictive Automation
            </h4>

            <p className="text-slate-300 mt-2">
              AI predicts workflow bottlenecks
              before operational impact occurs.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Optimization Engine
            </h4>

            <p className="text-slate-300 mt-2">
              Workflow routing continuously adapts
              to maximize execution efficiency.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Enable intelligent escalation rules
              for critical forecasting workflows.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WorkflowAutomation;