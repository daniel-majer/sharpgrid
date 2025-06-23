import { LucideLoaderCircle } from "lucide-react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import useCoverageData from "../hooks/useCoverageData";
import type { CoverageResult } from "../types";

type CoverageTableProps = {
  indicator: string;
};

const CoverageTable = ({ indicator }: CoverageTableProps) => {
  const { queries, isLoading, isError } = useCoverageData(indicator);

  if (isLoading) {
    return (
      <div className="grid place-items-center py-8">
        <LucideLoaderCircle className="size-20 animate-spin" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="py-8 text-center text-red-500">Something went wrong</div>
    );
  }

  const results = queries
    .map(({ data }) => {
      if (!data) return null;
      return {
        country: data.country.label,
        total: data.total,
        filled: data.filled,
      };
    })
    .filter(Boolean) as CoverageResult[];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg border border-gray-200 bg-white shadow-sm">
        <TableHead />
        <TableBody results={results} />
      </table>
    </div>
  );
};

export default CoverageTable;
