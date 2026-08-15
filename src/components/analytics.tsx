"use client";

import * as React from "react";

// Analytics beacon — disabled for now (no personal analytics endpoint configured)
// Replace ENDPOINT and KEY with your own analytics service when deploying.
const ENDPOINT = "";
const KEY = "portfolio:site";

const isLocal = (h: string) =>
  h === "localhost" ||
  h === "127.0.0.1";

// records the deployment hostname once per browser, so I know where builds run.
export default function Analytics() {
  React.useEffect(() => {
    if (!ENDPOINT) return;
    const host = window.location.hostname;
    if (isLocal(host)) return;

    try {
      if (localStorage.getItem(KEY) === host) return;
      localStorage.setItem(KEY, host);
    } catch {
      /* private mode */
    }

    // text/plain -> simple request, no preflight
    const body = new Blob([JSON.stringify({ host })], { type: "text/plain" });
    navigator.sendBeacon?.(ENDPOINT, body);
  }, []);

  return null;
}
