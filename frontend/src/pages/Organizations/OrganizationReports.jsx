import React from "react";
import {
  FileText,
  Download,
  Calendar,
  Building2,
  DollarSign,
  TrendingUp,
  Users,
  Activity,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const reports = [
  {
    id: 1,
    name: "Organization Performance Report",
    category: "Performance",
    generated: "Today",
    status: "Ready",
  },
  {
    id: 2,
    name: "Revenue Analytics Report",
    category: "Finance",
    generated: "Yesterday",
    status: "Ready",
  },
  {
    id: 3,
    name: "Forecast Accuracy Report",
    category: "Forecasting",
    generated: "2 Days Ago",
    status: "Processing",
  },
  {
    id: 4,
    name: "User Adoption Report",
    category: "Users",
    generated: "This Week",
    status: "Ready",
  },
];

const OrganizationReports = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <FileText
            size={28}
            className="text-blue-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Organization Reports
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Enterprise reporting, analytics and business intelligence
            </p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Building2
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Organizations
          </p>

          <h3 className="text-3xl font-bold mt-2">
            48
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <DollarSign
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Revenue Reports
          </p>

          <h3 className="text-3xl font-bold mt-2">
            126
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Users
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            User Reports
          </p>

          <h3 className="text-3xl font-bold mt-2">
            214
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Activity
            size={24}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Forecast Reports
          </p>

          <h3 className="text-3xl font-bold mt-2">
            342
          </h3>
        </div>

      </div>

      {/* Reports Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100">
          <h3 className="text-lg font-semibold">
            Available Reports
          </h3>

          <p className="text-sm text-slate-500">
            Enterprise business intelligence reports
          </p>
        </div>

        <div className="divide-y divide-slate-100">

          {reports.map((report) => (
            <div
              key={report.id}
              className="p-5 hover:bg-slate-50 transition"
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      h-12
                      w-12
                      rounded-xl
                      bg-blue-50
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FileText
                      size={22}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <h4 className="font-semibold text-slate-900">
                      {report.name}
                    </h4>

                    <div className="flex gap-4 mt-2 text-sm text-slate-500">
                      <span>{report.category}</span>

                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {report.generated}
                      </span>
                    </div>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      ${
                        report.status === "Ready"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }
                    `}
                  >
                    {report.status}
                  </span>

                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-xl
                      bg-slate-900
                      text-white
                      hover:bg-slate-800
                    "
                  >
                    <Download size={16} />
                    Download
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Report Categories */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <TrendingUp
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Revenue Reports
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Comprehensive financial and revenue
            forecasting reports.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Users
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            User Analytics
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            User activity, adoption and engagement
            reporting dashboard.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <CheckCircle2
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Compliance Reports
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Governance, audit and compliance
            reporting framework.
          </p>

        </div>

      </div>

      {/* Executive Report Center */}

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
            Report Intelligence Center
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Executive Insights
            </h4>

            <p className="text-slate-300 mt-2">
              AI-generated business intelligence
              and strategic recommendations.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Automated Reporting
            </h4>

            <p className="text-slate-300 mt-2">
              Scheduled report generation reduces
              manual reporting efforts.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Business Forecasts
            </h4>

            <p className="text-slate-300 mt-2">
              Forecast reports provide proactive
              decision-making intelligence.
            </p>
          </div>

        </div>

        <button
          className="
            mt-6
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-white
            text-slate-900
            font-semibold
          "
        >
          Generate New Report
          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  );
};

export default OrganizationReports;