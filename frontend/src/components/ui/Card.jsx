import React from "react";

const Card = ({
  children,
  className = "",
  title,
  subtitle,
  action,
}) => {
  return (
    <div
      className={`
        bg-white
        rounded-3xl
        border
        border-slate-200
        shadow-sm
        p-6
        transition-all
        duration-300
        hover:shadow-lg
        ${className}
      `}
    >
      {(title || subtitle || action) && (
        <div className="flex items-start justify-between mb-5">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-slate-900">
                {title}
              </h3>
            )}

            {subtitle && (
              <p className="text-sm text-slate-500 mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {action && (
            <div>
              {action}
            </div>
          )}
        </div>
      )}

      {children}
    </div>
  );
};

export default Card;