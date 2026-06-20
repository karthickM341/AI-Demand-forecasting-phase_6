import React from "react";
import {
  Briefcase,
  TrendingUp,
  DollarSign,
  Package,
  Brain,
  FileBarChart,
  ArrowUpRight,
  Download,
  Sparkles,
} from "lucide-react";

const executiveReports = [
  {
    title: "Executive Business Summary",
    description:
      "Comprehensive overview of business performance and forecasting.",
    type: "Executive",
    status: "Ready",
  },
  {
    title: "Revenue Performance Report",
    description:
      "Revenue growth analysis and future revenue projections.",
    type: "Finance",
    status: "Ready",
  },
  {
    title: "Demand Forecast Report",
    description:
      "AI-driven demand forecasting across all products.",
    type: "Forecast",
    status: "Ready",
  },
  {
    title: "Inventory Optimization Report",
    description:
      "Inventory planning and stock optimization insights.",
    type: "Inventory",
    status: "Processing",
  },
];

const ExecutiveReports = () => {
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
          Executive Reports
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Executive-level business intelligence and strategic reporting
        </p>
      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <Briefcase
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Executive Reports
          </p>

          <h3 className="text-3xl font-bold mt-2">
            24
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <DollarSign
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Revenue Growth
          </p>

          <h3 className="text-3xl font-bold mt-2">
            +18%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <Brain
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Forecast Accuracy
          </p>

          <h3 className="text-3xl font-bold mt-2">
            96.8%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <Package
            size={24}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Inventory Health
          </p>

          <h3 className="text-3xl font-bold mt-2">
            92%
          </h3>
        </div>

      </div>

      {/* Reports List */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Executive Report Center
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Strategic reports for leadership and stakeholders
          </p>

        </div>

        <div className="divide-y divide-slate-100">

          {executiveReports.map((report) => (
            <div
              key={report.title}
              className="p-5 hover:bg-slate-50 transition"
            >

              <div className="flex items-center justify-between">

                <div>

                  <div className="flex items-center gap-2">

                    <FileBarChart
                      size={18}
                      className="text-blue-600"
                    />

                    <h4 className="font-semibold">
                      {report.title}
                    </h4>

                  </div>

                  <p className="text-sm text-slate-500 mt-2">
                    {report.description}
                  </p>

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

      {/* Executive Metrics */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <TrendingUp
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Revenue Outlook
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Revenue growth is projected to exceed
            enterprise targets over the next quarter.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Brain
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Forecast Intelligence
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            AI forecasting models maintain strong
            prediction confidence across business units.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <ArrowUpRight
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Strategic Growth
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Growth opportunities identified through
            forecasting and planning intelligence.
          </p>

        </div>

      </div>

      {/* Executive Intelligence */}

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
            Executive Intelligence Center
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Business Outlook
            </h4>

            <p className="text-slate-300 mt-2">
              Enterprise demand and revenue continue
              to show strong upward momentum.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Strategic Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Increase investment in high-growth
              product categories and markets.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Executive Action
            </h4>

            <p className="text-slate-300 mt-2">
              Expand forecasting adoption across all
              operational business units.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ExecutiveReports;