import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main
          className="
            flex-1
            p-4
            lg:p-6
            overflow-x-hidden
          "
        >
          <div
            className="
              w-full
              max-w-[1800px]
              mx-auto
            "
          >
            <Outlet />
          </div>
        </main>

      </div>

    </div>
  );
};

export default MainLayout;