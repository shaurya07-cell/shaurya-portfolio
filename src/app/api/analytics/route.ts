import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const ADMIN_PASSWORD = "Shauryaadmin@2409";

export interface VisitorLog {
  id: string;
  visitorId: string;
  name: string;
  timestamp: string;
  device: "Mobile" | "Desktop" | "Tablet" | "Unknown";
  os: string;
  browser: string;
  screenResolution: string;
  language: string;
  city?: string;
  region?: string;
  country?: string;
  countryCode?: string;
  ip?: string;
  referrer: string;
  path: string;
  userAgent: string;
}

// In-memory fallback in case of read-only serverless filesystem
let memoryLogs: VisitorLog[] = [];

function getStoragePaths() {
  const localFile = path.join(process.cwd(), "src", "data", "analytics.json");
  const tmpFile = path.join("/tmp", "analytics.json");
  return { localFile, tmpFile };
}

function readLogs(): VisitorLog[] {
  const { localFile, tmpFile } = getStoragePaths();

  // Try reading from src/data/analytics.json first
  try {
    if (fs.existsSync(localFile)) {
      const data = fs.readFileSync(localFile, "utf-8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        memoryLogs = parsed;
        return parsed;
      }
    }
  } catch {
    // ignore and try tmpFile
  }

  // Try reading from /tmp/analytics.json
  try {
    if (fs.existsSync(tmpFile)) {
      const data = fs.readFileSync(tmpFile, "utf-8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        memoryLogs = parsed;
        return parsed;
      }
    }
  } catch {
    // ignore
  }

  return memoryLogs;
}

function writeLogs(logs: VisitorLog[]): boolean {
  memoryLogs = logs;
  const { localFile, tmpFile } = getStoragePaths();
  const serialized = JSON.stringify(logs, null, 2);

  let written = false;

  // Try writing to localFile
  try {
    const dir = path.dirname(localFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(localFile, serialized, "utf-8");
    written = true;
  } catch {
    // might be read-only filesystem on serverless
  }

  // Also write to tmpFile as fallback
  try {
    fs.writeFileSync(tmpFile, serialized, "utf-8");
    written = true;
  } catch {
    // ignore
  }

  return written;
}

// GET: Fetch analytics logs and summary (Requires admin password)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const auth = searchParams.get("auth");

    if (auth !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access. Invalid admin password." },
        { status: 401 }
      );
    }

    const logs = readLogs();

    // Compute Summary Statistics
    const totalViews = logs.length;
    const uniqueVisitorIds = new Set(logs.map((l) => l.visitorId || l.ip || l.id));
    const uniqueVisitors = uniqueVisitorIds.size;

    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const todayViews = logs.filter((l) => l.timestamp >= oneDayAgo).length;

    const deviceStats = {
      mobile: logs.filter((l) => l.device === "Mobile").length,
      desktop: logs.filter((l) => l.device === "Desktop").length,
      tablet: logs.filter((l) => l.device === "Tablet").length,
      unknown: logs.filter((l) => !["Mobile", "Desktop", "Tablet"].includes(l.device)).length,
    };

    // Frequency counters helper
    const getTopItems = (items: (string | undefined)[], limit = 5) => {
      const counts: Record<string, number> = {};
      items.forEach((item) => {
        const key = item && item.trim() !== "" ? item : "Unknown / Direct";
        counts[key] = (counts[key] || 0) + 1;
      });
      return Object.entries(counts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, limit);
    };

    const topBrowsers = getTopItems(logs.map((l) => l.browser));
    const topOS = getTopItems(logs.map((l) => l.os));
    const topLocations = getTopItems(
      logs.map((l) => (l.city && l.country ? `${l.city}, ${l.country}` : l.country || l.city))
    );
    const topReferrers = getTopItems(logs.map((l) => l.referrer));

    return NextResponse.json({
      success: true,
      logs,
      summary: {
        totalViews,
        uniqueVisitors,
        todayViews,
        deviceStats,
        topBrowsers,
        topOS,
        topLocations,
        topReferrers,
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

// POST: Record a new visitor log
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if this is a visitor identity update (e.g. from Contact form submission)
    if (body.action === "identify" && body.visitorId && body.name) {
      const currentLogs = readLogs();
      let updated = false;

      for (let i = 0; i < currentLogs.length; i++) {
        if (currentLogs[i].visitorId === body.visitorId) {
          currentLogs[i].name = `${body.name} (Contact Inquiry)`;
          updated = true;
        }
      }

      if (updated) {
        writeLogs(currentLogs);
      }

      return NextResponse.json({
        success: true,
        message: "Visitor identified successfully",
      });
    }

    // Capture IP from server headers
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const cfIp = request.headers.get("cf-connecting-ip");
    const headerIp = (forwarded ? forwarded.split(",")[0].trim() : realIp || cfIp || "").replace(
      "::ffff:",
      ""
    );

    // Capture Cloudflare or Vercel Geo headers if available
    const vercelCity = request.headers.get("x-vercel-ip-city");
    const vercelRegion = request.headers.get("x-vercel-ip-country-region");
    const vercelCountry = request.headers.get("x-vercel-ip-country");

    const newLog: VisitorLog = {
      id: `vis_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      visitorId: body.visitorId || `vid_${Math.random().toString(36).substring(2, 9)}`,
      name: body.name || (body.city ? `Visitor from ${body.city}` : "Guest Visitor"),
      timestamp: body.timestamp || new Date().toISOString(),
      device: body.device || "Desktop",
      os: body.os || "Unknown OS",
      browser: body.browser || "Unknown Browser",
      screenResolution: body.screenResolution || "Unknown",
      language: body.language || "en",
      city: body.city || (vercelCity ? decodeURIComponent(vercelCity) : undefined),
      region: body.region || vercelRegion || undefined,
      country: body.country || vercelCountry || undefined,
      countryCode: body.countryCode || vercelCountry || undefined,
      ip: headerIp || body.ip || "127.0.0.1",
      referrer: body.referrer || "Direct",
      path: body.path || "/",
      userAgent: body.userAgent || request.headers.get("user-agent") || "",
    };

    const currentLogs = readLogs();
    // Prepend new log to top
    const updatedLogs = [newLog, ...currentLogs].slice(0, 500); // retain up to 500 latest visits
    writeLogs(updatedLogs);

    return NextResponse.json({
      success: true,
      message: "Visit recorded",
      logId: newLog.id,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error saving visitor";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

// DELETE: Clear analytics logs (Requires admin password)
export async function DELETE(request: Request) {
  try {
    const body = await request.json();

    if (body.password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Incorrect admin password." },
        { status: 401 }
      );
    }

    writeLogs([]);
    return NextResponse.json({
      success: true,
      message: "All visitor logs cleared successfully",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error clearing logs";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

