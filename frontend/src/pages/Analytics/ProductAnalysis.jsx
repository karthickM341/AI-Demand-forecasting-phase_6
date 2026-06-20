import React from "react";
import {
  Package,
  TrendingUp,
  DollarSign,
  Star,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const topProducts = [
  {
    product: "Product A",
    revenue: "$2.4M",
    growth: "+24%",
    demand: "High",
  },
  {
    product: "Product B",
    revenue: "$1.8M",
    growth: "+18%",
    demand: "High",
  },
  {
    product: "Product C",
    revenue: "$1.3M",
    growth: "+12%",
    demand: "Medium",
  },
  {
    product: "Product D",
    revenue: "$920K",
    growth: "+9%",
    demand: "Medium",
  },
  {
    product: "Product E",
    revenue: "$610K",
    growth: "+4%",
    demand: "Low",
  },
];

const ProductAnalysis = () => {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Product Analysis
          </h2>

          <p className="text-sm text-slate-500">
            Product performance, demand insights and revenue contribution
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
          Product Growth
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <Package
            size={26}
            className="text-blue-600"
          />

          <p className="text-slate-500 text-sm mt-4">
            Active Products
          </p>

          <h3 className="text-3xl font-bold mt-2">
            248
          </h3>
        </div>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <DollarSign
            size={26}
            className="text-green-600"
          />

          <p className="text-slate-500 text-sm mt-4">
            Product Revenue
          </p>

          <h3 className="text-3xl font-bold mt-2">
            $12.8M
          </h3>
        </div>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <TrendingUp
            size={26}
            className="text-purple-600"
          />

          <p className="text-slate-500 text-sm mt-4">
            Growth Rate
          </p>

          <h3 className="text-3xl font-bold mt-2">
            +24.5%
          </h3>
        </div>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <Star
            size={26}
            className="text-amber-600"
          />

          <p className="text-slate-500 text-sm mt-4">
            Top Performers
          </p>

          <h3 className="text-3xl font-bold mt-2">
            18
          </h3>
        </div>

      </div>

      {/* Product Performance */}
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
            Top Product Performance
          </h3>

          <p className="text-sm text-slate-500">
            Revenue and demand analysis
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left">
                  Product
                </th>

                <th className="px-6 py-4 text-left">
                  Revenue
                </th>

                <th className="px-6 py-4 text-left">
                  Growth
                </th>

                <th className="px-6 py-4 text-left">
                  Demand
                </th>
              </tr>
            </thead>

            <tbody>
              {topProducts.map((product) => (
                <tr
                  key={product.product}
                  className="
                    border-t
                    border-slate-100
                    hover:bg-slate-50
                  "
                >
                  <td className="px-6 py-4 font-medium">
                    {product.product}
                  </td>

                  <td className="px-6 py-4">
                    {product.revenue}
                  </td>

                  <td className="px-6 py-4 text-green-600 font-semibold">
                    {product.growth}
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
                          product.demand === "High"
                            ? "bg-green-100 text-green-700"
                            : product.demand === "Medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {product.demand}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Revenue Contribution */}
      <div className="grid md:grid-cols-3 gap-4">

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            p-5
            shadow-sm
          "
        >
          <h4 className="font-semibold mb-3">
            Product A Contribution
          </h4>

          <div className="w-full h-3 bg-slate-100 rounded-full">
            <div
              className="
                h-3
                rounded-full
                bg-blue-600
              "
              style={{ width: "78%" }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-500">
            78% Revenue Contribution
          </p>
        </div>

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            p-5
            shadow-sm
          "
        >
          <h4 className="font-semibold mb-3">
            Product B Contribution
          </h4>

          <div className="w-full h-3 bg-slate-100 rounded-full">
            <div
              className="
                h-3
                rounded-full
                bg-green-600
              "
              style={{ width: "64%" }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-500">
            64% Revenue Contribution
          </p>
        </div>

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            p-5
            shadow-sm
          "
        >
          <h4 className="font-semibold mb-3">
            Product C Contribution
          </h4>

          <div className="w-full h-3 bg-slate-100 rounded-full">
            <div
              className="
                h-3
                rounded-full
                bg-purple-600
              "
              style={{ width: "48%" }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-500">
            48% Revenue Contribution
          </p>
        </div>

      </div>

      {/* AI Product Intelligence */}
      <div
        className="
          rounded-2xl
          bg-gradient-to-r
          from-slate-900
          via-blue-900
          to-slate-900
          p-8
          text-white
        "
      >
        <div className="flex items-center gap-3 mb-4">
          <Sparkles size={22} />

          <h3 className="text-2xl font-bold">
            AI Product Intelligence
          </h3>
        </div>

        <p className="text-slate-300">
          AI analysis indicates Product A and Product B
          will continue driving revenue growth over the
          next forecasting cycle. Demand signals suggest
          increasing inventory allocation for high-growth
          products.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Growth Opportunity
            </h4>

            <p className="mt-2 text-slate-300">
              High-growth products expected to increase
              revenue contribution by 18%.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Demand Forecast
            </h4>

            <p className="mt-2 text-slate-300">
              Demand remains strong across enterprise
              product categories.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="mt-2 text-slate-300">
              Increase stock allocation for top
              performing products.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProductAnalysis;