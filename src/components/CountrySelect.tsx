import { useCoverageContext } from "../context/CoverageContext";
import { COUNTRIES } from "../utils/data";

const CountrySelect = () => {
  const { country, setCountry } = useCoverageContext();

  return (
    <div className="flex-1">
      <label className="mb-1 block font-medium text-gray-700">Country</label>
      <select
        className="w-full rounded border bg-white px-3 py-2 text-gray-800 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        {COUNTRIES.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
