import { useQueries } from "@tanstack/react-query";
import { COUNTRIES } from "../utils/data";
import { getTotal, getIndicator } from "../utils/services";
import type { CoverageResult } from "../types";

const useCoverageData = (indicator: string) => {
  return useQueries({
    queries: COUNTRIES.map((country) => ({
      queryKey: ["coverage", country.value, indicator],
      queryFn: async () => {
        const [total, filled] = await Promise.all([
          getTotal(country.value),
          getIndicator(country.value, indicator),
        ]);
        return { country, total, filled };
      },
    })),
    combine: (queries) => {
      const isLoading = queries.some((q) => q.isLoading || q.isPending);
      const isError = queries.some((q) => q.isError);
      const results = queries
        .map(({ data }) => {
          if (!data) return null;
          return {
            country: data.country.label,
            total: data.total,
            filled: data.filled,
          };
        })
        .filter((result): result is CoverageResult => result !== null);

      return { results, isLoading, isError };
    },
  });
};

export default useCoverageData;
