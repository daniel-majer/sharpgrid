import Heading from "./components/Heading";
import CountrySelect from "./components/CountrySelect";
import IndicatorSelect from "./components/IndicatorSelect";
import CoverageTabs from "./components/CoverageTabs";
import { useCoverageContext } from "./context/CoverageContext";

function App() {
  const { showResult, setShowResult, coverageData } = useCoverageContext();

  const {
    results: { loading, error, errorMsg },
  } = coverageData;

  return (
    <div className="min-h-screen bg-gray-50 px-2 py-8 md:px-8">
      <div className="mx-auto max-w-2xl">
        <Heading />
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <CountrySelect />
          <IndicatorSelect />
        </div>
        <button
          className="mb-8 w-full rounded-lg bg-[#1B2A41] px-6 py-2 font-bold text-white shadow transition hover:bg-[#16305a]"
          onClick={() => setShowResult((res) => !res)}
          disabled={loading}
        >
          {showResult ? "Close Coverage" : "Show Coverage"}
        </button>
        {error && <div className="mb-4 text-red-500">{errorMsg}</div>}
        {showResult && <CoverageTabs />}
      </div>
    </div>
  );
}

export default App;
