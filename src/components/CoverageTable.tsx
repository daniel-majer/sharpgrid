import { LucideLoaderCircle } from "lucide-react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import useCoverageData from "../hooks/useCoverageData";

type CoverageTableProps = {
  indicator: string;
};

const CoverageTable = ({ indicator }: CoverageTableProps) => {
  const { results, isLoading, isError } = useCoverageData(indicator);

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

  return (
    <div className="overflow-x-auto py-4">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[#1B2A41] bg-white px-4 py-6">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHead />
          <TableBody results={results} />
        </table>
      </div>
    </div>
  );
};

export default CoverageTable;
