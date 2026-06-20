import PageContainer from "../../components/PageContainer";

import ProfileSettings from "./ProfileSettings";
import SecuritySettings from "./SecuritySettings";
import SystemSettings from "./SystemSettings";
import NotificationSettings from "./NotificationSettings";
import AISettings from "./AISettings";

const Settings = () => {
  return (
    <PageContainer
      title="Platform Settings"
      subtitle="Enterprise configuration, security management and AI platform controls"
    >
      <div className="space-y-4">

        {/* SETTINGS OVERVIEW */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <p className="text-sm text-slate-500">
              Active Users
            </p>

            <h3 className="text-3xl font-bold mt-2">
              4,286
            </h3>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <p className="text-sm text-slate-500">
              Organizations
            </p>

            <h3 className="text-3xl font-bold mt-2">
              48
            </h3>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <p className="text-sm text-slate-500">
              Security Score
            </p>

            <h3 className="text-3xl font-bold mt-2">
              98%
            </h3>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <p className="text-sm text-slate-500">
              AI Accuracy
            </p>

            <h3 className="text-3xl font-bold mt-2">
              96.8%
            </h3>
          </div>

        </div>

        {/* SETTINGS GRID */}

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-12 xl:col-span-6">
            <ProfileSettings />
          </div>

          <div className="col-span-12 xl:col-span-6">
            <SecuritySettings />
          </div>

        </div>

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-12 xl:col-span-6">
            <NotificationSettings />
          </div>

          <div className="col-span-12 xl:col-span-6">
            <AISettings />
          </div>

        </div>

        <SystemSettings />

      </div>
    </PageContainer>
  );
};

export default Settings;