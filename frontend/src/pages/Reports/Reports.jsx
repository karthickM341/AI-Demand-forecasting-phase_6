import PageContainer from "../../components/PageContainer";

import ReportsKPIs from "./ReportsKPIs";
import ReportCenter from "./ReportCenter";
import ScheduledReports from "./ScheduledReports";
import ReportAnalytics from "./ReportAnalytics";
import ExecutiveReports from "./ExecutiveReports";

const Reports = () => {
  return (
    <PageContainer
      title="Reports Center"
      subtitle="Enterprise reporting, business intelligence and executive insights"
    >
      <div className="space-y-4">

        {/* KPI SECTION */}
        <ReportsKPIs />

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-12 xl:col-span-8">
            <ReportCenter />
          </div>

          <div className="col-span-12 xl:col-span-4">
            <ScheduledReports />
          </div>

        </div>

        {/* REPORT ANALYTICS */}
        <ReportAnalytics />

        {/* EXECUTIVE REPORTS */}
        <ExecutiveReports />

      </div>
    </PageContainer>
  );
};

export default Reports;