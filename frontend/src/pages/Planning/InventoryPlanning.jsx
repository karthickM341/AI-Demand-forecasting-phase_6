import React from "react";
import {
  Package,
  Warehouse,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Sparkles,
} from "lucide-react";

const inventoryData = [
  {
    product: "Product A",
    stock: "12,450",
    safetyStock: "10,000",
    status: "Healthy",
  },
  {
    product: "Product B",
    stock: "7,200",
    safetyStock: "8,000",
    status: "Low Stock",
  },
  {
    product: "Product C",
    stock: "15,800",
    safetyStock: "12,000",
    status: "Healthy",
  },
  {
    product: "Product D",
    stock: "5,400",
    safetyStock: "7,500",
    status: "Critical",
  },
];

const InventoryPlanning = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        <h2 className="text-lg font-bold text-slate-900">
          Inventory Planning
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Inventory optimization, stock forecasting and warehouse planning
        </p>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Package
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Total Inventory
          </p>

          <h3 className="text-3xl font-bold mt-2">
            40.8K
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Warehouse
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Warehouse Utilization
          </p>

          <h3 className="text-3xl font-bold mt-2">
            78%
          </h3>

        </div>

      </div>

      {/* Inventory Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Inventory Overview
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
                  Current Stock
                </th>

                <th className="text-left p-4">
                  Safety Stock
                </th>

                <th className="text-left p-4">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {inventoryData.map((item) => (
                <tr
                  key={item.product}
                  className="border-t border-slate-100 hover:bg-slate-50"
                >

                  <td className="p-4 font-medium">
                    {item.product}
                  </td>

                  <td className="p-4">
                    {item.stock}
                  </td>

                  <td className="p-4">
                    {item.safetyStock}
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
                          item.status === "Healthy"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Low Stock"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Inventory Insights */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <TrendingUp
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Stock Optimization
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Inventory turnover has improved by 14%
            compared to the previous quarter.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <CheckCircle2
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Warehouse Efficiency
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Warehouse utilization remains within
            optimal operational thresholds.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <AlertTriangle
            size={24}
            className="text-amber-600"
          />

          <h3 className="font-semibold mt-4">
            Inventory Risk
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Product D inventory level is below
            safety stock threshold.
          </p>

        </div>

      </div>

      {/* Inventory Health */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        <h3 className="font-semibold mb-5">
          Inventory Health Score
        </h3>

        <div className="space-y-5">

          <div>

            <div className="flex justify-between mb-2">

              <span>Inventory Availability</span>

              <span className="font-semibold">
                92%
              </span>

            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">

              <div
                className="h-3 rounded-full bg-green-500"
                style={{ width: "92%" }}
              />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <span>Stock Accuracy</span>

              <span className="font-semibold">
                96%
              </span>

            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">

              <div
                className="h-3 rounded-full bg-blue-500"
                style={{ width: "96%" }}
              />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <span>Supply Reliability</span>

              <span className="font-semibold">
                89%
              </span>

            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full">

              <div
                className="h-3 rounded-full bg-purple-500"
                style={{ width: "89%" }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* AI Inventory Intelligence */}

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
            Inventory Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              Stock Forecast
            </h4>

            <p className="text-slate-300 mt-2">
              Inventory levels are sufficient for
              projected demand growth over 30 days.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Warehouse Optimization
            </h4>

            <p className="text-slate-300 mt-2">
              Current warehouse capacity can support
              20% additional inventory expansion.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              AI Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Replenish Product D inventory immediately
              to avoid stock-out risk.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default InventoryPlanning;