"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Dumbbell, UserCheck, Sparkles, ChevronRight, ExternalLink } from "lucide-react";
import { getGMSStaffLoginUrl, getGMSAttendanceScanUrl } from "@/lib/api";

interface NavbarProps {
  onOpenPortalModal: () => void;
  onOpenTrialModal: () => void;
}

export function Navbar({ onOpenPortalModal, onOpenTrialModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Programs", href: "#programs" },
    { label: "Facilities", href: "#facilities" },
    { label: "Membership", href: "#pricing" },
    { label: "Member Hub", href: "#portal-hub" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl shadow-black/40"
            : "bg-gradient-to-b from-zinc-950/90 via-zinc-950/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-zinc-950 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition transform">
              <Dumbbell className="w-5 h-5 font-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white flex items-center gap-0.5">
                A3<span className="text-emerald-400">FITNESS</span>
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-semibold -mt-1">
                Luxury Gym & Spa
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Portal Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live GMS Indicator Badge */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-[11px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>GMS Sync Active</span>
            </div>

            {/* Member Portal Lookup Trigger */}
            <button
              onClick={onOpenPortalModal}
              className="px-3.5 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-semibold text-zinc-200 hover:text-white flex items-center gap-1.5 transition"
            >
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Member Portal</span>
            </button>

            {/* Claim Trial / Join CTA */}
            <button
              onClick={onOpenTrialModal}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-xs shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Claim Free Pass</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenPortalModal}
              className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-emerald-400 flex items-center gap-1"
            >
              <UserCheck className="w-3 h-3" />
              <span>Portal</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/90 backdrop-blur-lg pt-24 px-6 pb-8 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-wider text-zinc-500 font-bold mb-2">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 border-b border-zinc-900 text-base font-semibold text-zinc-200 hover:text-emerald-400"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </a>
            ))}

            <div className="pt-4 space-y-2.5">
              <a
                href={getGMSStaffLoginUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300"
              >
                <span>GMS Staff & Admin Login</span>
                <ExternalLink className="w-4 h-4 text-zinc-500" />
              </a>
              <a
                href={getGMSAttendanceScanUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300"
              >
                <span>GMS QR Check-in Desk</span>
                <ExternalLink className="w-4 h-4 text-zinc-500" />
              </a>
            </div>
          </div>

          <div className="space-y-3 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-sm text-center"
            >
              Claim 3-Day VIP Free Trial
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortalModal();
              }}
              className="w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-semibold text-sm text-center"
            >
              Member Code Lookup
            </button>
          </div>
        </div>
      )}
    </>
  );
}