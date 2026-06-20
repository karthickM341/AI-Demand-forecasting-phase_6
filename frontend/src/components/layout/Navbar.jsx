import React from "react";
import {
  Bell,
  Search,
  Settings,
  ShieldCheck,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm">
      
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search forecasts, reports, analytics..."
          className="
            w-full
            h-12
            pl-12
            pr-4
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Accuracy Badge */}
        <div
          className="
            hidden lg:flex
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
          <ShieldCheck size={18} />
          96.8% Accuracy
        </div>

        {/* Notification */}
        <button
          className="
            relative
            w-11
            h-11
            rounded-xl
            bg-slate-100
            flex
            items-center
            justify-center
            hover:bg-slate-200
            transition
          "
        >
          <Bell size={20} />

          <span
            className="
              absolute
              -top-1
              -right-1
              bg-red-500
              text-white
              text-[10px]
              font-bold
              rounded-full
              w-5
              h-5
              flex
              items-center
              justify-center
            "
          >
            8
          </span>
        </button>

        {/* Settings */}
        <button
          className="
            w-11
            h-11
            rounded-xl
            bg-slate-100
            flex
            items-center
            justify-center
            hover:bg-slate-200
            transition
          "
        >
          <Settings size={20} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-2">
          <div
            className="
              w-12
              h-12
              rounded-full
              bg-indigo-600
              text-white
              flex
              items-center
              justify-center
              font-bold
            "
          >
            A
          </div>

          <div className="hidden md:block">
            <h4 className="font-semibold text-slate-900">
              Admin User
            </h4>

            <p className="text-sm text-slate-500">
              Super Admin
            </p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;