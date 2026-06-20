import React from "react";
import {
  BarChart3,
  Upload,
  Database,
  TrendingUp,
  FileSpreadsheet,
  Users,
  Activity,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const analyticsData = [
  {
    title: "Total Uploads",
    value: "12,486",
    growth: "+18%",
    icon: Upload,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Datasets Processed",
    value: "8,245",
    growth: "+12%",
    icon: Database,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Data Volume",
    value: "4.8 TB",
    growth: "+22%",
    icon: FileSpreadsheet,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Active Users",
    value: "4,286",
    growth: "+9%",
    icon: Users,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

const uploadTrends = [
  {
    department: "Sales",
    uploads: 92,
  },
  {
    department: "Inventory",
    uploads: 84,
  },
  {
    department: "Operations",
    uploads: 76,
  },
  {
    department: "Finance",
    uploads: 68,
  },
];

const UploadAnalytics = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

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
          Upload Analytics
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Dataset ingestion trends, processing metrics and platform usage analytics
        </p>
      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {analyticsData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                shadow-sm
                p-5
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
                    ${item.bg}
                  `}
                >
                  <Icon
                    size={24}
                    className={item.color}
                  />
                </div>

                <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                  <ArrowUpRight size={16} />
                  {item.growth}
                </div>

              </div>

              <p className="text-sm text-slate-500 mt-4">
                {item.title}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {item.value}
              </h3>

            </div>
          );
        })}
      </div>

      {/* Upload Trends */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Department Upload Activity
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Upload performance across business departments
          </p>

        </div>

        <div className="p-5 space-y-5">

          {uploadTrends.map((item) => (
            <div key={item.department}>

              <div className="flex justify-between mb-2">

                <span className="font-medium">
                  {item.department}
                </span>

                <span className="font-semibold">
                  {item.uploads}%
                </span>

              </div>

              <div className="w-full h-3 bg-slate-100 rounded-full">

                <div
                  className="h-3 bg-blue-600 rounded-full"
                  style={{
                    width: `${item.uploads}%`,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Analytics Insights */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <BarChart3
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Data Growth
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Dataset uploads increased significantly
            across enterprise business units.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <TrendingUp
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Processing Efficiency
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Data ingestion pipelines maintain
            high throughput and reliability.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Activity
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Platform Utilization
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            User engagement continues to grow
            with increasing dataset submissions.
          </p>

        </div>

      </div>

      {/* AI Analytics Intelligence */}

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
            Upload Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Upload Trends
            </h4>

            <p className="text-slate-300 mt-2">
              Sales and inventory datasets are driving
              the highest upload activity this month.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Data Quality
            </h4>

            <p className="text-slate-300 mt-2">
              AI validation shows improving dataset
              quality across all departments.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Expand automated ingestion workflows
              to improve forecasting readiness.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UploadAnalytics;