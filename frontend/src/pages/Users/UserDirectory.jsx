import React, { useState } from "react";
import {
  Search,
  UserPlus,
  Edit,
  Trash2,
  Shield,
  Mail,
  Phone,
  MoreVertical,
  CheckCircle2,
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@forecast.ai",
    phone: "+1 987654321",
    role: "Super Admin",
    department: "Management",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@forecast.ai",
    phone: "+1 987654322",
    role: "Analyst",
    department: "Analytics",
    status: "Active",
  },
  {
    id: 3,
    name: "David Wilson",
    email: "david@forecast.ai",
    phone: "+1 987654323",
    role: "Manager",
    department: "Planning",
    status: "Active",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael@forecast.ai",
    phone: "+1 987654324",
    role: "Viewer",
    department: "Operations",
    status: "Inactive",
  },
];

const UserDirectory = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const getRoleColor = (role) => {
    switch (role) {
      case "Super Admin":
        return "bg-red-100 text-red-700";
      case "Manager":
        return "bg-purple-100 text-purple-700";
      case "Analyst":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              User Directory
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Manage users, permissions and enterprise access controls
            </p>

          </div>

          <button
            className="
              flex
              items-center
              gap-2
              px-4
              py-2.5
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

      {/* SEARCH */}

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
            placeholder="Search users..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              h-11
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

      {/* USER TABLE */}

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
                  User
                </th>

                <th className="px-5 py-4 text-left">
                  Contact
                </th>

                <th className="px-5 py-4 text-left">
                  Role
                </th>

                <th className="px-5 py-4 text-left">
                  Department
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

              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="
                    border-b
                    border-slate-100
                    hover:bg-slate-50
                  "
                >

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          h-10
                          w-10
                          rounded-full
                          bg-blue-600
                          text-white
                          flex
                          items-center
                          justify-center
                          font-semibold
                        "
                      >
                        {user.name.charAt(0)}
                      </div>

                      <div>

                        <h4 className="font-semibold">
                          {user.name}
                        </h4>

                        <p className="text-sm text-slate-500">
                          User ID #{user.id}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-5 py-4">

                    <div className="space-y-1">

                      <div className="flex items-center gap-2 text-sm">

                        <Mail size={14} />
                        {user.email}

                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-500">

                        <Phone size={14} />
                        {user.phone}

                      </div>

                    </div>

                  </td>

                  <td className="px-5 py-4">

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

                  <td className="px-5 py-4">
                    {user.department}
                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={`
                        flex
                        items-center
                        gap-1
                        text-sm
                        font-medium
                        ${
                          user.status === "Active"
                            ? "text-green-600"
                            : "text-slate-500"
                        }
                      `}
                    >
                      <CheckCircle2 size={14} />
                      {user.status}
                    </span>

                  </td>

                  <td className="px-5 py-4">

                    <div className="flex items-center justify-center gap-2">

                      <button
                        className="
                          h-9
                          w-9
                          rounded-lg
                          hover:bg-blue-50
                          text-blue-600
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Edit size={16} />
                      </button>

                      <button
                        className="
                          h-9
                          w-9
                          rounded-lg
                          hover:bg-purple-50
                          text-purple-600
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Shield size={16} />
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
                        <MoreVertical size={16} />
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

      {/* USER DIRECTORY INSIGHTS */}

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
          User Directory Intelligence
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4 className="text-cyan-300 font-semibold">
              User Growth
            </h4>

            <p className="text-slate-300 mt-2">
              Enterprise user base has grown steadily
              with increased adoption across departments.
            </p>

          </div>

          <div>

            <h4 className="text-green-300 font-semibold">
              Access Governance
            </h4>

            <p className="text-slate-300 mt-2">
              RBAC controls ensure secure access to
              forecasting and analytics resources.
            </p>

          </div>

          <div>

            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Review inactive accounts monthly to
              maintain optimal security posture.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserDirectory;