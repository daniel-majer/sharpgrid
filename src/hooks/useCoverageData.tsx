import { useQueries } from "@tanstack/react-query";
import { COUNTRIES } from "../utils/data";
import { getTotal, getIndicator } from "../utils/services";

const useCoverageData = (indicator: string) => {
  const queries = useQueries({
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
  });
  const isLoading = queries.some((q) => q.isLoading || q.isPending);
  const isError = queries.some((q) => q.isError);
  return { queries, isLoading, isError };
};

export default useCoverageData;
