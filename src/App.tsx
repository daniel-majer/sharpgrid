import { useState } from "react";
import CoverageTable from "./components/CoverageTable";
import { INDICATORS } from "./utils/data";
import SelectIndicator from "./components/Select";
import Heading from "./components/Heading";

function App() {
  const [indicator, setIndicator] = useState(INDICATORS[0].value);
  return (
    <div className="min-h-screen bg-gray-50 px-2 py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Heading />
        <SelectIndicator indicator={indicator} setIndicator={setIndicator} />
        <CoverageTable indicator={indicator} />
      </div>
    </div>
  );
}

export default App;
