import { useCoverageContext } from "../context/CoverageContext";

export type CoverageProps = {
  total?: number;
  filled?: number;
};
const CoverageRawJson = () => {
  const {
    country,
    indicator,
    coverageData: {
      results: { total, filled },
    },
  } = useCoverageContext();

  return (
    <pre className="mt-2 overflow-x-auto rounded bg-gray-100 p-4 text-xs">
      {JSON.stringify({ country, indicator, total, filled }, null, 2)}
    </pre>
  );
};

export default CoverageRawJson;
