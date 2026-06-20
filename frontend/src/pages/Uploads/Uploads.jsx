import PageContainer from "../../components/PageContainer";

import UploadCenter from "./UploadCenter";
import UploadAnalytics from "./UploadAnalytics";
import UploadHistory from "./UploadHistory";
import DataQuality from "./DataQuality";
import UploadKPIs from "./UploadKPIs";

const Uploads = () => {
  return (
    <PageContainer
      title="Dataset Upload Center"
      subtitle="Enterprise data ingestion, validation and AI forecasting dataset management"
    >
      <div className="space-y-4">

        {/* KPI SECTION */}
        <UploadKPIs />

        {/* MAIN GRID */}

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-12 xl:col-span-8">
            <UploadCenter />
          </div>

          <div className="col-span-12 xl:col-span-4">
            <DataQuality />
          </div>

        </div>

        {/* ANALYTICS */}

        <UploadAnalytics />

        {/* HISTORY */}

        <UploadHistory />

      </div>
    </PageContainer>
  );
};

export default Uploads;