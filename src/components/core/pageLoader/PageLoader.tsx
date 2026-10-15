import loader from "@/assets/gif/loader.gif";

export const PageLoader = ({ className = "min-h-screen" }: { className?: string }) => (
  <div
    data-testid="loading-indicator"
    className={`flex items-center justify-center ${className}`}
  >
    <img alt="page loader" src={loader} />
  </div>
);
