import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

/*
|--------------------------------------------------------------------------
| Auth Provider
|--------------------------------------------------------------------------
*/

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [loading, setLoading] =
    useState(true);

  /*
  |--------------------------------------------------------------------------
  | Initialize Session
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken =
          localStorage.getItem("token");

        const storedUser =
          localStorage.getItem("user");

        if (
          storedToken &&
          storedUser
        ) {
          setToken(storedToken);

          setUser(
            JSON.parse(storedUser)
          );
        }
      } catch (error) {
        console.error(
          "Auth Initialization Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Login
  |--------------------------------------------------------------------------
  */

  const login = async (
    userData,
    accessToken
  ) => {
    localStorage.setItem(
      "token",
      accessToken
    );

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setToken(accessToken);

    setUser(userData);
  };

  /*
  |--------------------------------------------------------------------------
  | Logout
  |--------------------------------------------------------------------------
  */

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setToken(null);

    setUser(null);
  };

  /*
  |--------------------------------------------------------------------------
  | Helpers
  |--------------------------------------------------------------------------
  */

  const isAuthenticated =
    !!token;

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
};

/*
|--------------------------------------------------------------------------
| Custom Hook
|--------------------------------------------------------------------------
*/

export const useAuth = () => {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
};

export default AuthContext;