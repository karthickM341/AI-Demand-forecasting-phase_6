import React from "react";
import {
  Upload,
  Database,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  HardDrive,
  ArrowUpRight,
  Brain,
} from "lucide-react";

const uploadMetrics = [
  {
    title: "Total Uploads",
    value: "12,486",
    growth: "+18%",
    icon: Upload,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Datasets",
    value: "248",
    growth: "+12%",
    icon: Database,
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Success Rate",
    value: "97.8%",
    growth: "+4%",
    icon: CheckCircle2,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Validation Issues",
    value: "14",
    growth: "-22%",
    icon: AlertTriangle,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Files Processed",
    value: "8,425",
    growth: "+15%",
    icon: FileSpreadsheet,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Storage Used",
    value: "4.8 TB",
    growth: "+8%",
    icon: HardDrive,
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "AI Validations",
    value: "11,920",
    growth: "+25%",
    icon: Brain,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Forecast Ready",
    value: "92%",
    growth: "+7%",
    icon: Database,
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
  },
];

const UploadKPIs = () => {
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
          Upload Performance Dashboard
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Enterprise dataset ingestion, validation and forecasting readiness metrics
        </p>
      </div>

      {/* KPI Grid */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-4
        "
      >
        {uploadMetrics.map((metric) => {
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

      {/* Upload Health */}

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
          Upload Health Overview
        </h3>

        <div className="space-y-5">

          <div>

            <div className="flex justify-between mb-2">
              <span>Upload Success Rate</span>
              <span className="font-semibold">
                97.8%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: "97.8%" }}
              />
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Dataset Quality Score</span>
              <span className="font-semibold">
                94%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-blue-500 rounded-full"
                style={{ width: "94%" }}
              />
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Forecast Readiness</span>
              <span className="font-semibold">
                92%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">
              <div
                className="h-3 bg-purple-500 rounded-full"
                style={{ width: "92%" }}
              />
            </div>

          </div>

        </div>

      </div>

      {/* AI Intelligence */}

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
          Upload Intelligence Center
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Dataset Quality
            </h4>

            <p className="text-slate-300 mt-2">
              AI validation indicates excellent dataset quality with minimal missing values.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Processing Efficiency
            </h4>

            <p className="text-slate-300 mt-2">
              Upload processing times improved by 15% compared to last month.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Increase automated validation rules to further improve forecast accuracy.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UploadKPIs;