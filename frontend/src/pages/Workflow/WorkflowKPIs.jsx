import React from "react";
import {
  Workflow,
  CheckCircle2,
  Clock,
  Activity,
  Bot,
  AlertTriangle,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const workflowMetrics = [
  {
    title: "Active Workflows",
    value: "248",
    growth: "+12%",
    icon: Workflow,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Completed Tasks",
    value: "18.4K",
    growth: "+22%",
    icon: CheckCircle2,
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Pending Tasks",
    value: "426",
    growth: "-8%",
    icon: Clock,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Automation Rate",
    value: "87%",
    growth: "+15%",
    icon: Bot,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Execution Success",
    value: "98.4%",
    growth: "+4%",
    icon: Activity,
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Failed Jobs",
    value: "14",
    growth: "-21%",
    icon: AlertTriangle,
    iconColor: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Efficiency Score",
    value: "94%",
    growth: "+9%",
    icon: TrendingUp,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "AI Optimizations",
    value: "1,284",
    growth: "+31%",
    icon: Sparkles,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

const WorkflowKPIs = () => {
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
          Workflow Performance Dashboard
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Enterprise workflow execution, automation monitoring and process intelligence
        </p>
      </div>

      {/* KPI GRID */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-4
        "
      >
        {workflowMetrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                shadow-sm
                p-5
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div className="flex items-center justify-between">

                <div
                  className={`
                    h-12
                    w-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${metric.bgColor}
                  `}
                >
                  <Icon
                    size={24}
                    className={metric.iconColor}
                  />
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-green-600
                    text-sm
                    font-semibold
                  "
                >
                  <ArrowUpRight size={16} />
                  {metric.growth}
                </div>

              </div>

              <div className="mt-4">

                <p className="text-sm text-slate-500">
                  {metric.title}
                </p>

                <h3 className="text-3xl font-bold text-slate-900 mt-2">
                  {metric.value}
                </h3>

              </div>

            </div>
          );
        })}
      </div>

      {/* WORKFLOW HEALTH */}

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
        <h3 className="text-lg font-semibold mb-5">
          Workflow Health Overview
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
              <span>Process Efficiency</span>
              <span className="font-semibold">
                94%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-purple-500 rounded-full"
                style={{ width: "94%" }}
              />
            </div>

          </div>

        </div>

      </div>

      {/* AI WORKFLOW INTELLIGENCE */}

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
            Workflow Intelligence Center
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Process Automation
            </h4>

            <p className="text-slate-300 mt-2">
              AI-driven automation handles 87% of repetitive
              forecasting and planning workflows.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Execution Intelligence
            </h4>

            <p className="text-slate-300 mt-2">
              Workflow execution remains highly reliable
              with minimal operational interruptions.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Expand automated approval routing and AI task
              prioritization to improve efficiency further.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WorkflowKPIs;