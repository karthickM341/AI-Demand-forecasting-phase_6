import React from "react";
import {
  Globe,
  TrendingUp,
  DollarSign,
  MapPinned,
  Building2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const regionalData = [
  {
    region: "North America",
    revenue: "$4.8M",
    growth: "+22%",
    forecast: "High",
  },
  {
    region: "Europe",
    revenue: "$3.6M",
    growth: "+18%",
    forecast: "High",
  },
  {
    region: "Asia Pacific",
    revenue: "$2.9M",
    growth: "+31%",
    forecast: "Very High",
  },
  {
    region: "Middle East",
    revenue: "$1.4M",
    growth: "+14%",
    forecast: "Medium",
  },
  {
    region: "Africa",
    revenue: "$850K",
    growth: "+11%",
    forecast: "Growing",
  },
];

const RegionalPerformance = () => {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Regional Performance
          </h2>

          <p className="text-sm text-slate-500">
            Regional forecasting, revenue and growth analysis
          </p>
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            bg-green-50
            text-green-700
            font-semibold
          "
        >
          <ArrowUpRight size={18} />
          Global Growth
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Globe size={28} className="text-blue-600" />

          <p className="text-sm text-slate-500 mt-4">
            Active Regions
          </p>

          <h3 className="text-3xl font-bold mt-2">
            18
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <DollarSign
            size={28}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-4">
            Regional Revenue
          </p>

          <h3 className="text-3xl font-bold mt-2">
            $12.8M
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <TrendingUp
            size={28}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-4">
            Growth Rate
          </p>

          <h3 className="text-3xl font-bold mt-2">
            +24.5%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <MapPinned
            size={28}
            className="text-orange-600"
          />

          <p className="text-sm text-slate-500 mt-4">
            Forecast Zones
          </p>

          <h3 className="text-3xl font-bold mt-2">
            42
          </h3>
        </div>

      </div>

      {/* Regional Table */}
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
        <div className="p-5 border-b border-slate-200">
          <h3 className="text-lg font-semibold">
            Regional Revenue Analysis
          </h3>

          <p className="text-sm text-slate-500">
            Revenue and forecast performance by region
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left">
                  Region
                </th>

                <th className="px-6 py-4 text-left">
                  Revenue
                </th>

                <th className="px-6 py-4 text-left">
                  Growth
                </th>

                <th className="px-6 py-4 text-left">
                  Forecast
                </th>
              </tr>
            </thead>

            <tbody>
              {regionalData.map((region) => (
                <tr
                  key={region.region}
                  className="
                    border-t
                    border-slate-100
                    hover:bg-slate-50
                  "
                >
                  <td className="px-6 py-4 font-medium">
                    {region.region}
                  </td>

                  <td className="px-6 py-4">
                    {region.revenue}
                  </td>

                  <td className="px-6 py-4 text-green-600 font-semibold">
                    {region.growth}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${
                          region.forecast === "Very High"
                            ? "bg-blue-100 text-blue-700"
                            : region.forecast === "High"
                            ? "bg-green-100 text-green-700"
                            : region.forecast === "Growing"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-yellow-100 text-yellow-700"
                        }
                      `}
                    >
                      {region.forecast}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Revenue Distribution */}
      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <h4 className="font-semibold mb-3">
            North America
          </h4>

          <div className="w-full h-3 bg-slate-100 rounded-full">
            <div
              className="h-3 bg-blue-600 rounded-full"
              style={{ width: "82%" }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-500">
            82% Regional Contribution
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <h4 className="font-semibold mb-3">
            Europe
          </h4>

          <div className="w-full h-3 bg-slate-100 rounded-full">
            <div
              className="h-3 bg-green-600 rounded-full"
              style={{ width: "68%" }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-500">
            68% Regional Contribution
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <h4 className="font-semibold mb-3">
            Asia Pacific
          </h4>

          <div className="w-full h-3 bg-slate-100 rounded-full">
            <div
              className="h-3 bg-purple-600 rounded-full"
              style={{ width: "91%" }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-500">
            91% Regional Contribution
          </p>
        </div>

      </div>

      {/* Regional Insights */}
      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          p-6
          shadow-sm
        "
      >
        <div className="flex items-center gap-3 mb-5">
          <Building2
            size={22}
            className="text-indigo-600"
          />

          <h3 className="text-lg font-semibold">
            Regional Business Insights
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="font-semibold text-slate-900">
              Asia Pacific
            </h4>

            <p className="text-sm text-slate-500 mt-2">
              Highest forecast growth with strong
              demand expansion across major markets.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              North America
            </h4>

            <p className="text-sm text-slate-500 mt-2">
              Continues generating highest revenue
              contribution across all regions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Europe
            </h4>

            <p className="text-sm text-slate-500 mt-2">
              Stable growth with strong forecasting
              confidence and inventory optimization.
            </p>
          </div>

        </div>
      </div>

      {/* AI Intelligence */}
      <div
        className="
          rounded-2xl
          bg-gradient-to-r
          from-slate-900
          via-indigo-900
          to-slate-900
          p-8
          text-white
        "
      >
        <div className="flex items-center gap-3 mb-4">
          <Sparkles size={22} />

          <h3 className="text-2xl font-bold">
            AI Regional Intelligence
          </h3>
        </div>

        <p className="text-slate-300">
          AI forecasting models indicate Asia Pacific
          will remain the fastest-growing market over
          the next forecasting cycle, while North America
          continues delivering the highest revenue
          contribution across enterprise operations.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Growth Leader
            </h4>

            <p className="mt-2 text-slate-300">
              Asia Pacific expected to exceed
              30% growth next quarter.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Revenue Leader
            </h4>

            <p className="mt-2 text-slate-300">
              North America remains primary
              revenue contributor.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="mt-2 text-slate-300">
              Increase inventory allocation in
              high-growth APAC markets.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default RegionalPerformance;