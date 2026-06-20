import PageContainer from "../../components/PageContainer";

import PlanningKPIs from "./PlanningKPIs";
import DemandPlanning from "./DemandPlanning";
import InventoryPlanning from "./InventoryPlanning";
import CapacityPlanning from "./CapacityPlanning";
import PlanningInsights from "./PlanningInsights";

const Planning = () => {
  return (
    <PageContainer
      title="Demand & Supply Planning"
      subtitle="Enterprise planning intelligence, inventory optimization and capacity forecasting"
    >
      <div className="space-y-4">

        {/* KPI SECTION */}
        <PlanningKPIs />

        {/* MAIN PLANNING GRID */}
        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-12 xl:col-span-8">
            <DemandPlanning />
          </div>

          <div className="col-span-12 xl:col-span-4">
            <InventoryPlanning />
          </div>

        </div>

        {/* CAPACITY PLANNING */}
        <CapacityPlanning />

        {/* AI INSIGHTS */}
        <PlanningInsights />

      </div>
    </PageContainer>
  );
};

export default Planning;