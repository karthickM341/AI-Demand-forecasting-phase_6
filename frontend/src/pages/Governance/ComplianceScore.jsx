import React from "react";
import {
  ShieldCheck,
  FileCheck,
  Database,
  Brain,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

const complianceMetrics = [
  {
    title: "Overall Compliance",
    score: "98.2%",
    icon: ShieldCheck,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "AI Governance",
    score: "97.6%",
    icon: Brain,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Data Governance",
    score: "98.8%",
    icon: Database,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Audit Readiness",
    score: "96.4%",
    icon: FileCheck,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

const complianceAreas = [
  {
    name: "AI Governance Policy",
    score: 99,
    color: "bg-green-500",
  },
  {
    name: "Model Compliance",
    score: 97,
    color: "bg-blue-500",
  },
  {
    name: "Data Governance",
    score: 98,
    color: "bg-purple-500",
  },
  {
    name: "Regulatory Alignment",
    score: 95,
    color: "bg-cyan-500",
  },
  {
    name: "Audit Controls",
    score: 96,
    color: "bg-orange-500",
  },
];

const ComplianceScore = () => {
  return (
    <div className="space-y-4">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <ShieldCheck
            size={28}
            className="text-green-600"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Compliance Score
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Enterprise compliance monitoring and governance performance
            </p>
          </div>

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {complianceMetrics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                p-5
                shadow-sm
              "
            >
              <div
                className={`
                  h-12
                  w-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  ${item.bg}
                `}
              >
                <Icon
                  size={24}
                  className={item.color}
                />
              </div>

              <p className="text-sm text-slate-500 mt-4">
                {item.title}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {item.score}
              </h3>
            </div>
          );
        })}

      </div>

      {/* Compliance Overview */}

      <div className="grid grid-cols-12 gap-4">

        <div className="col-span-12 xl:col-span-8">

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

            <h3 className="text-lg font-semibold mb-6">
              Compliance Performance
            </h3>

            <div className="space-y-6">

              {complianceAreas.map((item) => (
                <div key={item.name}>

                  <div className="flex justify-between mb-2">
                    <span className="font-medium">
                      {item.name}
                    </span>

                    <span className="font-semibold">
                      {item.score}%
                    </span>
                  </div>

                  <div className="w-full h-3 bg-slate-100 rounded-full">

                    <div
                      className={`h-3 rounded-full ${item.color}`}
                      style={{
                        width: `${item.score}%`,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Governance Health */}

        <div className="col-span-12 xl:col-span-4">

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-full">

            <h3 className="font-semibold mb-5">
              Governance Health
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span>Compliance Status</span>

                <span className="text-green-600 font-semibold">
                  Excellent
                </span>
              </div>

              <div className="flex justify-between">
                <span>Risk Level</span>

                <span className="text-amber-600 font-semibold">
                  Low
                </span>
              </div>

              <div className="flex justify-between">
                <span>Audit Status</span>

                <span className="text-blue-600 font-semibold">
                  Ready
                </span>
              </div>

              <div className="flex justify-between">
                <span>Governance Score</span>

                <span className="text-purple-600 font-semibold">
                  98.2%
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Compliance Modules */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Scale
            size={24}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Regulatory Compliance
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Industry and enterprise policy alignment.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Brain
            size={24}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Responsible AI
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Ethical AI governance and monitoring.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Database
            size={24}
            className="text-cyan-600"
          />

          <h3 className="font-semibold mt-4">
            Data Governance
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Data quality and lineage controls.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Audit Controls
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Forecast validation and audit readiness.
          </p>
        </div>

      </div>

      {/* Executive Intelligence */}

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
            Compliance Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Governance Performance
            </h4>

            <p className="text-slate-300 mt-2">
              Compliance score remains above enterprise targets.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Audit Readiness
            </h4>

            <p className="text-slate-300 mt-2">
              Systems remain fully prepared for regulatory audits.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Risk Assessment
            </h4>

            <p className="text-slate-300 mt-2">
              No critical governance risks detected.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ComplianceScore;