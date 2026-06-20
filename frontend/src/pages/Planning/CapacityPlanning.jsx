import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  Activity,
  TrendingUp,
  Factory,
  Users,
  Gauge,
  AlertTriangle,
  CheckCircle2,
  Brain,
  Sparkles,
  Target,
} from "lucide-react";

const utilizationTrend = [
  { month: "Jan", utilization: 72 },
  { month: "Feb", utilization: 75 },
  { month: "Mar", utilization: 78 },
  { month: "Apr", utilization: 82 },
  { month: "May", utilization: 85 },
  { month: "Jun", utilization: 88 },
];

const departmentData = [
  {
    department: "Production",
    utilization: 92,
  },
  {
    department: "Warehouse",
    utilization: 78,
  },
  {
    department: "Logistics",
    utilization: 84,
  },
  {
    department: "Procurement",
    utilization: 70,
  },
  {
    department: "Planning",
    utilization: 89,
  },
];

const resources = [
  {
    resource: "Manufacturing Line A",
    utilization: "94%",
    status: "Optimal",
  },
  {
    resource: "Manufacturing Line B",
    utilization: "82%",
    status: "Healthy",
  },
  {
    resource: "Warehouse Capacity",
    utilization: "76%",
    status: "Available",
  },
  {
    resource: "Distribution Fleet",
    utilization: "88%",
    status: "High Usage",
  },
];

const CapacityUtilization = () => {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Capacity Utilization
          </h1>

          <p className="text-slate-500 mt-2">
            Enterprise capacity planning and utilization analytics
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-green-50 text-green-700 font-semibold">
          Capacity Healthy
        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <Gauge className="text-blue-600 mb-4" size={30} />

          <p className="text-sm text-slate-500">
            Avg Utilization
          </p>

          <h3 className="text-3xl font-bold mt-2">
            88%
          </h3>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <Factory className="text-green-600 mb-4" size={30} />

          <p className="text-sm text-slate-500">
            Active Resources
          </p>

          <h3 className="text-3xl font-bold mt-2">
            124
          </h3>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <Users className="text-purple-600 mb-4" size={30} />

          <p className="text-sm text-slate-500">
            Workforce Usage
          </p>

          <h3 className="text-3xl font-bold mt-2">
            91%
          </h3>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <TrendingUp className="text-cyan-600 mb-4" size={30} />

          <p className="text-sm text-slate-500">
            Growth Capacity
          </p>

          <h3 className="text-3xl font-bold mt-2">
            +18%
          </h3>
        </div>

      </div>

      {/* Charts */}

      <div className="grid xl:grid-cols-3 gap-8">

        {/* Trend */}

        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

          <h3 className="text-xl font-semibold mb-6">
            Capacity Utilization Trend
          </h3>

          <div className="h-[400px]">

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={utilizationTrend}>

                <defs>
                  <linearGradient
                    id="capacityGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#2563eb"
                      stopOpacity={0.4}
                    />
                    <stop
                      offset="95%"
                      stopColor="#2563eb"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="utilization"
                  stroke="#2563eb"
                  strokeWidth={4}
                  fill="url(#capacityGradient)"
                />

              </AreaChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* Summary */}

        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

          <h3 className="text-xl font-semibold mb-6">
            Utilization Summary
          </h3>

          <div className="space-y-5">

            <div className="p-5 rounded-2xl bg-blue-50">
              <p className="text-sm text-slate-500">
                Production Efficiency
              </p>

              <h3 className="text-3xl font-bold mt-2 text-blue-600">
                94%
              </h3>
            </div>

            <div className="p-5 rounded-2xl bg-green-50">
              <p className="text-sm text-slate-500">
                Available Capacity
              </p>

              <h3 className="text-3xl font-bold mt-2 text-green-600">
                12%
              </h3>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50">
              <p className="text-sm text-slate-500">
                Planning Accuracy
              </p>

              <h3 className="text-3xl font-bold mt-2 text-purple-600">
                96.5%
              </h3>
            </div>

          </div>

        </div>

      </div>

      {/* Department Chart */}

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

        <h3 className="text-xl font-semibold mb-6">
          Department Utilization Analysis
        </h3>

        <div className="h-[420px]">

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="utilization"
                fill="#3b82f6"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* Resource Table */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-6 border-b border-slate-100">
          <h3 className="text-xl font-semibold">
            Resource Utilization Register
          </h3>
        </div>

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>
              <th className="px-6 py-4 text-left">
                Resource
              </th>

              <th className="px-6 py-4 text-left">
                Utilization
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>
            </tr>

          </thead>

          <tbody>

            {resources.map((resource) => (
              <tr
                key={resource.resource}
                className="border-t border-slate-100 hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-medium">
                  {resource.resource}
                </td>

                <td className="px-6 py-5">
                  {resource.utilization}
                </td>

                <td className="px-6 py-5">
                  {resource.status}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* AI Intelligence */}

      <div
        className="
          rounded-3xl
          bg-gradient-to-r
          from-slate-900
          via-blue-900
          to-slate-900
          p-8
          text-white
        "
      >

        <div className="flex items-center gap-3 mb-6">
          <Sparkles size={24} />

          <h3 className="text-2xl font-bold">
            Capacity Intelligence Engine
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <Brain
              size={22}
              className="text-cyan-300 mb-3"
            />

            <h4 className="font-semibold text-cyan-300">
              AI Insight
            </h4>

            <p className="text-slate-300 mt-2">
              Production resources are approaching
              optimal utilization thresholds.
            </p>
          </div>

          <div>
            <Target
              size={22}
              className="text-green-300 mb-3"
            />

            <h4 className="font-semibold text-green-300">
              Planning Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Allocate additional capacity to
              Logistics and Warehouse operations.
            </p>
          </div>

          <div>
            <AlertTriangle
              size={22}
              className="text-yellow-300 mb-3"
            />

            <h4 className="font-semibold text-yellow-300">
              Risk Alert
            </h4>

            <p className="text-slate-300 mt-2">
              Manufacturing Line A may exceed
              utilization limits within 2 weeks.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default CapacityUtilization;