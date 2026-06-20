import React from "react";
import {
  Search,
  Filter,
  X,
} from "lucide-react";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  showFilter = true,
  showClear = true,
  onFilter,
}) => {
  return (
    <div className="flex items-center gap-3">

      {/* Search Input */}

      <div className="relative flex-1">

        <Search
          size={20}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            h-14
            pl-12
            pr-12
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:border-indigo-500
            transition-all
          "
        />

        {showClear && value && (
          <button
            onClick={() =>
              onChange({
                target: {
                  value: "",
                },
              })
            }
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              hover:text-slate-700
            "
          >
            <X size={18} />
          </button>
        )}

      </div>

      {/* Filter Button */}

      {showFilter && (
        <button
          onClick={onFilter}
          className="
            h-14
            px-5
            rounded-2xl
            bg-white
            border
            border-slate-200
            shadow-sm
            flex
            items-center
            gap-2
            hover:bg-slate-50
            transition-all
          "
        >
          <Filter size={18} />
          Filter
        </button>
      )}

    </div>
  );
};

export default SearchBar;