import { LucideLoaderCircle } from "lucide-react";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <LucideLoaderCircle className="h-10 w-10 animate-spin" />
  </div>
);

export default LoadingSpinner;
