import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ShieldCheck, Loader2 } from "lucide-react";

import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const {
    isAuthenticated,
    loading,
  } = useAuth();

  /*
  |--------------------------------------------------------------------------
  | Loading State
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-slate-100
        "
      >
        <div
          className="
            bg-white
            rounded-3xl
            p-10
            shadow-lg
            border
            border-slate-200
            flex
            flex-col
            items-center
            gap-4
          "
        >
          <div
            className="
              h-16
              w-16
              rounded-2xl
              bg-blue-100
              flex
              items-center
              justify-center
            "
          >
            <ShieldCheck
              size={32}
              className="text-blue-600"
            />
          </div>

          <Loader2
            size={28}
            className="
              text-blue-600
              animate-spin
            "
          />

          <h2
            className="
              text-xl
              font-bold
              text-slate-900
            "
          >
            Verifying Access
          </h2>

          <p
            className="
              text-sm
              text-slate-500
              text-center
            "
          >
            Please wait while we validate
            your enterprise session.
          </p>
        </div>
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Unauthorized
  |--------------------------------------------------------------------------
  */

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Authorized
  |--------------------------------------------------------------------------
  */

  return children;
};

export default ProtectedRoute;