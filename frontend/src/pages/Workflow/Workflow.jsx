import PageContainer from "../../components/PageContainer";

import WorkflowKPIs from "./WorkflowKPIs";
import WorkflowPipeline from "./WorkflowPipeline";
import WorkflowAnalytics from "./WorkflowAnalytics";
import WorkflowTasks from "./WorkflowTasks";
import WorkflowAutomation from "./WorkflowAutomation";

const Workflow = () => {
  return (
    <PageContainer
      title="Workflow Management"
      subtitle="Enterprise workflow automation, task orchestration and process monitoring"
    >
      <div className="space-y-4">

        {/* KPI SECTION */}

        <WorkflowKPIs />

        {/* MAIN GRID */}

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-12 xl:col-span-8">
            <WorkflowPipeline />
          </div>

          <div className="col-span-12 xl:col-span-4">
            <WorkflowAutomation />
          </div>

        </div>

        {/* ANALYTICS */}

        <WorkflowAnalytics />

        {/* TASK MANAGEMENT */}

        <WorkflowTasks />

        {/* AI INSIGHTS */}

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
            Workflow Intelligence Center
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <div>

              <h4 className="text-cyan-300 font-semibold">
                Automation Efficiency
              </h4>

              <p className="text-slate-300 mt-2">
                AI identifies opportunities to automate
                repetitive forecasting and planning tasks.
              </p>

            </div>

            <div>

              <h4 className="text-green-300 font-semibold">
                Process Optimization
              </h4>

              <p className="text-slate-300 mt-2">
                Workflow execution time improved by 23%
                through intelligent task scheduling.
              </p>

            </div>

            <div>

              <h4 className="text-yellow-300 font-semibold">
                Recommendation
              </h4>

              <p className="text-slate-300 mt-2">
                Enable predictive workflow routing to
                improve operational efficiency.
              </p>

            </div>

          </div>

        </div>

      </div>
    </PageContainer>
  );
};

export default Workflow;