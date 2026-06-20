import React from "react";
import {
  TrendingUp,
  Package,
  Target,
  Brain,
  ShoppingCart,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const demandProducts = [
  {
    product: "Product A",
    currentDemand: "12,500",
    forecastDemand: "14,200",
    growth: "+13.6%",
  },
  {
    product: "Product B",
    currentDemand: "8,900",
    forecastDemand: "10,100",
    growth: "+11.2%",
  },
  {
    product: "Product C",
    currentDemand: "6,200",
    forecastDemand: "7,500",
    growth: "+20.9%",
  },
  {
    product: "Product D",
    currentDemand: "15,800",
    forecastDemand: "17,300",
    growth: "+9.5%",
  },
];

const DemandPlanning = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <h2 className="text-lg font-bold text-slate-900">
          Demand Planning
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          AI-driven demand forecasting and sales planning intelligence
        </p>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <ShoppingCart
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Current Demand
          </p>

          <h3 className="text-3xl font-bold mt-2">
            43.4K
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <TrendingUp
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Forecast Demand
          </p>

          <h3 className="text-3xl font-bold mt-2">
            49.1K
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Brain
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            AI Accuracy
          </p>

          <h3 className="text-3xl font-bold mt-2">
            96.8%
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Target
            size={24}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Demand Growth
          </p>

          <h3 className="text-3xl font-bold mt-2">
            +13.2%
          </h3>

        </div>

      </div>

      {/* Demand Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Product Demand Forecast
          </h3>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-slate-50">

                <th className="text-left p-4">
                  Product
                </th>

                <th className="text-left p-4">
                  Current Demand
                </th>

                <th className="text-left p-4">
                  Forecast Demand
                </th>

                <th className="text-left p-4">
                  Growth
                </th>

              </tr>

            </thead>

            <tbody>

              {demandProducts.map((item) => (
                <tr
                  key={item.product}
                  className="border-t border-slate-100 hover:bg-slate-50"
                >

                  <td className="p-4 font-medium">
                    {item.product}
                  </td>

                  <td className="p-4">
                    {item.currentDemand}
                  </td>

                  <td className="p-4">
                    {item.forecastDemand}
                  </td>

                  <td className="p-4">

                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-green-100
                        text-green-700
                        text-xs
                        font-semibold
                      "
                    >
                      {item.growth}
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Demand Analysis */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <TrendingUp
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Demand Growth
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Demand is expected to increase steadily
            across all major product categories.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <CheckCircle2
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Forecast Reliability
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            AI forecast confidence remains above
            enterprise performance targets.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <AlertTriangle
            size={24}
            className="text-amber-600"
          />

          <h3 className="font-semibold mt-4">
            Risk Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Product C demand growth may require
            additional inventory allocation.
          </p>

        </div>

      </div>

      {/* AI Planning Intelligence */}

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
            Demand Planning Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Demand Outlook
            </h4>

            <p className="text-slate-300 mt-2">
              Enterprise demand is projected to grow
              by 13.2% during the next quarter.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Inventory Alignment
            </h4>

            <p className="text-slate-300 mt-2">
              Recommended inventory increase of 15%
              to support forecasted demand.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              AI Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Increase procurement planning for
              high-growth product segments.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DemandPlanning;