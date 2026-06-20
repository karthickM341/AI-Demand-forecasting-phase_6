import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/ui/PageHeader";
import SearchBar from "../../components/ui/SearchBar";
import UserKPIs from "./UserKPIs";
import UserDirectory from "./UserDirectory";
import UserAnalytics from "./UserAnalytics";
import UserRoles from "./UserRoles";
import UserActivity from "./UserActivity";

const Users = () => {
  return (
    <PageContainer
      title="User Management"
      subtitle="Enterprise user administration, access control and activity monitoring"
    >
      <div className="space-y-4">

        {/* KPI SECTION */}
        <UserKPIs />

        {/* MAIN GRID */}

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-12 xl:col-span-8">
            <UserDirectory />
          </div>

          <div className="col-span-12 xl:col-span-4">
            <UserRoles />
          </div>

        </div>

        {/* ANALYTICS */}

        <UserAnalytics />

        {/* USER ACTIVITY */}

        <UserActivity />

      </div>
    </PageContainer>
  );
};

export default Users;