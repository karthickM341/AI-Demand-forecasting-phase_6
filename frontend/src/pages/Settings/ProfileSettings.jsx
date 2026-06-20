import React, { useState } from "react";
import {
  User,
  Building2,
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  CheckCircle2,
  Shield,
  Sparkles,
} from "lucide-react";

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    firstName: "Admin",
    lastName: "User",
    email: "admin@enterprise.com",
    phone: "+1 9876543210",
    organization: "AI Demand Forecasting Inc",
    location: "New York, USA",
    role: "Super Admin",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        <div className="flex items-center gap-3">

          <User
            size={24}
            className="text-blue-600"
          />

          <div>

            <h2 className="text-lg font-bold text-slate-900">
              Profile Settings
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Manage personal profile and organization information
            </p>

          </div>

        </div>

      </div>

      {/* Profile Card */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <div className="flex flex-col md:flex-row items-center gap-6">

          <div className="relative">

            <div
              className="
                h-28
                w-28
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                flex
                items-center
                justify-center
                text-3xl
                font-bold
              "
            >
              AU
            </div>

            <button
              className="
                absolute
                bottom-0
                right-0
                h-10
                w-10
                rounded-full
                bg-white
                border
                border-slate-200
                shadow-sm
                flex
                items-center
                justify-center
              "
            >
              <Camera size={18} />
            </button>

          </div>

          <div className="flex-1">

            <h3 className="text-2xl font-bold text-slate-900">
              Admin User
            </h3>

            <p className="text-slate-500">
              Super Administrator
            </p>

            <div className="flex flex-wrap gap-3 mt-4">

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-green-100
                  text-green-700
                  text-sm
                  font-medium
                "
              >
                Active Account
              </span>

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-blue-100
                  text-blue-700
                  text-sm
                  font-medium
                "
              >
                Enterprise Plan
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Form */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-5 border-b border-slate-100">

          <h3 className="font-semibold">
            Personal Information
          </h3>

        </div>

        <div className="p-5">

          <div className="grid md:grid-cols-2 gap-4">

            <div>

              <label className="block text-sm font-medium mb-2">
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  border
                  border-slate-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  border
                  border-slate-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>

              <div className="relative">

                <Mail
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
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
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

            <div>

              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>

              <div className="relative">

                <Phone
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
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
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

            <div>

              <label className="block text-sm font-medium mb-2">
                Organization
              </label>

              <div className="relative">

                <Building2
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
                  name="organization"
                  value={profile.organization}
                  onChange={handleChange}
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

            <div>

              <label className="block text-sm font-medium mb-2">
                Location
              </label>

              <div className="relative">

                <MapPin
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
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
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

          </div>

        </div>

      </div>

      {/* Account Summary */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Profile Status
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Profile completion score is 100%.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <Shield
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Account Security
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Enterprise-grade security protection enabled.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

          <User
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Access Level
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Full platform administrative access.
          </p>

        </div>

      </div>

      {/* Save */}

      <div className="flex justify-end">

        <button
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-blue-600
            text-white
            hover:bg-blue-700
          "
        >
          <Save size={18} />
          Save Profile
        </button>

      </div>

      {/* AI Insight */}

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
            Profile Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Account Health
            </h4>

            <p className="text-slate-300 mt-2">
              Your profile is fully configured and optimized.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Organization Status
            </h4>

            <p className="text-slate-300 mt-2">
              Enterprise organization settings are active.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Enable multi-factor authentication for enhanced security.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfileSettings;