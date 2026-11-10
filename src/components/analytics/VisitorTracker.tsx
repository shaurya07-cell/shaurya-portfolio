"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function getDeviceInfo() {
  if (typeof window === "undefined") {
    return {
      device: "Desktop" as const,
      os: "Unknown",
      browser: "Unknown",
      screenResolution: "Unknown",
      language: "en",
    };
  }

  const ua = navigator.userAgent;
  let device: "Mobile" | "Desktop" | "Tablet" = "Desktop";

  const isTablet =
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk)/i.test(
      ua
    ) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  const isMobile =
    !isTablet &&
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
      ua
    );

  if (isTablet) {
    device = "Tablet";
  } else if (isMobile || window.innerWidth < 768) {
    device = "Mobile";
  } else {
    device = "Desktop";
  }

  // Detect Operating System
  let os = "Other";
  if (/Windows NT 10.0/i.test(ua)) os = "Windows 10/11";
  else if (/Windows/i.test(ua)) os = "Windows";
  else if (/Macintosh|Mac OS X/i.test(ua)) os = "macOS";
  else if (/iPhone|iPad|iPod/i.test(ua)) os = "iOS";
  else if (/Android/i.test(ua)) os = "Android";
  else if (/Linux/i.test(ua)) os = "Linux";
  else if (/CrOS/i.test(ua)) os = "ChromeOS";

  // Detect Browser
  let browser = "Other";
  if (/Edg\//i.test(ua)) browser = "Microsoft Edge";
  else if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) {
    browser = isMobile ? "Chrome Mobile" : "Chrome";
  } else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) {
    browser = isMobile ? "Mobile Safari" : "Safari";
  } else if (/Firefox\//i.test(ua)) browser = "Firefox";
  else if (/Opera|OPR\//i.test(ua)) browser = "Opera";

  const screenResolution = `${window.screen?.width || window.innerWidth}x${
    window.screen?.height || window.innerHeight
  }`;

  return {
    device,
    os,
    browser,
    screenResolution,
    language: navigator.language || "en",
  };
}

export function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Avoid tracking admin page visits as public visitors
    if (pathname?.startsWith("/admin")) return;

    const sessionKey = `tracked_session_${pathname || "/"}`;
    if (sessionStorage.getItem(sessionKey)) return;

    const trackVisit = async () => {
      try {
        let visitorId = localStorage.getItem("shaurya_vid");
        if (!visitorId) {
          visitorId = `v_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
          localStorage.setItem("shaurya_vid", visitorId);
        }

        const visitorName = localStorage.getItem("portfolio_visitor_name") || "";
        const devInfo = getDeviceInfo();

        // Optional quick non-blocking geo fetch
        let geoData: {
          city?: string;
          region?: string;
          country?: string;
          countryCode?: string;
          ip?: string;
        } = {};

        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 1200);

          const geoRes = await fetch("https://ipapi.co/json/", {
            signal: controller.signal,
          });
          clearTimeout(timeoutId);

          if (geoRes.ok) {
            const data = await geoRes.json();
            geoData = {
              city: data.city,
              region: data.region,
              country: data.country_name,
              countryCode: data.country_code,
              ip: data.ip,
            };
          }
        } catch {
          // Geo fetch timed out or blocked by ad-blocker; gracefully continue
        }

        const payload = {
          visitorId,
          name: visitorName || (geoData.city ? `Visitor from ${geoData.city}` : "Guest Visitor"),
          timestamp: new Date().toISOString(),
          ...devInfo,
          ...geoData,
          referrer: document.referrer || "Direct",
          path: pathname || "/",
          userAgent: navigator.userAgent,
        };

        await fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        });

        sessionStorage.setItem(sessionKey, "true");
      } catch {
        // Analytics failure should never impact user experience
      }
    };

    trackVisit();
  }, [pathname]);

  return null;
}

