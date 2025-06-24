import { useState } from "react";
import CoverageDetails from "./CoverageDetails";
import CoverageRawJson from "./CoverageRawJson";
import LoadingSpinner from "./LoadingSpinner";
import { useCoverageContext } from "../context/CoverageContext";

const CoverageTabs = () => {
  const [activeTab, setActiveTab] = useState<"details" | "json">("details");
  const {
    coverageData: {
      results: { loading },
    },
  } = useCoverageContext();

  return (
    <div className="rounded-2xl border border-[#1B2A41] bg-white px-4 py-6 shadow-xl">
      {loading ? (
        <div className="mb-4 flex justify-center gap-2">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="mb-4 flex gap-2">
            <button
              className={`rounded-t-lg border-b-2 px-4 py-2 font-semibold transition ${activeTab === "details" ? "border-[#1B2A41] bg-gray-100 text-[#1B2A41]" : "border-transparent bg-transparent text-gray-500"}`}
              onClick={() => setActiveTab("details")}
            >
              Details
            </button>
            <button
              className={`rounded-t-lg border-b-2 px-4 py-2 font-semibold transition ${activeTab === "json" ? "border-[#1B2A41] bg-gray-100 text-[#1B2A41]" : "border-transparent bg-transparent text-gray-500"}`}
              onClick={() => setActiveTab("json")}
            >
              Raw JSON
            </button>
          </div>
          {activeTab === "details" && <CoverageDetails />}
          {activeTab === "json" && <CoverageRawJson />}
        </>
      )}
    </div>
  );
};

export default CoverageTabs;
