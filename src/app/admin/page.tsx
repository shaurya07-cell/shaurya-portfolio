"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Eye,
  Users,
  Smartphone,
  Monitor,
  Tablet,
  Calendar,
  Clock,
  Globe,
  MapPin,
  RefreshCw,
  Download,
  Trash2,
  Search,
  ArrowLeft,
  Lock,
  LogOut,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  PlusCircle,
  Activity,
  Chrome,
  Cpu,
  User,
  KeyRound,
  EyeOff,
} from "lucide-react";
import { VisitorLog } from "@/app/api/analytics/route";

const ADMIN_PASSWORD = "Shauryaadmin@2409";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>("");

  const [logs, setLogs] = useState<VisitorLog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [deviceFilter, setDeviceFilter] = useState<string>("All");
  const [isClearing, setIsClearing] = useState<boolean>(false);
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  // Check existing session
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("shaurya_admin_auth");
    if (savedAuth === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    }
    setIsCheckingAuth(false);
  }, []);

  // Live Clock
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Analytics
  const fetchAnalytics = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/analytics?auth=${encodeURIComponent(ADMIN_PASSWORD)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.logs)) {
          setLogs(data.logs);
        }
      } else {
        // If 401, session expired
        setIsAuthenticated(false);
        sessionStorage.removeItem("shaurya_admin_auth");
      }
    } catch {
      // Error fetching
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAnalytics();
    }
  }, [isAuthenticated, fetchAnalytics]);

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      sessionStorage.setItem("shaurya_admin_auth", ADMIN_PASSWORD);
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Access Denied. Incorrect administrator password.");
    }
  };

  // Logout handler
  const handleLogout = () => {
    sessionStorage.removeItem("shaurya_admin_auth");
    setIsAuthenticated(false);
    setPasswordInput("");
  };

  // Clear logs handler
  const handleClearLogs = async () => {
    setIsClearing(true);
    try {
      const res = await fetch("/api/analytics", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: ADMIN_PASSWORD }),
      });
      if (res.ok) {
        setLogs([]);
        setShowClearConfirm(false);
      }
    } catch {
      // error
    } finally {
      setIsClearing(false);
    }
  };

  // Simulate test visit
  const handleSimulateVisit = async () => {
    try {
      const testLog = {
        name: `Test Visitor #${Math.floor(Math.random() * 900 + 100)}`,
        device: Math.random() > 0.5 ? "Desktop" : "Mobile",
        os: Math.random() > 0.5 ? "Windows 11" : "iOS 17",
        browser: Math.random() > 0.5 ? "Chrome 128" : "Mobile Safari",
        screenResolution: Math.random() > 0.5 ? "1920x1080" : "390x844",
        city: "Mumbai",
        region: "Maharashtra",
        country: "India",
        countryCode: "IN",
        ip: `103.${Math.floor(Math.random() * 200)}.${Math.floor(Math.random() * 200)}.12`,
        referrer: "https://linkedin.com",
        path: "/",
      };
      await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testLog),
      });
      fetchAnalytics();
    } catch {
      // error
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (logs.length === 0) return;
    const headers = [
      "ID",
      "Visitor ID",
      "Name",
      "Timestamp",
      "Device",
      "OS",
      "Browser",
      "Screen",
      "City",
      "Country",
      "IP",
      "Referrer",
    ];
    const rows = logs.map((l) => [
      l.id,
      l.visitorId,
      `"${(l.name || "").replace(/"/g, '""')}"`,
      `"${l.timestamp}"`,
      l.device,
      `"${l.os}"`,
      `"${l.browser}"`,
      l.screenResolution,
      `"${l.city || "Unknown"}"`,
      `"${l.country || "Unknown"}"`,
      l.ip || "Unknown",
      `"${l.referrer || "Direct"}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `shaurya_portfolio_visitors_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export to JSON
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logs, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `shaurya_portfolio_visitors_${new Date().toISOString().split("T")[0]}.json`);
    dlAnchor.click();
  };

  // Filtered logs
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchesDevice = deviceFilter === "All" || log.device === deviceFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        log.name?.toLowerCase().includes(q) ||
        log.city?.toLowerCase().includes(q) ||
        log.country?.toLowerCase().includes(q) ||
        log.browser?.toLowerCase().includes(q) ||
        log.os?.toLowerCase().includes(q) ||
        log.ip?.toLowerCase().includes(q) ||
        log.referrer?.toLowerCase().includes(q);

      return matchesDevice && matchesSearch;
    });
  }, [logs, deviceFilter, searchQuery]);

  // Statistics calculation
  const stats = useMemo(() => {
    const totalViews = logs.length;
    const uniqueIds = new Set(logs.map((l) => l.visitorId || l.ip || l.id));
    const uniqueVisitors = uniqueIds.size;

    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const todayViews = logs.filter((l) => l.timestamp >= oneDayAgo).length;

    const mobileCount = logs.filter((l) => l.device === "Mobile").length;
    const desktopCount = logs.filter((l) => l.device === "Desktop").length;
    const tabletCount = logs.filter((l) => l.device === "Tablet").length;

    const mobilePct = totalViews > 0 ? Math.round((mobileCount / totalViews) * 100) : 0;
    const desktopPct = totalViews > 0 ? Math.round((desktopCount / totalViews) * 100) : 0;
    const tabletPct = totalViews > 0 ? Math.round((tabletCount / totalViews) * 100) : 0;

    // Top browsers
    const browserCounts: Record<string, number> = {};
    logs.forEach((l) => {
      const b = l.browser || "Unknown";
      browserCounts[b] = (browserCounts[b] || 0) + 1;
    });
    const topBrowsers = Object.entries(browserCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 4);

    // Top locations
    const locCounts: Record<string, number> = {};
    logs.forEach((l) => {
      const loc = l.city && l.country ? `${l.city}, ${l.country}` : l.country || l.city || "Unknown Location";
      locCounts[loc] = (locCounts[loc] || 0) + 1;
    });
    const topLocations = Object.entries(locCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 4);

    return {
      totalViews,
      uniqueVisitors,
      todayViews,
      mobileCount,
      desktopCount,
      tabletCount,
      mobilePct,
      desktopPct,
      tabletPct,
      topBrowsers,
      topLocations,
    };
  }, [logs]);

  // Format date helper
  const formatTime = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return {
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        time: date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
    } catch {
      return { date: "Unknown", time: "" };
    }
  };

  // Relative time helper
  const getRelativeTime = (isoString: string) => {
    try {
      const diffMs = Date.now() - new Date(isoString).getTime();
      const diffMins = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      if (diffMins < 1) return "Just now";
      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      return `${diffDays}d ago`;
    } catch {
      return "";
    }
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050609] text-white font-mono">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-5 h-5 text-blue-400 animate-spin" />
          <span>Verifying admin gateway...</span>
        </div>
      </div>
    );
  }

  // If NOT authenticated, render the Master Login Card
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050609] bg-grid px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md p-8 rounded-3xl glass-panel border border-blue-500/30 bg-[#090d16]/95 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Glow Orb */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 p-[1px] shadow-xl shadow-blue-500/20">
              <div className="w-full h-full bg-[#050609] rounded-[15px] flex items-center justify-center text-blue-400">
                <KeyRound className="w-8 h-8" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30 mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Protected Admin Space</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                Admin Authentication
              </h1>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Enter your master password to access Shaurya&apos;s visitor telemetry & portfolio analytics console.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 pt-3 text-left">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (authError) setAuthError("");
                  }}
                  placeholder="Enter administrator password..."
                  className="w-full pl-10 pr-11 py-3.5 rounded-2xl glass-panel border border-slate-700/60 bg-slate-900/80 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {authError && (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                Unlock Dashboard
              </button>
            </form>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Portfolio</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#050609] text-slate-200">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 glass-panel border-b border-slate-800/90 bg-[#07090e]/95 backdrop-blur-md px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 p-[1px] shadow-lg shrink-0 group"
              title="Return to Live Portfolio"
            >
              <div className="w-full h-full bg-[#050609] rounded-[11px] flex items-center justify-center font-heading font-bold text-white text-sm group-hover:text-blue-400 transition-colors">
                SH
              </div>
            </Link>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-heading font-extrabold text-white text-lg sm:text-xl tracking-tight">
                  Shaurya&apos;s Admin Portal
                </h1>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Tracking
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Visitor Telemetry & Analytics Dashboard
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
            {/* Live Time */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel border border-slate-700/50 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{currentTime}</span>
            </div>

            {/* Refresh Button */}
            <button
              onClick={fetchAnalytics}
              disabled={isLoading}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass-panel border border-slate-700/60 hover:border-blue-400 text-slate-300 hover:text-white transition-all active:scale-95 disabled:opacity-50"
              title="Refresh visitor logs"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-blue-400 ${isLoading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            {/* Return to Portfolio Link */}
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-panel border border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">View Portfolio</span>
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 transition-all active:scale-95"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-400" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* KPI Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Total Views */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 sm:p-6 rounded-2xl glass-panel border border-slate-700/60 bg-gradient-to-br from-blue-950/20 via-slate-900/60 to-transparent relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Total Views
              </span>
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-1">
              {stats.totalViews}
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <Activity className="w-3 h-3" />
              <span>All-time Page Loads</span>
            </div>
          </motion.div>

          {/* Card 2: Unique Visitors */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="p-5 sm:p-6 rounded-2xl glass-panel border border-slate-700/60 bg-gradient-to-br from-purple-950/20 via-slate-900/60 to-transparent relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Unique Visitors
              </span>
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-1">
              {stats.uniqueVisitors}
            </div>
            <div className="text-[11px] font-mono text-purple-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Deduplicated Devices</span>
            </div>
          </motion.div>

          {/* Card 3: Today's Views */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-5 sm:p-6 rounded-2xl glass-panel border border-slate-700/60 bg-gradient-to-br from-emerald-950/20 via-slate-900/60 to-transparent relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Today&apos;s Views
              </span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-1">
              {stats.todayViews}
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Last 24 Hours Activity</span>
            </div>
          </motion.div>

          {/* Card 4: Device Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="p-5 sm:p-6 rounded-2xl glass-panel border border-slate-700/60 bg-gradient-to-br from-amber-950/20 via-slate-900/60 to-transparent relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Mobile vs Desktop
              </span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Smartphone className="w-4 h-4" />
              </div>
            </div>
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-1">
              {stats.mobilePct}% / {stats.desktopPct}%
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              <span>{stats.mobileCount} Mobile · {stats.desktopCount} Desktop</span>
            </div>
          </motion.div>
        </div>

        {/* Analytics Breakdown Row: Devices, Browsers & Top Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Device Distribution Progress */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 bg-[#090d16]/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-blue-400" />
                Device Distribution
              </span>
              <span className="text-[11px] font-mono text-slate-400">{logs.length} visits</span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Smartphone className="w-3.5 h-3.5 text-blue-400" /> Mobile Phones
                  </span>
                  <span className="text-blue-400 font-bold">{stats.mobilePct}% ({stats.mobileCount})</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500" style={{ width: `${stats.mobilePct}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Monitor className="w-3.5 h-3.5 text-purple-400" /> Desktops & Laptops
                  </span>
                  <span className="text-purple-400 font-bold">{stats.desktopPct}% ({stats.desktopCount})</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500" style={{ width: `${stats.desktopPct}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Tablet className="w-3.5 h-3.5 text-emerald-400" /> Tablets & iPads
                  </span>
                  <span className="text-emerald-400 font-bold">{stats.tabletPct}% ({stats.tabletCount})</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500" style={{ width: `${stats.tabletPct}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Top Browsers */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 bg-[#090d16]/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                <Chrome className="w-4 h-4 text-purple-400" />
                Top Browsers
              </span>
              <span className="text-[11px] font-mono text-slate-400">by views</span>
            </div>

            <div className="space-y-2.5">
              {stats.topBrowsers.length > 0 ? (
                stats.topBrowsers.map((b) => (
                  <div key={b.name} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono">
                    <span className="text-slate-300 truncate max-w-[180px]">{b.name}</span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 font-bold border border-purple-500/20">
                      {b.count} views
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-xs text-slate-500 font-mono text-center py-4">No browser logs yet</div>
              )}
            </div>
          </div>

          {/* Top Locations */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 bg-[#090d16]/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                Visitor Geographies
              </span>
              <span className="text-[11px] font-mono text-slate-400">City / Country</span>
            </div>

            <div className="space-y-2.5">
              {stats.topLocations.length > 0 ? (
                stats.topLocations.map((loc) => (
                  <div key={loc.name} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono">
                    <span className="text-slate-300 truncate max-w-[180px] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      {loc.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                      {loc.count}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-xs text-slate-500 font-mono text-center py-4">No locations logged yet</div>
              )}
            </div>
          </div>
        </div>

        {/* Visitor Logs Section Header & Controls */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white flex items-center gap-2">
                <span>Visitor Logs & Session Stream</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  {filteredLogs.length} Records
                </span>
              </h2>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                Detailed telemetry: visitor name, timestamp, device specifications, browser, OS, and location.
              </p>
            </div>

            {/* Utility Actions */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Simulate Test Visit */}
              <button
                onClick={handleSimulateVisit}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass-panel border border-slate-700/60 hover:border-emerald-500/50 text-xs font-mono text-emerald-300 hover:bg-emerald-500/10 transition-all"
                title="Record a test visit to verify live tracking"
              >
                <PlusCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Simulate Visit</span>
              </button>

              {/* Export CSV */}
              <button
                onClick={handleExportCSV}
                disabled={logs.length === 0}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass-panel border border-slate-700/60 hover:border-blue-500/50 text-xs font-mono text-blue-300 hover:bg-blue-500/10 transition-all disabled:opacity-40"
                title="Export logs to CSV"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-blue-400" />
                <span>Export CSV</span>
              </button>

              {/* Export JSON */}
              <button
                onClick={handleExportJSON}
                disabled={logs.length === 0}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass-panel border border-slate-700/60 hover:border-purple-500/50 text-xs font-mono text-purple-300 hover:bg-purple-500/10 transition-all disabled:opacity-40"
                title="Export logs to JSON"
              >
                <Download className="w-3.5 h-3.5 text-purple-400" />
                <span>JSON</span>
              </button>

              {/* Clear Logs */}
              <button
                onClick={() => setShowClearConfirm(true)}
                disabled={logs.length === 0}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-mono text-rose-300 transition-all disabled:opacity-40"
                title="Clear all logs"
              >
                <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* Search & Device Filter Pills */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by visitor name, city, OS, browser, IP..."
                className="w-full pl-10 pr-4 py-2 rounded-xl glass-panel border border-slate-800 bg-[#07090e]/80 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            {/* Device Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {["All", "Desktop", "Mobile", "Tablet"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setDeviceFilter(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    deviceFilter === tab
                      ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20"
                      : "glass-panel border border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Logs Table Card */}
        <div className="rounded-2xl glass-panel border border-slate-800 bg-[#090d16]/90 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#050609]/90 border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Visitor / Name</th>
                  <th className="py-3.5 px-4">Visit Time</th>
                  <th className="py-3.5 px-4">Device & OS</th>
                  <th className="py-3.5 px-4">Browser & Screen</th>
                  <th className="py-3.5 px-4">Location & IP</th>
                  <th className="py-3.5 px-4">Referrer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => {
                    const timeInfo = formatTime(log.timestamp);
                    const relTime = getRelativeTime(log.timestamp);

                    const isContactVisitor = log.name?.includes("Contact");

                    return (
                      <tr
                        key={log.id}
                        className="hover:bg-slate-800/30 transition-colors group"
                      >
                        {/* Visitor Name & ID */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-start gap-2.5">
                            <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 shrink-0 group-hover:border-blue-500/50 transition-colors">
                              <User className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="font-bold text-white flex items-center gap-1.5">
                                <span>{log.name || "Anonymous Guest"}</span>
                                {isContactVisitor && (
                                  <span className="px-1.5 py-0.2 rounded text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                    Inquiry
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono block">
                                ID: {log.visitorId.slice(0, 14)}...
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Visit Time */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-0.5">
                            <div className="text-white font-medium flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-blue-400" />
                              <span>{timeInfo.time}</span>
                            </div>
                            <div className="text-[11px] text-slate-400">
                              {timeInfo.date} · <span className="text-emerald-400 font-semibold">{relTime}</span>
                            </div>
                          </div>
                        </td>

                        {/* Device & OS */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5 text-white font-medium">
                              {log.device === "Mobile" ? (
                                <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                              ) : log.device === "Tablet" ? (
                                <Tablet className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Monitor className="w-3.5 h-3.5 text-purple-400" />
                              )}
                              <span>{log.device}</span>
                            </div>
                            <div className="text-[11px] text-slate-400">
                              {log.os}
                            </div>
                          </div>
                        </td>

                        {/* Browser & Screen */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-0.5">
                            <div className="text-slate-200">
                              {log.browser}
                            </div>
                            <div className="text-[11px] text-slate-400">
                              {log.screenResolution} · {log.language}
                            </div>
                          </div>
                        </td>

                        {/* Location & IP */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-0.5">
                            <div className="text-slate-200 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                              <span>
                                {log.city && log.country ? `${log.city}, ${log.country}` : log.country || log.city || "Unknown Location"}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono">
                              IP: {log.ip || "127.0.0.1"}
                            </div>
                          </div>
                        </td>

                        {/* Referrer */}
                        <td className="py-3.5 px-4">
                          <div className="max-w-[150px] truncate text-slate-300" title={log.referrer}>
                            {log.referrer === "Direct" || !log.referrer ? (
                              <span className="text-slate-400 italic">Direct Visit</span>
                            ) : (
                              <span className="text-blue-400 underline">{log.referrer}</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400 space-y-2">
                      <div className="w-12 h-12 mx-auto rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 mb-2">
                        <Users className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-semibold text-slate-300">No Visitor Logs Matching Filter</p>
                      <p className="text-xs text-slate-500">
                        Try modifying your search query or click &ldquo;Simulate Visit&rdquo; to test.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* System & Architecture Diagnostics Info */}
        <div className="p-6 rounded-2xl glass-panel border border-slate-800/80 bg-[#07090e]/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>Next.js 14 App Router · Web3Forms Key Configured · Persistent JSON Storage Engine</span>
          </div>
          <div className="text-slate-500">
            Authenticated as Administrator · Master Password Protected
          </div>
        </div>
      </main>

      {/* Confirmation Modal for Clearing Logs */}
      <AnimatePresence>
        {showClearConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowClearConfirm(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-sm p-6 rounded-2xl glass-panel border border-rose-500/30 bg-[#0c0f17] shadow-2xl z-10 space-y-4 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Clear All Visitor Logs?</h3>
                <p className="text-xs text-slate-400 mt-1">
                  This action will delete all recorded analytics data. This cannot be undone.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 py-2.5 rounded-xl glass-panel border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClearLogs}
                  disabled={isClearing}
                  className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-600/30 transition-all"
                >
                  {isClearing ? "Clearing..." : "Yes, Clear All"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

