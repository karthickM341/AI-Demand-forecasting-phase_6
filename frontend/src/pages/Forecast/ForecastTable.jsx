import React from "react";
import {
  Download,
  Search,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const forecastData = [
  {
    id: 1,
    product: "Laptop Pro X",
    currentDemand: 1250,
    predictedDemand: 1480,
    growth: "+18.4%",
    confidence: "98%",
    status: "High Confidence",
  },
  {
    id: 2,
    product: "Wireless Headset",
    currentDemand: 980,
    predictedDemand: 1125,
    growth: "+14.8%",
    confidence: "96%",
    status: "High Confidence",
  },
  {
    id: 3,
    product: "Smart Watch",
    currentDemand: 850,
    predictedDemand: 920,
    growth: "+8.2%",
    confidence: "94%",
    status: "Stable",
  },
  {
    id: 4,
    product: "Gaming Keyboard",
    currentDemand: 720,
    predictedDemand: 680,
    growth: "-5.5%",
    confidence: "91%",
    status: "Declining",
  },
  {
    id: 5,
    product: "4K Monitor",
    currentDemand: 540,
    predictedDemand: 690,
    growth: "+27.7%",
    confidence: "97%",
    status: "High Growth",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "High Confidence":
      return "bg-blue-100 text-blue-700";

    case "High Growth":
      return "bg-green-100 text-green-700";

    case "Declining":
      return "bg-red-100 text-red-700";

    default:
      return "bg-amber-100 text-amber-700";
  }
};

const ForecastTable = () => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-slate-200
        shadow-sm
      "
    >
      {/* Header */}

      <div
        className="
          p-5
          border-b
          border-slate-100
          flex
          items-center
          justify-between
          flex-wrap
          gap-4
        "
      >
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Forecast Predictions
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Product demand forecast and prediction analysis
          </p>
        </div>

        <div className="flex items-center gap-3">

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
              placeholder="Search forecast..."
              className="
                pl-10
                pr-4
                py-2
                rounded-xl
                border
                border-slate-300
                bg-slate-50
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
              py-2
              rounded-xl
              bg-slate-900
              text-white
              hover:bg-slate-800
            "
          >
            <Download size={16} />
            Export
          </button>

        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-slate-50">

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Product
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Current Demand
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Predicted Demand
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Growth
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Confidence
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {forecastData.map((item) => (
              <tr
                key={item.id}
                className="
                  border-t
                  border-slate-100
                  hover:bg-slate-50
                "
              >

                <td className="px-6 py-4 font-medium">
                  {item.product}
                </td>

                <td className="px-6 py-4">
                  {item.currentDemand}
                </td>

                <td className="px-6 py-4 font-semibold">
                  {item.predictedDemand}
                </td>

                <td className="px-6 py-4">

                  <div className="flex items-center gap-2">

                    {item.growth.includes("-") ? (
                      <TrendingDown
                        size={16}
                        className="text-red-600"
                      />
                    ) : (
                      <TrendingUp
                        size={16}
                        className="text-green-600"
                      />
                    )}

                    <span
                      className={
                        item.growth.includes("-")
                          ? "text-red-600 font-semibold"
                          : "text-green-600 font-semibold"
                      }
                    >
                      {item.growth}
                    </span>

                  </div>

                </td>

                <td className="px-6 py-4">
                  {item.confidence}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      ${getStatusColor(item.status)}
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
  );
};

export default ForecastTable;