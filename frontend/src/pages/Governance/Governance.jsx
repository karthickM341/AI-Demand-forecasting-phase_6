import React from "react";

import PageContainer from "../../components/PageContainer";

import {
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  Database,
  Brain,
  Scale,
  CheckCircle2,
  Activity,
  Sparkles,
} from "lucide-react";

const Governance = () => {
  return (
    <PageContainer
      title="AI Governance Center"
      subtitle="Enterprise compliance, audit management and responsible AI governance"
    >
      {/* KPI SECTION */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <ShieldCheck
            size={26}
            className="text-green-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Compliance Score
          </p>

          <h3 className="text-3xl font-bold mt-2">
            98.2%
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <FileCheck
            size={26}
            className="text-blue-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Audits Completed
          </p>

          <h3 className="text-3xl font-bold mt-2">
            124
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <AlertTriangle
            size={26}
            className="text-amber-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Open Risks
          </p>

          <h3 className="text-3xl font-bold mt-2">
            6
          </h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Brain
            size={26}
            className="text-purple-600"
          />

          <p className="text-sm text-slate-500 mt-3">
            Governed Models
          </p>

          <h3 className="text-3xl font-bold mt-2">
            18
          </h3>
        </div>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-12 gap-4">

        {/* Compliance Status */}

        <div className="col-span-12 xl:col-span-8">

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              shadow-sm
            "
          >
            <div className="p-5 border-b border-slate-100">

              <h3 className="text-lg font-semibold">
                Governance Compliance Overview
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Enterprise AI compliance monitoring
              </p>

            </div>

            <div className="p-5 space-y-5">

              <div>
                <div className="flex justify-between mb-2">
                  <span>AI Governance Policy</span>
                  <span className="font-semibold">
                    99%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 rounded-full bg-green-500"
                    style={{ width: "99%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Model Compliance</span>
                  <span className="font-semibold">
                    97%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 rounded-full bg-blue-500"
                    style={{ width: "97%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Data Governance</span>
                  <span className="font-semibold">
                    98%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 rounded-full bg-purple-500"
                    style={{ width: "98%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Audit Readiness</span>
                  <span className="font-semibold">
                    96%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full">
                  <div
                    className="h-3 rounded-full bg-cyan-500"
                    style={{ width: "96%" }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Governance Health */}

        <div className="col-span-12 xl:col-span-4">

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              p-5
              shadow-sm
              h-full
            "
          >
            <h3 className="font-semibold mb-5">
              Governance Health
            </h3>

            <div className="space-y-4">

              <div className="flex items-center justify-between">
                <span>Compliance</span>

                <span className="text-green-600 font-semibold">
                  Excellent
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Risk Level</span>

                <span className="text-amber-600 font-semibold">
                  Low
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Audit Status</span>

                <span className="text-blue-600 font-semibold">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Data Quality</span>

                <span className="text-purple-600 font-semibold">
                  Excellent
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* GOVERNANCE MODULES */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Database
            size={26}
            className="text-blue-600"
          />

          <h3 className="font-semibold mt-4">
            Data Governance
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Data quality, lineage and access controls.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Scale
            size={26}
            className="text-purple-600"
          />

          <h3 className="font-semibold mt-4">
            Regulatory Compliance
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Enterprise compliance monitoring.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <CheckCircle2
            size={26}
            className="text-green-600"
          />

          <h3 className="font-semibold mt-4">
            Audit Management
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Forecast audit and validation controls.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <Activity
            size={26}
            className="text-cyan-600"
          />

          <h3 className="font-semibold mt-4">
            Risk Monitoring
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Real-time AI governance risk analysis.
          </p>
        </div>

      </div>

      {/* AI GOVERNANCE INTELLIGENCE */}

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
            AI Governance Intelligence
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h4 className="text-cyan-300 font-semibold">
              Compliance Status
            </h4>

            <p className="text-slate-300 mt-2">
              All forecasting models remain compliant
              with enterprise governance policies.
            </p>
          </div>

          <div>
            <h4 className="text-green-300 font-semibold">
              Audit Readiness
            </h4>

            <p className="text-slate-300 mt-2">
              System remains fully prepared for
              internal and external audits.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold">
              Risk Assessment
            </h4>

            <p className="text-slate-300 mt-2">
              Current governance risk remains within
              acceptable enterprise thresholds.
            </p>
          </div>

        </div>

      </div>

    </PageContainer>
  );
};

export default Governance;