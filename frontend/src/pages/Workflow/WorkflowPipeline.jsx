import React from "react";
import {
  Database,
  Upload,
  Brain,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Clock,
  Activity,
  Sparkles,
} from "lucide-react";

const workflowStages = [
  {
    id: 1,
    title: "Data Collection",
    description: "Upload sales, inventory and demand datasets",
    status: "Completed",
    icon: Upload,
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: 2,
    title: "Data Validation",
    description: "Quality checks and preprocessing",
    status: "Completed",
    icon: Database,
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    title: "AI Forecasting",
    description: "Demand prediction model execution",
    status: "Running",
    icon: Brain,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 4,
    title: "Analytics Generation",
    description: "KPI and forecasting analytics",
    status: "Pending",
    icon: BarChart3,
    color: "bg-slate-50",
    iconColor: "text-slate-600",
  },
  {
    id: 5,
    title: "Executive Approval",
    description: "Governance review process",
    status: "Pending",
    icon: CheckCircle2,
    color: "bg-slate-50",
    iconColor: "text-slate-600",
  },
];

const executionHistory = [
  {
    workflow: "Demand Forecast Pipeline",
    duration: "2.3 min",
    status: "Success",
  },
  {
    workflow: "Inventory Planning Pipeline",
    duration: "1.8 min",
    status: "Success",
  },
  {
    workflow: "Executive Reporting Pipeline",
    duration: "3.1 min",
    status: "Running",
  },
];

const WorkflowPipeline = () => {
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
          Workflow Pipeline
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          End-to-end workflow orchestration and execution monitoring
        </p>
      </div>

      {/* PIPELINE FLOW */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          p-6
        "
      >
        <h3 className="font-semibold mb-6">
          Workflow Execution Flow
        </h3>

        <div className="space-y-4">

          {workflowStages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <div key={stage.id}>

                <div className="flex items-center gap-4">

                  <div
                    className={`
                      h-14
                      w-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      ${stage.color}
                    `}
                  >
                    <Icon
                      size={24}
                      className={stage.iconColor}
                    />
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center justify-between">

                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {stage.title}
                        </h4>

                        <p className="text-sm text-slate-500">
                          {stage.description}
                        </p>
                      </div>

                      <span
                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          ${
                            stage.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : stage.status === "Running"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-slate-100 text-slate-700"
                          }
                        `}
                      >
                        {stage.status}
                      </span>

                    </div>

                  </div>

                </div>

                {index < workflowStages.length - 1 && (
                  <div className="ml-7 my-2">
                    <ArrowRight
                      size={18}
                      className="text-slate-400"
                    />
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

      {/* EXECUTION HISTORY */}

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
            Recent Pipeline Executions
          </h3>

        </div>

        <div className="divide-y divide-slate-100">

          {executionHistory.map((item, index) => (
            <div
              key={index}
              className="p-5 flex items-center justify-between"
            >
              <div>

                <h4 className="font-medium">
                  {item.workflow}
                </h4>

                <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">

                  <Clock size={14} />
                  {item.duration}

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
                    item.status === "Success"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }
                `}
              >
                {item.status}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* PIPELINE PERFORMANCE */}

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
          <Activity
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Execution Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Real-time visibility into workflow execution
            and process performance.
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
          <Brain
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            AI Forecast Engine
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Intelligent forecasting workflows powered
            by machine learning pipelines.
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
          <BarChart3
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Process Insights
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Analytics-driven workflow optimization
            and bottleneck identification.
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
            Pipeline Intelligence Center
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Workflow Optimization
            </h4>

            <p className="text-slate-300 mt-2">
              AI continuously improves execution
              paths for faster forecasting delivery.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Execution Analysis
            </h4>

            <p className="text-slate-300 mt-2">
              Current workflow completion rate exceeds
              enterprise performance targets.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Increase automation in approval stages
              to reduce operational delays.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default WorkflowPipeline;