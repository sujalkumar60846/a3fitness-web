"use client";

import React, { useState } from "react";
import { X, Search, Calendar, ShieldCheck, ArrowRight, ExternalLink, RefreshCw, QrCode, AlertCircle } from "lucide-react";
import { MemberDashboardData } from "@/types";
import { fetchMemberByCode, getGMSMemberDashboardUrl, getGMSAttendanceScanUrl, getGMSStaffLoginUrl } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { useToast } from "./Toast";

interface MemberPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode?: string;
}

export function MemberPortalModal({ isOpen, onClose, initialCode = "" }: MemberPortalModalProps) {
  const [memberCode, setMemberCode] = useState(initialCode || "GYM-0001");
  const [loading, setLoading] = useState(false);
  const [memberData, setMemberData] = useState<MemberDashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { showToast } = useToast();

  React.useEffect(() => {
    if (isOpen) {
      const codeToLookup = initialCode || memberCode || "GYM-0001";
      setMemberCode(codeToLookup);
      setLoading(true);
      setError(null);
      fetchMemberByCode(codeToLookup)
        .then((res) => {
          if (res.success && res.data) {
            setMemberData(res.data);
          } else {
            setError(res.error || `Member "${codeToLookup}" not found in database.`);
            setMemberData(null);
          }
        })
        .catch(() => {
          setError("Could not reach member database.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isOpen, initialCode]);

  if (!isOpen) return null;

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!memberCode.trim()) {
      setError("Please enter a valid Member Code (e.g. MEM-1001)");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetchMemberByCode(memberCode);
      if (res.success && res.data) {
        setMemberData(res.data);
        showToast("success", `Loaded profile for ${res.data.fullName}`, "Member Verified");
      } else {
        setError(res.error || "Member not found. Check the code or speak to reception.");
        setMemberData(null);
      }
    } catch {
      setError("Could not reach member database. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const activeSub = memberData?.subscriptions?.[0];
  const isPlanActive = activeSub && new Date(activeSub.dueDate) > new Date();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-zinc-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black">
              A3
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">A3Fitness Member Hub</h3>
              <p className="text-xs text-zinc-400">Integrated with Gym Management System (GMS)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Lookup Input Form */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={memberCode}
                onChange={(e) => setMemberCode(e.target.value.toUpperCase())}
                placeholder="Enter Member Code (e.g. MEM-1001)"
                className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-xl text-sm transition flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Lookup"}
            </button>
          </form>

          {error && (
            <div className="p-3.5 bg-red-950/40 border border-red-800/60 rounded-xl text-xs text-red-300 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>{error}</div>
            </div>
          )}

          {/* Member Card if found */}
          {memberData && (
            <div className="p-5 bg-zinc-900/90 border border-zinc-800 rounded-xl space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-zinc-950 font-bold text-lg">
                    {memberData.fullName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      {memberData.fullName}
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono border border-emerald-500/30">
                        {memberData.memberCode}
                      </span>
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Joined {formatDate(memberData.joiningDate)}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      isPlanActive
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {isPlanActive ? "Active Member" : "Renewal Due"}
                  </span>
                </div>
              </div>

              {/* Sub Details Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-zinc-950/60 rounded-lg border border-zinc-800/80">
                  <div className="text-xs text-zinc-400 flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" /> Plan Validity
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {activeSub ? `Expires ${formatDate(activeSub.dueDate)}` : "No active subscription"}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    {activeSub ? `${activeSub.planMonths} Month Plan` : "Contact desk"}
                  </div>
                </div>

                <div className="p-3 bg-zinc-950/60 rounded-lg border border-zinc-800/80">
                  <div className="text-xs text-zinc-400 flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Recent Attendance
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {memberData.attendances?.length ? `${memberData.attendances.length} Check-ins Logged` : "None recorded"}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    Last: {memberData.attendances?.[0]?.checkInTime || "Today"}
                  </div>
                </div>
              </div>

              {/* Action Buttons to GMS Project */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={getGMSMemberDashboardUrl(memberData.memberCode)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition"
                >
                  <span>Open Full GMS Dashboard</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getGMSAttendanceScanUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition border border-zinc-700"
                >
                  <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Scan QR Entry</span>
                </a>
              </div>
            </div>
          )}

          {/* Quick GMS Testing Links */}
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2.5">
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Testing Environment Direct Jump
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={getGMSStaffLoginUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white flex items-center justify-between transition"
              >
                <span>Staff & Admin Sign In</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={getGMSAttendanceScanUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white flex items-center justify-between transition"
              >
                <span>Public QR Attendance Desk</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-900/60 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-400">
          <div>Tip: Try code <code className="text-emerald-400">MEM-1001</code> for demo lookup</div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-xs transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}