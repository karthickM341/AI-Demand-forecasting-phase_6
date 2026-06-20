import React from "react";
import { Plus, Download, Filter } from "lucide-react";

const PageHeader = ({
  title,
  subtitle,
  actionLabel,
  onAction,
  showFilter = false,
  showExport = false,
}) => {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-4
        mb-6
      "
    >
      {/* Left Section */}
      <div>
        <h1
          className="
            text-3xl
            lg:text-4xl
            font-bold
            text-slate-900
          "
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="
              mt-2
              text-slate-500
              text-sm
              lg:text-base
            "
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 flex-wrap">

        {showFilter && (
          <button
            className="
              flex
              items-center
              gap-2
              px-4
              py-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              hover:bg-slate-50
              transition-all
            "
          >
            <Filter size={18} />
            Filter
          </button>
        )}

        {showExport && (
          <button
            className="
              flex
              items-center
              gap-2
              px-4
              py-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              hover:bg-slate-50
              transition-all
            "
          >
            <Download size={18} />
            Export
          </button>
        )}

        {actionLabel && (
          <button
            onClick={onAction}
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-2xl
              bg-indigo-600
              text-white
              font-medium
              hover:bg-indigo-700
              transition-all
              shadow-lg
            "
          >
            <Plus size={18} />
            {actionLabel}
          </button>
        )}

      </div>
    </div>
  );
};

export default PageHeader;