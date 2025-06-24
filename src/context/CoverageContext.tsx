import React, { createContext, use, useState } from "react";
import { INDICATORS, COUNTRIES } from "../utils/data";
import useCoverageData, {
  type UseCoverageDataResult,
} from "../hooks/useCoverageData";

interface CoverageContextProps {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  indicator: string;
  setIndicator: React.Dispatch<React.SetStateAction<string>>;
  showResult: boolean;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  coverageData: UseCoverageDataResult;
}

export const CoverageContext = createContext<CoverageContextProps | undefined>(
  undefined,
);

function CoverageProvider({ children }: { children: React.ReactNode }) {
  const [indicator, setIndicator] = useState(INDICATORS[0].value);
  const [country, setCountry] = useState(COUNTRIES[0].value);
  const [showResult, setShowResult] = useState(false);

  const coverageData = useCoverageData(country, indicator, showResult);

  return (
    <CoverageContext.Provider
      value={{
        indicator,
        setIndicator,
        country,
        setCountry,
        showResult,
        setShowResult,
        coverageData,
      }}
    >
      {children}
    </CoverageContext.Provider>
  );
}

const useCoverageContext = () => {
  const ctx = use(CoverageContext);
  if (!ctx)
    throw new Error(
      "useCoverageContext must be used within a CoverageProvider",
    );
  return ctx;
};

export { CoverageProvider, useCoverageContext };
