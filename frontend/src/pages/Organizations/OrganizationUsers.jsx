import React, { useState } from "react";
import {
  Users,
  Search,
  Filter,
  UserPlus,
  Shield,
  UserCheck,
  Mail,
  Activity,
  Sparkles,
  MoreVertical,
} from "lucide-react";

const usersData = [
  {
    id: 1,
    name: "John Anderson",
    email: "john@globalretail.com",
    role: "Admin",
    organization: "Global Retail Group",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah@futuremfg.com",
    role: "Analyst",
    organization: "Future Manufacturing",
    status: "Active",
  },
  {
    id: 3,
    name: "David Miller",
    email: "david@smartlogistics.com",
    role: "Manager",
    organization: "Smart Logistics",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Emma Brown",
    email: "emma@digitalcommerce.com",
    role: "Viewer",
    organization: "Digital Commerce",
    status: "Active",
  },
];

const OrganizationUsers = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 text-purple-700";
      case "Manager":
        return "bg-blue-100 text-blue-700";
      case "Analyst":
        return "bg-green-100 text-green-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Users
              size={28}
              className="text-blue-600"
            />

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Organization Users
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Enterprise user management and access control
              </p>
            </div>

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
            <UserPlus size={18} />
            Add User
          </button>

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Users
            size={24}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Total Users
          </p>

          <h3 className="text-3xl font-bold mt-2">
            4,286
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <UserCheck
            size={24}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Active Users
          </p>

          <h3 className="text-3xl font-bold mt-2">
            3,982
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Shield
            size={24}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Admin Users
          </p>

          <h3 className="text-3xl font-bold mt-2">
            86
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Activity
            size={24}
            className="text-cyan-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Login Rate
          </p>

          <h3 className="text-3xl font-bold mt-2">
            94%
          </h3>
        </div>

      </div>

      {/* Search */}

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
              placeholder="Search users..."
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

      {/* Users Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100">

          <h3 className="text-lg font-semibold">
            User Directory
          </h3>

          <p className="text-sm text-slate-500">
            Organization users and access permissions
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-slate-50">

                <th className="text-left p-4">
                  User
                </th>

                <th className="text-left p-4">
                  Email
                </th>

                <th className="text-left p-4">
                  Organization
                </th>

                <th className="text-left p-4">
                  Role
                </th>

                <th className="text-left p-4">
                  Status
                </th>

                <th className="text-left p-4">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
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
                          rounded-full
                          bg-blue-100
                          text-blue-700
                          flex
                          items-center
                          justify-center
                          font-semibold
                        "
                      >
                        {user.name.charAt(0)}
                      </div>

                      <span className="font-medium">
                        {user.name}
                      </span>

                    </div>

                  </td>

                  <td className="p-4">

                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      {user.email}
                    </div>

                  </td>

                  <td className="p-4">
                    {user.organization}
                  </td>

                  <td className="p-4">

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${getRoleColor(user.role)}
                      `}
                    >
                      {user.role}
                    </span>

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
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {user.status}
                    </span>

                  </td>

                  <td className="p-4">
                    <button className="text-slate-500 hover:text-slate-900">
                      <MoreVertical size={18} />
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* AI Insights */}

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
            User Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Adoption Growth
            </h4>

            <p className="text-slate-300 mt-2">
              User adoption increased by 18%
              across enterprise organizations.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Engagement Insights
            </h4>

            <p className="text-slate-300 mt-2">
              Active user engagement remains above
              enterprise benchmark targets.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Access Optimization
            </h4>

            <p className="text-slate-300 mt-2">
              AI recommends reviewing inactive
              accounts for improved security posture.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default OrganizationUsers;