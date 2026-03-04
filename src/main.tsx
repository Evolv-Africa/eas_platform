import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Handle stale chunks and dynamic import errors globally
globalThis.addEventListener("unhandledrejection", (event) => {
  const error = event.reason;

  // Detect failed dynamic imports or chunk load errors
  if (
    error?.message?.includes("Failed to fetch dynamically imported module") ||
    error?.message?.includes("Importing a module script failed") ||
    error?.message?.includes("Loading chunk") ||
    error?.message?.includes("ChunkLoadError")
  ) {
    console.warn("Detected stale JS chunk after tab restore. Reloading...");
    safeReload();
  }
});

// Fallback for some browsers that emit as window error
globalThis.addEventListener("error", (event) => {
  const message = event.message || "";
  if (
    message.includes("Failed to fetch dynamically imported module") ||
    message.includes("Loading chunk") ||
    message.includes("ChunkLoadError")
  ) {
    console.warn("Detected stale script, reloading...");
    safeReload();
  }
});

function safeReload() {
  const key = "last-reload-time";
  const lastReload = sessionStorage.getItem(key);
  const now = Date.now();

  // Prevent infinite reload loop
  if (!lastReload || now - Number(lastReload) > 5000) {
    sessionStorage.setItem(key, String(now));
    globalThis.location.reload();
  }
}

declare global {
  interface Window {
    safeReload: typeof safeReload;
  }
}

(globalThis as unknown as Window).safeReload = safeReload;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
