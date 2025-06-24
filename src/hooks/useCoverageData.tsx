import { useQueries } from "@tanstack/react-query";
import { getTotal, getIndicator } from "../utils/services";

export type UseCoverageDataResult = ReturnType<typeof useCoverageData>;

const useCoverageData = (
  country: string,
  indicator: string,
  showResult: boolean,
) => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["total", country],
        queryFn: () => getTotal(country),
        enabled: showResult,
      },
      {
        queryKey: ["indicator", country, indicator],
        queryFn: () => getIndicator(country, indicator),
        enabled: showResult,
      },
    ],
    combine: (results) => {
      return {
        total: results[0].data,
        filled: results[1].data,
        loading: results[0].isLoading || results[1].isLoading,
        error: results[0].isError || results[1].isError,
        errorMsg:
          (results[0].error as Error)?.message ||
          (results[1].error as Error)?.message,
      };
    },
  });
  return { results };
};

export default useCoverageData;
