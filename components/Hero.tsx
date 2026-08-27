"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Search, QrCode, MapPin } from "lucide-react";
import { STATS } from "@/lib/mockData";

interface HeroProps {
  onOpenTrialModal: () => void;
  onOpenPortalModal: (code?: string) => void;
}

export function Hero({ onOpenTrialModal, onOpenPortalModal }: HeroProps) {
  const [quickCode, setQuickCode] = useState("");

  const handleVerify = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onOpenPortalModal(quickCode.trim() || undefined);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background">
      {/* Background Media & Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="A3Fitness Luxury Gym"
          className="w-full h-full object-cover object-center opacity-25 scale-105 animate-in fade-in duration-1000"
        />
        {/* Dark Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/90" />
        <div className="absolute inset-0 bg-radial-gradient opacity-80" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Glowing Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-lg shadow-emerald-500/10 mb-8 backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>Dwarka Sector 3, New Delhi (Opp. Aakash Healthcare Gate No. 4)</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl leading-[1.08] mb-6">
          SCULPT YOUR <span className="text-gradient-emerald">BODY</span>.
          <br className="hidden sm:inline" />
          RENEW YOUR <span className="text-gradient-gold">VITALITY</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-10 text-zinc-400">
          World-class biomechanics, certified master coaches, Finnish contrast thermal spas, and seamless real-time Member Portal integration.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md mb-12">
          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-black rounded-2xl text-sm transition shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group hover:scale-[1.02] transform"
          >
            <span>Claim 3-Day VIP Free Pass</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#programs"
            className="w-full sm:w-auto px-7 py-4 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white font-bold rounded-2xl text-sm transition flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <span>Explore Programs</span>
          </a>
        </div>

        {/* Quick Portal Search Bar in Hero */}
        <form onSubmit={handleVerify} className="w-full max-w-xl p-2 sm:p-2.5 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-2xl backdrop-blur-md mb-14">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={quickCode}
                onChange={(e) => setQuickCode(e.target.value.toUpperCase())}
                placeholder="Member Code (e.g. GYM-0001) for instant status..."
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition font-mono uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-zinc-800 hover:bg-emerald-500 hover:text-zinc-950 text-zinc-200 text-xs font-semibold rounded-xl transition flex items-center justify-center gap-2 border border-zinc-700 hover:border-emerald-500"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Verify Portal</span>
            </button>
          </div>
        </form>

        {/* Stat Counter Grid (3 Clean Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md text-left hover:border-emerald-500/30 transition duration-300 group"
            >
              <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-zinc-300 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-emerald-400/90 mt-0.5">
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}