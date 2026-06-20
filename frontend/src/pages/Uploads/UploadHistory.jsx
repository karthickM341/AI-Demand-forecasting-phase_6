import React from "react";
import {
  FileSpreadsheet,
  Download,
  Trash2,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Database,
  Search,
} from "lucide-react";

const uploadHistory = [
  {
    id: 1,
    file: "sales_forecast_q2.xlsx",
    uploadedBy: "Admin User",
    date: "2026-06-18",
    records: "24,560",
    status: "Completed",
  },
  {
    id: 2,
    file: "inventory_data.csv",
    uploadedBy: "Operations Team",
    date: "2026-06-17",
    records: "18,420",
    status: "Completed",
  },
  {
    id: 3,
    file: "demand_forecast.csv",
    uploadedBy: "Analytics Team",
    date: "2026-06-17",
    records: "12,800",
    status: "Processing",
  },
  {
    id: 4,
    file: "regional_sales.xlsx",
    uploadedBy: "Sales Team",
    date: "2026-06-16",
    records: "35,400",
    status: "Completed",
  },
  {
    id: 5,
    file: "product_catalog.csv",
    uploadedBy: "Inventory Team",
    date: "2026-06-15",
    records: "6,250",
    status: "Failed",
  },
];

const UploadHistory = () => {
  return (
    <div className="space-y-4">

      {/* HEADER */}

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
        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              Upload History
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Historical dataset uploads and processing records
            </p>

          </div>

          <div className="relative">

            <Search
              size={18}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search uploads..."
              className="
                h-10
                pl-10
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

        </div>
      </div>

      {/* KPI SUMMARY */}

      <div className="grid md:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Database
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Total Uploads
          </p>

          <h3 className="text-3xl font-bold mt-2">
            12,486
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Successful
          </p>

          <h3 className="text-3xl font-bold mt-2">
            12,210
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Clock
            size={24}
            className="text-amber-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Processing
          </p>

          <h3 className="text-3xl font-bold mt-2">
            214
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <AlertTriangle
            size={24}
            className="text-red-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Failed
          </p>

          <h3 className="text-3xl font-bold mt-2">
            62
          </h3>

        </div>

      </div>

      {/* HISTORY TABLE */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          overflow-hidden
        "
      >

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-slate-50 border-b border-slate-200">

                <th className="px-5 py-4 text-left">
                  Dataset
                </th>

                <th className="px-5 py-4 text-left">
                  Uploaded By
                </th>

                <th className="px-5 py-4 text-left">
                  Date
                </th>

                <th className="px-5 py-4 text-left">
                  Records
                </th>

                <th className="px-5 py-4 text-left">
                  Status
                </th>

                <th className="px-5 py-4 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {uploadHistory.map((item) => (
                <tr
                  key={item.id}
                  className="
                    border-b
                    border-slate-100
                    hover:bg-slate-50
                  "
                >

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <FileSpreadsheet
                        size={20}
                        className="text-blue-600"
                      />

                      <span className="font-medium">
                        {item.file}
                      </span>

                    </div>

                  </td>

                  <td className="px-5 py-4">
                    {item.uploadedBy}
                  </td>

                  <td className="px-5 py-4">
                    {item.date}
                  </td>

                  <td className="px-5 py-4">
                    {item.records}
                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${
                          item.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Processing"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="px-5 py-4">

                    <div className="flex items-center justify-center gap-2">

                      <button
                        className="
                          h-9
                          w-9
                          rounded-lg
                          hover:bg-slate-100
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        className="
                          h-9
                          w-9
                          rounded-lg
                          hover:bg-slate-100
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Download size={16} />
                      </button>

                      <button
                        className="
                          h-9
                          w-9
                          rounded-lg
                          hover:bg-red-50
                          text-red-600
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Trash2 size={16} />
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* AI INSIGHTS */}

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
          Upload History Intelligence
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Upload Trends
            </h4>

            <p className="text-slate-300 mt-2">
              Dataset uploads increased by 18%
              compared to the previous month.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Data Quality
            </h4>

            <p className="text-slate-300 mt-2">
              97% of uploaded datasets passed
              validation checks successfully.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Standardize dataset templates to
              reduce upload validation failures.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UploadHistory;