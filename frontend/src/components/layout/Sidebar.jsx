import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Brain,
  BarChart3,
  CalendarRange,
  ShieldCheck,
  Workflow,
  FileText,
  Bell,
  Upload,
  Users,
  Building2,
  Settings,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Forecast",
    icon: Brain,
    path: "/forecast",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    name: "Planning",
    icon: CalendarRange,
    path: "/planning",
  },
  {
    name: "Governance",
    icon: ShieldCheck,
    path: "/governance",
  },
  {
    name: "Workflow",
    icon: Workflow,
    path: "/workflow",
  },
  {
    name: "Reports",
    icon: FileText,
    path: "/reports",
  },
  {
    name: "Notifications",
    icon: Bell,
    path: "/notifications",
  },
  {
    name: "Uploads",
    icon: Upload,
    path: "/uploads",
  },
  {
    name: "Users",
    icon: Users,
    path: "/users",
  },
  {
    name: "Organizations",
    icon: Building2,
    path: "/organizations",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

const Sidebar = () => {
  return (
    <aside
      className="
        w-72
        min-h-screen
        bg-[#081f63]
        text-white
        flex
        flex-col
        shadow-2xl
      "
    >
      {/* Logo */}
      <div className="px-6 py-8 border-b border-blue-900">
        <h1 className="text-2xl font-bold">
          Forecast AI
        </h1>

        <p className="text-blue-200 text-sm mt-1">
          Enterprise Platform
        </p>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  justify-between
                  px-4
                  py-4
                  rounded-2xl
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-indigo-600 shadow-lg"
                      : "hover:bg-blue-900"
                  }
                `
                }
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} />

                  <span className="font-medium">
                    {item.name}
                  </span>
                </div>

                <ChevronRight size={18} />
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* AI Status Card */}
      <div className="p-4">
        <div
          className="
            rounded-3xl
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            p-5
          "
        >
          <h3 className="font-bold text-lg">
            AI Forecast Engine
          </h3>

          <p className="text-sm text-indigo-100 mt-2">
            Real-time forecasting,
            planning, analytics and
            enterprise intelligence.
          </p>

          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Accuracy</span>
              <span>96.8%</span>
            </div>

            <div className="h-2 rounded-full bg-white/20">
              <div
                className="
                  h-2
                  rounded-full
                  bg-white
                "
                style={{ width: "96.8%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;