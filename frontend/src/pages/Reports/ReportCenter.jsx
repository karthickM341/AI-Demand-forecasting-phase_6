import React, { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  Calendar,
  FileSpreadsheet,
  FileBarChart,
  Brain,
  MoreVertical,
  Plus,
} from "lucide-react";

const reports = [
  {
    id: 1,
    name: "Demand Forecast Report",
    category: "Forecast",
    generated: "Today",
    format: "PDF",
    status: "Ready",
  },
  {
    id: 2,
    name: "Revenue Analytics Report",
    category: "Finance",
    generated: "Yesterday",
    format: "Excel",
    status: "Ready",
  },
  {
    id: 3,
    name: "Inventory Optimization Report",
    category: "Inventory",
    generated: "2 Days Ago",
    format: "PDF",
    status: "Processing",
  },
  {
    id: 4,
    name: "Governance Compliance Report",
    category: "Governance",
    generated: "Today",
    format: "CSV",
    status: "Ready",
  },
  {
    id: 5,
    name: "Executive Business Report",
    category: "Executive",
    generated: "Today",
    format: "PDF",
    status: "Ready",
  },
];

const ReportCenter = () => {
  const [search, setSearch] = useState("");

  const filteredReports = reports.filter((report) =>
    report.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getFormatIcon = (format) => {
    switch (format) {
      case "Excel":
        return (
          <FileSpreadsheet
            size={18}
            className="text-green-600"
          />
        );

      case "CSV":
        return (
          <FileSpreadsheet
            size={18}
            className="text-blue-600"
          />
        );

      default:
        return (
          <FileBarChart
            size={18}
            className="text-red-600"
          />
        );
    }
  };

  return (
    <div className="space-y-4">

      {/* HEADER */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              Report Center
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Enterprise report generation, export and management
            </p>

          </div>

          <button
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              bg-blue-600
              text-white
              hover:bg-blue-700
            "
          >
            <Plus size={18} />
            New Report
          </button>

        </div>

      </div>

      {/* KPI SECTION */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <FileText
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Total Reports
          </p>

          <h3 className="text-3xl font-bold mt-2">
            12,486
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Download
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Downloads
          </p>

          <h3 className="text-3xl font-bold mt-2">
            16,245
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Brain
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            AI Reports
          </p>

          <h3 className="text-3xl font-bold mt-2">
            1,248
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Calendar
            size={24}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Scheduled
          </p>

          <h3 className="text-3xl font-bold mt-2">
            324
          </h3>

        </div>

      </div>

      {/* SEARCH */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        <div className="flex flex-col lg:flex-row gap-4">

          <div className="relative flex-1">

            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search reports..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                h-11
                pl-11
                pr-4
                rounded-xl
                border
                border-slate-300
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          <button
            className="
              flex
              items-center
              gap-2
              px-4
              rounded-xl
              bg-slate-900
              text-white
            "
          >
            <Filter size={16} />
            Filter
          </button>

        </div>

      </div>

      {/* REPORT TABLE */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-slate-50">

                <th className="text-left p-4">
                  Report Name
                </th>

                <th className="text-left p-4">
                  Category
                </th>

                <th className="text-left p-4">
                  Generated
                </th>

                <th className="text-left p-4">
                  Format
                </th>

                <th className="text-left p-4">
                  Status
                </th>

                <th className="text-left p-4">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredReports.map((report) => (
                <tr
                  key={report.id}
                  className="
                    border-t
                    border-slate-100
                    hover:bg-slate-50
                  "
                >

                  <td className="p-4 font-medium">
                    {report.name}
                  </td>

                  <td className="p-4">
                    {report.category}
                  </td>

                  <td className="p-4">
                    {report.generated}
                  </td>

                  <td className="p-4">

                    <div className="flex items-center gap-2">

                      {getFormatIcon(report.format)}

                      {report.format}

                    </div>

                  </td>

                  <td className="p-4">

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

                  </td>

                  <td className="p-4">

                    <div className="flex items-center gap-2">

                      <button
                        className="
                          p-2
                          rounded-lg
                          hover:bg-slate-100
                        "
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        className="
                          p-2
                          rounded-lg
                          hover:bg-slate-100
                        "
                      >
                        <Download size={18} />
                      </button>

                      <button
                        className="
                          p-2
                          rounded-lg
                          hover:bg-slate-100
                        "
                      >
                        <MoreVertical size={18} />
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ReportCenter;