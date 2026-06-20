import React from "react";
import PageContainer from "../../components/PageContainer";

import {
  Building2,
  Users,
  Globe,
  Briefcase,
  ShieldCheck,
  Activity,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const organizations = [
  {
    id: 1,
    name: "Global Retail Group",
    industry: "Retail",
    users: 124,
    status: "Active",
    revenue: "$5.2M",
  },
  {
    id: 2,
    name: "Smart Logistics Ltd",
    industry: "Logistics",
    users: 86,
    status: "Active",
    revenue: "$3.8M",
  },
  {
    id: 3,
    name: "Future Manufacturing",
    industry: "Manufacturing",
    users: 214,
    status: "Active",
    revenue: "$8.7M",
  },
  {
    id: 4,
    name: "Digital Commerce Inc",
    industry: "E-Commerce",
    users: 96,
    status: "Pending",
    revenue: "$2.9M",
  },
];

const Organizations = () => {
  return (
    <PageContainer
      title="Organizations"
      subtitle="Enterprise organization management and business overview"
    >
      {/* KPI SECTION */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Building2
            size={26}
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
          <Users
            size={26}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Total Users
          </p>

          <h3 className="text-3xl font-bold mt-2">
            4,286
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Briefcase
            size={26}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Enterprise Clients
          </p>

          <h3 className="text-3xl font-bold mt-2">
            32
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Activity
            size={26}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Active Forecasts
          </p>

          <h3 className="text-3xl font-bold mt-2">
            1,248
          </h3>
        </div>

      </div>

      {/* ORGANIZATION OVERVIEW */}

      <div className="grid grid-cols-12 gap-4">

        <div className="col-span-12 xl:col-span-8">

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

            <div className="p-5 border-b border-slate-100">
              <h3 className="text-lg font-semibold">
                Organization Directory
              </h3>

              <p className="text-sm text-slate-500">
                Enterprise customer organizations
              </p>
            </div>

            <div className="divide-y divide-slate-100">

              {organizations.map((org) => (
                <div
                  key={org.id}
                  className="p-5 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center justify-between">

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        {org.name}
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        {org.industry}
                      </p>

                    </div>

                    <div className="flex items-center gap-10">

                      <div className="text-center">
                        <p className="text-xs text-slate-500">
                          Users
                        </p>

                        <p className="font-semibold">
                          {org.users}
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-xs text-slate-500">
                          Revenue
                        </p>

                        <p className="font-semibold">
                          {org.revenue}
                        </p>
                      </div>

                      <span
                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          ${
                            org.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }
                        `}
                      >
                        {org.status}
                      </span>

                    </div>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* SIDEBAR */}

        <div className="col-span-12 xl:col-span-4">

          <div className="space-y-4">

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

              <h3 className="font-semibold mb-5">
                Organization Health
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Client Retention</span>
                  <span className="text-green-600 font-semibold">
                    96%
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Platform Usage</span>
                  <span className="text-blue-600 font-semibold">
                    High
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Forecast Accuracy</span>
                  <span className="text-purple-600 font-semibold">
                    96.8%
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>System Health</span>
                  <span className="text-cyan-600 font-semibold">
                    Excellent
                  </span>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

              <h3 className="font-semibold mb-4">
                Enterprise Coverage
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <Globe
                  size={22}
                  className="text-blue-600"
                />

                <span>18 Countries</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={22}
                  className="text-green-600"
                />

                <span>100% Compliance Coverage</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* EXECUTIVE INSIGHTS */}

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
            Organization Intelligence
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <Building2 className="text-cyan-400 mb-3" />

            <h4 className="text-cyan-300 font-semibold">
              Client Growth
            </h4>

            <p className="text-slate-300 mt-2">
              Enterprise customer acquisition increased
              by 18% this quarter.
            </p>
          </div>

          <div>
            <TrendingUp className="text-green-400 mb-3" />

            <h4 className="text-green-300 font-semibold">
              Revenue Expansion
            </h4>

            <p className="text-slate-300 mt-2">
              Strategic organizations are generating
              higher forecasting revenue.
            </p>
          </div>

          <div>
            <CheckCircle2 className="text-yellow-400 mb-3" />

            <h4 className="text-yellow-300 font-semibold">
              Operational Excellence
            </h4>

            <p className="text-slate-300 mt-2">
              All enterprise organizations remain
              compliant and operationally healthy.
            </p>
          </div>

        </div>

      </div>

    </PageContainer>
  );
};

export default Organizations;