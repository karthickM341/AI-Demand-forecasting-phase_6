import React, { useState } from "react";
import {
  Building2,
  Search,
  Filter,
  Users,
  Globe,
  Activity,
  CheckCircle2,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const organizations = [
  {
    id: 1,
    name: "Global Retail Group",
    industry: "Retail",
    country: "USA",
    users: 124,
    forecasts: 342,
    status: "Active",
  },
  {
    id: 2,
    name: "Future Manufacturing",
    industry: "Manufacturing",
    country: "Germany",
    users: 214,
    forecasts: 584,
    status: "Active",
  },
  {
    id: 3,
    name: "Smart Logistics",
    industry: "Logistics",
    country: "Singapore",
    users: 86,
    forecasts: 241,
    status: "Active",
  },
  {
    id: 4,
    name: "Digital Commerce",
    industry: "E-Commerce",
    country: "India",
    users: 96,
    forecasts: 198,
    status: "Pending",
  },
  {
    id: 5,
    name: "Retail Plus",
    industry: "Retail",
    country: "UK",
    users: 154,
    forecasts: 392,
    status: "Active",
  },
];

const OrganizationDirectory = () => {
  const [search, setSearch] = useState("");

  const filteredOrganizations =
    organizations.filter((org) =>
      org.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="space-y-4">

      {/* HEADER */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <Building2
            size={28}
            className="text-blue-600"
          />

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              Organization Directory
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Manage enterprise organizations and business units
            </p>

          </div>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Building2
            size={24}
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
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Active Users
          </p>

          <h3 className="text-3xl font-bold mt-2">
            4,286
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Activity
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Active Forecasts
          </p>

          <h3 className="text-3xl font-bold mt-2">
            1,248
          </h3>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <ArrowUpRight
            size={24}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Growth Rate
          </p>

          <h3 className="text-3xl font-bold mt-2">
            +18%
          </h3>

        </div>

      </div>

      {/* SEARCH */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

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
              placeholder="Search organizations..."
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

      {/* DIRECTORY TABLE */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100">

          <h3 className="text-lg font-semibold">
            Organization Directory
          </h3>

          <p className="text-sm text-slate-500">
            Enterprise customer organizations
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-slate-50">

                <th className="text-left p-4 text-sm">
                  Organization
                </th>

                <th className="text-left p-4 text-sm">
                  Industry
                </th>

                <th className="text-left p-4 text-sm">
                  Country
                </th>

                <th className="text-left p-4 text-sm">
                  Users
                </th>

                <th className="text-left p-4 text-sm">
                  Forecasts
                </th>

                <th className="text-left p-4 text-sm">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredOrganizations.map((org) => (

                <tr
                  key={org.id}
                  className="
                    border-t
                    border-slate-100
                    hover:bg-slate-50
                  "
                >

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          h-10
                          w-10
                          rounded-xl
                          bg-blue-100
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Building2
                          size={18}
                          className="text-blue-600"
                        />
                      </div>

                      <span className="font-medium">
                        {org.name}
                      </span>

                    </div>

                  </td>

                  <td className="p-4">
                    {org.industry}
                  </td>

                  <td className="p-4">

                    <div className="flex items-center gap-2">

                      <Globe size={14} />

                      {org.country}

                    </div>

                  </td>

                  <td className="p-4">
                    {org.users}
                  </td>

                  <td className="p-4">
                    {org.forecasts}
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
                          org.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }
                      `}
                    >
                      {org.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* ORGANIZATION INSIGHTS */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Users
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            User Adoption
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Enterprise user adoption increased
            by 22% compared to last quarter.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Activity
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Forecast Activity
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Forecast generation volume remains
            above enterprise targets.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

          <Clock
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Organization Growth
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            New organization onboarding increased
            by 18% this month.
          </p>

        </div>

      </div>

    </div>
  );
};

export default OrganizationDirectory;