import { useCoverageContext } from "../context/CoverageContext";
import { COUNTRIES, INDICATORS } from "../utils/data";

const CoverageDetails = () => {
  const {
    indicator,
    country,
    coverageData: {
      results: { total, filled },
    },
  } = useCoverageContext();

  const selectedCountry = COUNTRIES.find((c) => c.value === country);
  const selectedIndicator = INDICATORS.find((i) => i.value === indicator);
  const percent = total && filled ? ((filled / total) * 100).toFixed(1) : "0.0";
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{selectedCountry?.label}</span>
        <span className="text-gray-500">/</span>
        <span className="text-lg font-semibold">
          {selectedIndicator?.label}
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-6 md:flex-row">
        <div className="flex-1">
          <div className="mb-1 text-sm text-gray-500">Total outlets</div>
          <div className="text-2xl font-bold text-[#1B2A41]">{total}</div>
        </div>
        <div className="flex-1">
          <div className="mb-1 text-sm text-gray-500">With indicator</div>
          <div className="text-2xl font-bold text-[#1B2A41]">{filled}</div>
        </div>
        <div className="flex-1">
          <div className="mb-1 text-sm text-gray-500">Coverage</div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-24 rounded bg-gray-200">
              <div
                className={`h-3 rounded ${percent && +percent > 80 ? "bg-green-500" : percent && +percent > 40 ? "bg-yellow-400" : "bg-red-400"}`}
                style={{ width: `${percent}%` }}
              />
            </div>
            <span
              className={`ml-2 rounded px-2 py-0.5 text-xs font-bold text-white ${percent && +percent > 80 ? "bg-green-500" : percent && +percent > 40 ? "bg-yellow-400" : "bg-red-400"}`}
            >
              {percent}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageDetails;
