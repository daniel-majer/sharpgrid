export interface Country {
    label: string;
    value: string;
  }
  
  export interface Indicator {
    label: string;
    value: string;
  }
  
  export interface CoverageData {
    country: Country;
    total: number;
    filled: number;
  }
  
  export interface CoverageResult {
    country: string;
    total: number;
    filled: number;
  }
  
  export interface ApiResponse {
    data: number;
  }