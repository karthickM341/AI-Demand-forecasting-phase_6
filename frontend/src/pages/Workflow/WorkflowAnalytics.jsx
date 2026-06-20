import React from "react";
import {
  Activity,
  Workflow,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const analyticsMetrics = [
  {
    title: "Workflow Success Rate",
    value: "98.4%",
    growth: "+4.2%",
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Automation Coverage",
    value: "87%",
    growth: "+12%",
    icon: Workflow,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Avg Execution Time",
    value: "2.4 Min",
    growth: "-18%",
    icon: Clock,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Efficiency Score",
    value: "94%",
    growth: "+7%",
    icon: TrendingUp,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

const workflowPerformance = [
  {
    workflow: "Demand Forecast Workflow",
    completion: 96,
  },
  {
    workflow: "Inventory Planning Workflow",
    completion: 91,
  },
  {
    workflow: "Report Distribution Workflow",
    completion: 98,
  },
  {
    workflow: "Approval Management Workflow",
    completion: 87,
  },
];

const WorkflowAnalytics = () => {
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
          Workflow Analytics
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Process performance, automation efficiency and workflow intelligence
        </p>
      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {analyticsMetrics.map((metric) => {
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
                    ${metric.bg}
                  `}
                >
                  <Icon
                    size={24}
                    className={metric.color}
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

              <p className="text-sm text-slate-500 mt-4">
                {metric.title}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {metric.value}
              </h3>

            </div>
          );
        })}
      </div>

      {/* PERFORMANCE ANALYTICS */}

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
            Workflow Performance Analysis
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Workflow execution and completion tracking
          </p>

        </div>

        <div className="p-5 space-y-5">

          {workflowPerformance.map((item) => (
            <div key={item.workflow}>

              <div className="flex justify-between mb-2">

                <span className="font-medium">
                  {item.workflow}
                </span>

                <span className="font-semibold">
                  {item.completion}%
                </span>

              </div>

              <div className="w-full h-3 bg-slate-100 rounded-full">

                <div
                  className="h-3 bg-blue-600 rounded-full"
                  style={{
                    width: `${item.completion}%`,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ANALYTICS INSIGHTS */}

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
          <BarChart3
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Process Performance
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Workflow execution efficiency improved
            significantly across all departments.
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
            Automation Impact
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Automated workflows reduced manual
            processing effort by 42%.
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
          <AlertTriangle
            size={24}
            className="text-amber-600"
          />

          <h3 className="font-semibold mt-4">
            Bottleneck Detection
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Approval workflows show occasional
            processing delays during peak periods.
          </p>

        </div>

      </div>

      {/* EXECUTION HEALTH */}

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
              <span>Execution Reliability</span>
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
              <span>Automation Maturity</span>
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
              <span>Process Optimization</span>
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
              Process Intelligence
            </h4>

            <p className="text-slate-300 mt-2">
              AI continuously analyzes workflow
              execution patterns and identifies
              optimization opportunities.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Automation Insights
            </h4>

            <p className="text-slate-300 mt-2">
              Forecast generation and reporting
              workflows demonstrate the highest
              automation efficiency.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Increase approval automation and
              predictive task routing to further
              improve operational efficiency.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WorkflowAnalytics;