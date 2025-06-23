import React from "react";
import { INDICATORS } from "../utils/data";

type SelectIndicatorProps = {
  indicator: string;
  setIndicator: React.Dispatch<React.SetStateAction<string>>;
};

const SelectIndicator = ({ indicator, setIndicator }: SelectIndicatorProps) => {
  return (
    <div className="mb-6 flex flex-col items-start gap-4 md:flex-row md:items-center">
      <label className="font-medium text-gray-700">Indicator:</label>
      <select
        className="w-full rounded border bg-white px-3 py-2 text-gray-800 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none md:w-auto"
        value={indicator}
        onChange={(e) => setIndicator(e.target.value)}
      >
        {INDICATORS.map((col) => (
          <option key={col.value} value={col.value}>
            {col.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectIndicator;
