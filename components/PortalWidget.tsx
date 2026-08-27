"use client";

import React, { useState, useEffect } from "react";
import { UserCheck, QrCode, Lock, ExternalLink, RefreshCw, Search } from "lucide-react";
import { getGMSMemberDashboardUrl, getGMSStaffLoginUrl, getGMSAttendanceScanUrl, checkGMSHealth } from "@/lib/api";
import { GMSConnectionStatus } from "@/types";
import { useToast } from "./Toast";

interface PortalWidgetProps {
  onOpenPortalModal: () => void;
}

export function PortalWidget({ onOpenPortalModal }: PortalWidgetProps) {
  const [memberCode, setMemberCode] = useState("");
  const [status, setStatus] = useState<GMSConnectionStatus | null>(null);
  const [checking, setChecking] = useState(false);
  const { showToast } = useToast();

  const loadStatus = async () => {
    setChecking(true);
    try {
      const res = await checkGMSHealth();
      setStatus(res);
    } catch {
      // Ignored
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    loadStatus();
  }, []);

  const handleDirectJump = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberCode.trim()) {
      onOpenPortalModal();
      return;
    }
    const clean = memberCode.trim().toUpperCase();
    const url = getGMSMemberDashboardUrl(clean);
    showToast("info", `Redirecting to Member Dashboard for ${clean}`, "Opening Portal");
    window.open(url, "_blank");
  };

  return (
    <section id="portal-hub" className="py-20 bg-zinc-950 relative border-t border-zinc-800/80">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-radial-glow opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/60 border border-emerald-500/30 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Information & Live Bridge Status */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-black text-white">
                      SMART MEMBER & ATTENDANCE HUB
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Seamlessly connected to the A3Fitness Gym Management System (GMS)
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Active members can check their membership validity, view past 30-day QR check-ins, download official tax receipts, and access online plan renewal in real time.
              </p>

              {/* Connected GMS Integration Status Bar */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className={`w-3 h-3 rounded-full ${status?.isConnected ? "bg-emerald-400 animate-pulse" : "bg-emerald-500/80"}`} />
                  <div>
                    <span className="font-semibold text-white">Connected GMS Server: </span>
                    <span className="text-zinc-400 font-mono">{status?.baseUrl || "https://a3fitness-gms.vercel.app"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold border border-emerald-500/20">
                    {status?.isConnected ? "Live Connected" : "Integration Ready"}
                  </span>
                  <button
                    onClick={loadStatus}
                    disabled={checking}
                    className="p-1 text-zinc-500 hover:text-white transition"
                    title="Refresh GMS Connection"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${checking ? "animate-spin" : ""}`} />
                  </button>
                </div>
              </div>

              {/* Direct Quick Links to GMS Project */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={getGMSAttendanceScanUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 text-xs font-semibold text-zinc-200 hover:text-white flex items-center justify-between transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <QrCode className="w-4 h-4 text-emerald-400" />
                    <span>Public QR Scan Desk</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400" />
                </a>

                <a
                  href={getGMSStaffLoginUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 text-xs font-semibold text-zinc-200 hover:text-white flex items-center justify-between transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    <span>Staff & Admin Sign In</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Quick Lookup Form */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-400" />
                <span>Instant Member ID Search</span>
              </h4>
              <p className="text-xs text-zinc-400">
                Enter your Member ID to immediately inspect your active membership plan and attendance streak.
              </p>

              <form onSubmit={handleDirectJump} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={memberCode}
                    onChange={(e) => setMemberCode(e.target.value.toUpperCase())}
                    placeholder="e.g. MEM-1001 or GMS-101"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 font-mono uppercase tracking-wider"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20"
                  >
                    <span>Open in GMS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenPortalModal}
                    className="px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-semibold transition border border-zinc-700"
                  >
                    Preview Modal
                  </button>
                </div>
              </form>

              <div className="pt-2 border-t border-zinc-900 text-[11px] text-zinc-500 flex items-center justify-between">
                <span>Demo Code: <strong className="text-emerald-400">MEM-1001</strong></span>
                <span>Protected by Edge RBAC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}