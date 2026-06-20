import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  BarChart3,
  Brain,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    navigate("/dashboard");
  };

  return (
    <div
      className="
        min-h-screen
        grid
        lg:grid-cols-2
        bg-slate-950
      "
    >
      {/* LEFT PANEL */}

      <div
        className="
          hidden
          lg:flex
          flex-col
          justify-between
          p-12
          bg-gradient-to-br
          from-slate-950
          via-blue-950
          to-slate-900
          text-white
        "
      >
        <div>

          <div className="flex items-center gap-3">

            <div
              className="
                h-14
                w-14
                rounded-2xl
                bg-blue-600
                flex
                items-center
                justify-center
              "
            >
              <Brain size={28} />
            </div>

            <div>

              <h1 className="text-3xl font-bold">
                ForecastAI
              </h1>

              <p className="text-slate-400">
                Enterprise Planning Platform
              </p>

            </div>

          </div>

        </div>

        <div>

          <h2
            className="
              text-5xl
              font-bold
              leading-tight
            "
          >
            AI Powered
            <br />
            Demand Forecasting
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-slate-300
              max-w-lg
            "
          >
            Transform planning, forecasting,
            inventory optimization and business
            intelligence with enterprise-grade AI.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">

            <div
              className="
                bg-white/10
                backdrop-blur-lg
                rounded-2xl
                p-5
              "
            >
              <TrendingUp className="mb-3" />

              <h3 className="font-semibold">
                Forecast Accuracy
              </h3>

              <p className="text-3xl font-bold mt-2">
                96.8%
              </p>

            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-lg
                rounded-2xl
                p-5
              "
            >
              <BarChart3 className="mb-3" />

              <h3 className="font-semibold">
                Active Forecasts
              </h3>

              <p className="text-3xl font-bold mt-2">
                12.4K
              </p>

            </div>

          </div>

        </div>

        <div className="text-slate-400 text-sm">
          © 2026 ForecastAI Enterprise Platform
        </div>

      </div>

      {/* RIGHT PANEL */}

      <div
        className="
          flex
          items-center
          justify-center
          p-6
          bg-slate-50
        "
      >
        <div
          className="
            w-full
            max-w-md
            bg-white
            rounded-3xl
            border
            border-slate-200
            shadow-xl
            p-8
          "
        >
          <div className="text-center">

            <div
              className="
                mx-auto
                h-16
                w-16
                rounded-2xl
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
              "
            >
              <ShieldCheck size={30} />
            </div>

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                text-slate-900
              "
            >
              Welcome Back
            </h2>

            <p className="text-slate-500 mt-2">
              Sign in to your enterprise account
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* EMAIL */}

            <div>

              <label className="text-sm font-medium">
                Email Address
              </label>

              <div className="relative mt-2">

                <Mail
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
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="
                    w-full
                    h-12
                    pl-11
                    pr-4
                    rounded-xl
                    border
                    border-slate-300
                    focus:ring-2
                    focus:ring-blue-500
                    outline-none
                  "
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-2">

                <Lock
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
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="
                    w-full
                    h-12
                    pl-11
                    pr-12
                    rounded-xl
                    border
                    border-slate-300
                    focus:ring-2
                    focus:ring-blue-500
                    outline-none
                  "
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                  "
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            {/* OPTIONS */}

            <div
              className="
                flex
                items-center
                justify-between
                text-sm
              "
            >
              <label className="flex gap-2">

                <input
                  type="checkbox"
                  name="remember"
                  checked={
                    formData.remember
                  }
                  onChange={handleChange}
                />

                Remember me

              </label>

              <Link
                to="/forgot-password"
                className="
                  text-blue-600
                  hover:text-blue-700
                "
              >
                Forgot Password?
              </Link>

            </div>

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="
                w-full
                h-12
                rounded-xl
                bg-blue-600
                text-white
                font-semibold
                hover:bg-blue-700
                flex
                items-center
                justify-center
                gap-2
              "
            >
              Sign In
              <ArrowRight size={18} />
            </button>

          </form>

          {/* FOOTER */}

          <div
            className="
              mt-6
              text-center
              text-sm
              text-slate-500
            "
          >
            Don't have an account?

            <Link
              to="/register"
              className="
                ml-2
                text-blue-600
                font-semibold
              "
            >
              Register
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;