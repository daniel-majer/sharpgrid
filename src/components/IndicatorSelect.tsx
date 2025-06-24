import { useCoverageContext } from "../context/CoverageContext";
import { INDICATORS } from "../utils/data";

const IndicatorSelect = () => {
  const { indicator, setIndicator } = useCoverageContext();
  return (
    <div className="flex-1">
      <label className="mb-1 block font-medium text-gray-700">Indicator</label>
      <select
        className="w-full rounded border bg-white px-3 py-2 text-gray-800 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        value={indicator}
        onChange={(e) => setIndicator(e.target.value)}
      >
        {INDICATORS.map((i) => (
          <option key={i.value} value={i.value}>
            {i.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IndicatorSelect;
