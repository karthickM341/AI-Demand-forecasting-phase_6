import React from "react";

import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <React.StrictMode>

      <AuthProvider>

        <div
          className="
            min-h-screen
            bg-slate-50
            text-slate-900
            antialiased
          "
        >
          <AppRoutes />
        </div>

      </AuthProvider>

    </React.StrictMode>
  );
}

export default App;