import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";

const Login = lazy(() => import("../pages/Login"));

const Dashboard = lazy(() =>
  import("../pages/Dashboard/Dashboard")
);

const Forecast = lazy(() =>
  import("../pages/Forecast/Forecast")
);

const Analytics = lazy(() =>
  import("../pages/Analytics/Analytics")
);

const Planning = lazy(() =>
  import("../pages/Planning/Planning")
);

const Reports = lazy(() =>
  import("../pages/Reports/Reports")
);

const Uploads = lazy(() =>
  import("../pages/Uploads/Uploads")
);

const Governance = lazy(() =>
  import("../pages/Governance/Governance")
);

const Organizations = lazy(() =>
  import("../pages/Organizations/Organizations")
);

const Notifications = lazy(() =>
  import("../pages/Notifications/Notifications")
);

const Users = lazy(() =>
  import("../pages/Users/Users")
);

const Workflow = lazy(() =>
  import("../pages/Workflow/Workflow")
);

const Settings = lazy(() =>
  import("../pages/Settings/Settings")
);

const PageLoader = () => (
  <div
    className="
      h-screen
      flex
      items-center
      justify-center
      bg-slate-50
    "
  >
    <div className="text-center">

      <div
        className="
          h-14
          w-14
          border-4
          border-blue-600
          border-t-transparent
          rounded-full
          animate-spin
          mx-auto
        "
      />

      <p className="mt-4 text-slate-600">
        Loading Enterprise Platform...
      </p>

    </div>
  </div>
);

const PrivateLayout = () => (
  <ProtectedRoute>
    <MainLayout />
  </ProtectedRoute>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>

        <Routes>

          {/* PUBLIC */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* PRIVATE */}

          <Route
            element={<PrivateLayout />}
          >

            <Route
              path="/"
              element={
                <Navigate
                  to="/dashboard"
                  replace
                />
              }
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/forecast"
              element={<Forecast />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/planning"
              element={<Planning />}
            />

            <Route
              path="/reports"
              element={<Reports />}
            />

            <Route
              path="/uploads"
              element={<Uploads />}
            />

            <Route
              path="/governance"
              element={<Governance />}
            />

            <Route
              path="/organizations"
              element={<Organizations />}
            />

            <Route
              path="/notifications"
              element={<Notifications />}
            />

            <Route
              path="/users"
              element={<Users />}
            />

            <Route
              path="/workflow"
              element={<Workflow />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

          </Route>

          {/* 404 */}

          <Route
            path="*"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

        </Routes>

      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;