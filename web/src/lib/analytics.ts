/**
 * Google Analytics 4 (gtag.js) Event Tracking Utility
 */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set" | "js",
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

export type AnalyticsEventType =
  | "phone_click"
  | "whatsapp_click"
  | "quote_submit"
  | "service_view"
  | "suburb_view";

export function trackEvent(action: AnalyticsEventType, params: Record<string, any> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  try {
    window.gtag("event", action, {
      ...params,
      event_timestamp: new Date().toISOString(),
    });
  } catch (err) {
    // Non-blocking telemetry catch
    console.debug("[Analytics Error]", err);
  }
}
