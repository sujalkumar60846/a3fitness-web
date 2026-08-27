"use client";

import React from "react";
import { Star, Quote, Sparkles, Trophy } from "lucide-react";
import { TESTIMONIALS } from "@/lib/mockData";

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Real Results. Real Lives.</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            MEMBER <span className="text-gradient-emerald">TRANSFORMATIONS</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            See how dedicated training, clinical nutrition, and holistic recovery have empowered thousands of members.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/30 transition duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800 group-hover:text-emerald-500/20 transition-colors pointer-events-none" />

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Achievement Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-4">
                  {item.achievement}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/60">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-emerald-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <div className="text-[11px] text-zinc-400">
                    {item.location} � <span className="text-emerald-400">{item.timeframe}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
