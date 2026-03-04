import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
    fallback?: React.ReactNode;
  },
  ErrorBoundaryState
> {
  constructor(props: {
    children: React.ReactNode;
    fallback?: React.ReactNode;
  }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    const key = "last-reload-time";
    const lastReload = sessionStorage.getItem(key);
    const now = Date.now();

    if (!lastReload || now - Number(lastReload) > 5000) {
      sessionStorage.setItem(key, String(now));
      globalThis.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-3xl font-bold mb-2 text-shadow-background-error">
              Something went wrong
            </h1>
            <p className="text-base text-text-secondary mb-4">
              An unexpected error occurred. Please try again or contact support.
            </p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => globalThis.location.reload()}
                className="px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary/70 transition"
              >
                Reload Page
              </button>
              <button
                onClick={() => globalThis.history.back()}
                className="px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
              >
                Go To Previous Page
              </button>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
