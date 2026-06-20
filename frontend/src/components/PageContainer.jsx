import React from "react";

const PageContainer = ({
  title,
  subtitle,
  actions,
  children,
}) => {
  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          px-6
          py-5
          shadow-sm
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-2
          "
        >
          {/* Left */}
          <div>
            <h1
              className="
                text-3xl
                font-bold
                text-slate-900
              "
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500
                "
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Actions */}
          {actions && (
            <div
              className="
                flex
                items-center
                gap-2
                flex-wrap
              "
            >
              {actions}
            </div>
          )}
        </div>
      </div>

      {/* Page Content */}
      <div className="space-y-2">
        {children}
      </div>

    </div>
  );
};

export default PageContainer;