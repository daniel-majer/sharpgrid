import { formatNumber, percent } from "../utils/utils";
import type { CoverageResult } from "../types";  


type TableBodyProps = {
  results: CoverageResult[];
};

const TableBody = ({ results }: TableBodyProps) => {
  return (
    <tbody>
      {results.map(({ country, total, filled }) => {
        const isSupported = filled > 0;
        const pct = total ? (filled! / total) * 100 : 0;
        return (
          <tr
            key={country}
            className="border-t border-gray-100 transition hover:bg-gray-50"
          >
            <td className="px-4 py-2 font-semibold">{country}</td>
            <td className="px-4 py-2 text-right">
              {total ? formatNumber(total) : "-"}
            </td>
            <td className="px-4 py-2 text-right">
              {isSupported ? (
                formatNumber(filled!)
              ) : (
                <span className="text-gray-400 italic">Not supported</span>
              )}
            </td>
            <td className="px-4 py-2 text-right">
              {isSupported ? (
                <div className="flex items-center justify-end gap-2">
                  <div className="h-2 w-24 rounded bg-gray-200">
                    <div
                      className={`h-2 rounded ${pct > 80 ? "bg-green-500" : pct > 40 ? "bg-yellow-400" : "bg-red-400"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium tabular-nums">
                    {percent(filled!, total!)}
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
};

export default TableBody;
