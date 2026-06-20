import React, { useState } from "react";
import {
  Upload,
  FileSpreadsheet,
  Database,
  CheckCircle2,
  AlertTriangle,
  FileText,
  CloudUpload,
  Brain,
  X,
} from "lucide-react";

const UploadCenter = () => {
  const [selectedFile, setSelectedFile] =
    useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-4">

      {/* HEADER */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          p-5
        "
      >
        <h2 className="text-xl font-bold text-slate-900">
          Dataset Upload Center
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Upload CSV and Excel datasets for AI forecasting
        </p>

      </div>

      {/* UPLOAD AREA */}

      <div
        className="
          bg-white
          rounded-2xl
          border-2
          border-dashed
          border-blue-300
          shadow-sm
          p-10
          text-center
          hover:border-blue-500
          transition-all
        "
      >

        <CloudUpload
          size={60}
          className="
            mx-auto
            text-blue-600
            mb-4
          "
        />

        <h3
          className="
            text-xl
            font-semibold
            text-slate-900
          "
        >
          Drag & Drop Dataset
        </h3>

        <p
          className="
            text-sm
            text-slate-500
            mt-2
            mb-6
          "
        >
          Upload CSV, XLSX or XLS files for forecasting
        </p>

        <label
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-blue-600
            text-white
            cursor-pointer
            hover:bg-blue-700
          "
        >
          <Upload size={18} />
          Select File

          <input
            type="file"
            hidden
            accept=".csv,.xlsx,.xls"
            onChange={handleFileChange}
          />
        </label>

      </div>

      {/* SELECTED FILE */}

      {selectedFile && (
        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            shadow-sm
            p-5
          "
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <FileSpreadsheet
                size={22}
                className="text-green-600"
              />

              <div>

                <h4 className="font-semibold">
                  {selectedFile.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {(
                    selectedFile.size /
                    1024 /
                    1024
                  ).toFixed(2)}
                  MB
                </p>

              </div>

            </div>

            <button
              onClick={() =>
                setSelectedFile(null)
              }
              className="
                h-9
                w-9
                rounded-lg
                hover:bg-slate-100
                flex
                items-center
                justify-center
              "
            >
              <X size={18} />
            </button>

          </div>

        </div>
      )}

      {/* KPI CARDS */}

      <div className="grid md:grid-cols-3 gap-4">

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            shadow-sm
            p-5
          "
        >

          <Database
            size={24}
            className="text-blue-600"
          />

          <p
            className="
              text-sm
              text-slate-500
              mt-3
            "
          >
            Active Datasets
          </p>

          <h3
            className="
              text-3xl
              font-bold
              mt-2
            "
          >
            248
          </h3>

        </div>

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            shadow-sm
            p-5
          "
        >

          <CheckCircle2
            size={24}
            className="text-green-600"
          />

          <p
            className="
              text-sm
              text-slate-500
              mt-3
            "
          >
            Successful Uploads
          </p>

          <h3
            className="
              text-3xl
              font-bold
              mt-2
            "
          >
            12,486
          </h3>

        </div>

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            shadow-sm
            p-5
          "
        >

          <AlertTriangle
            size={24}
            className="text-amber-600"
          />

          <p
            className="
              text-sm
              text-slate-500
              mt-3
            "
          >
            Validation Issues
          </p>

          <h3
            className="
              text-3xl
              font-bold
              mt-2
            "
          >
            14
          </h3>

        </div>

      </div>

      {/* DATASET REQUIREMENTS */}

      <div
        className="
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          p-5
        "
      >

        <h3 className="font-semibold mb-4">
          Dataset Requirements
        </h3>

        <div className="space-y-3">

          <div className="flex items-center gap-3">
            <FileText
              size={18}
              className="text-blue-600"
            />
            <span>
              Supported formats: CSV, XLSX, XLS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-green-600"
            />
            <span>
              Required columns:
              Date, Product, Sales
            </span>
          </div>

          <div className="flex items-center gap-3">
            <AlertTriangle
              size={18}
              className="text-amber-600"
            />
            <span>
              Maximum file size: 100 MB
            </span>
          </div>

        </div>

      </div>

      {/* AI VALIDATION */}

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

          <Brain size={24} />

          <h3 className="text-xl font-bold">
            AI Dataset Validation
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <h4
              className="
                text-cyan-300
                font-semibold
              "
            >
              Smart Validation
            </h4>

            <p className="text-slate-300 mt-2">
              Automatically detects missing
              values and invalid records.
            </p>

          </div>

          <div>

            <h4
              className="
                text-green-300
                font-semibold
              "
            >
              Forecast Readiness
            </h4>

            <p className="text-slate-300 mt-2">
              AI evaluates dataset quality
              before forecasting.
            </p>

          </div>

          <div>

            <h4
              className="
                text-yellow-300
                font-semibold
              "
            >
              Recommendation
            </h4>

            <p className="text-slate-300 mt-2">
              Maintain complete historical
              sales data for higher accuracy.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UploadCenter;