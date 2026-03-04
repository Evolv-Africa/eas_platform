import loader from "@/assets/gif/loader.gif";

export const PageLoader = () => (
  <div
    data-testid="loading-indicator"
    className="flex items-center justify-center min-h-screen"
  >
    <img alt="page loader" src={loader} />
  </div>
);
