import { formatNumber, percent } from "../utils/utils";
import type { CoverageResult } from "../types";

const getBadgeColor = (pct: number) => {
  if (pct > 80) return "bg-green-500";
  if (pct > 40) return "bg-yellow-400";
  return "bg-red-400";
};

const TableBody = ({ results }: { results: CoverageResult[] }) => (
  <tbody className="bg-white">
    {results.map(({ country, total, filled }) => {
      const isSupported = filled > 0;
      const pct = total ? (filled / total) * 100 : 0;
      return (
        <tr
          key={country}
          className="border-t border-gray-200 transition hover:bg-[#EAF1FB] hover:shadow-md rounded-lg"
        >
          <td className="px-6 py-3 font-bold text-[#1B2A41] flex items-center gap-2 text-base">
            <span className="text-xl">{country}</span>
          </td>
          <td className="px-6 py-3 text-right text-gray-700 font-medium">{total ? formatNumber(total) : "-"}</td>
          <td className="px-6 py-3 text-right">
            {isSupported ? (
              <span className="inline-block rounded bg-[#1B2A41] px-3 py-1 text-white font-semibold text-sm shadow">
                {formatNumber(filled)}
              </span>
            ) : (
              <span className="text-gray-400 italic">Not supported</span>
            )}
          </td>
          <td className="px-6 py-3 text-right">
            {isSupported ? (
              <div className="flex items-center gap-2 justify-end">
                <div className="w-32 h-2 bg-gray-200 rounded overflow-hidden">
                  <div
                    className={`h-2 transition-all duration-500 rounded ${getBadgeColor(pct)}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span
                  className={`ml-2 px-2 py-0.5 rounded text-xs font-bold text-white ${getBadgeColor(pct)}`}
                >
                  {percent(filled, total)}
                </span>
              </div>
            ) : (
              <span className="text-gray-400">—</span>
            )}
          </td>
        </tr>
      );
    })}
  </tbody>
);

export default TableBody;
