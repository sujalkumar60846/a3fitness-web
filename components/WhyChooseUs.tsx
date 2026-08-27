"use client";

import React from "react";
import { Dumbbell, ShieldCheck, Flame, QrCode, Salad, Clock, Sparkles } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/mockData";

export function WhyChooseUs() {
  const iconMap: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell className="w-6 h-6 text-emerald-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    Flame: <Flame className="w-6 h-6 text-amber-400" />,
    QrCode: <QrCode className="w-6 h-6 text-emerald-400" />,
    Salad: <Salad className="w-6 h-6 text-emerald-400" />,
    Clock: <Clock className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section className="py-24 bg-zinc-900/40 relative border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Gold Standard in Fitness</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            WHY PERFORMERS CHOOSE <span className="text-gradient-emerald">A3FITNESS</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-3">
            We provide a comprehensive ecosystem designed for longevity, human biomechanical performance, and ultimate physical vitality.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-emerald-500/40 transition duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-emerald-500/40 group-hover:bg-emerald-950/20 transition">
                {iconMap[item.icon] || <Dumbbell className="w-6 h-6 text-emerald-400" />}
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}