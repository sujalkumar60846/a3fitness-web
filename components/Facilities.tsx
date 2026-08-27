"use client";

import React, { useState } from "react";
import { Check, Sparkles, Eye, ArrowRight } from "lucide-react";
import { FACILITIES } from "@/lib/mockData";

export function Facilities() {
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);
  const activeFacility = FACILITIES[activeFacilityIndex];

  return (
    <section id="facilities" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Facility Virtual Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            FACILITY <span className="text-gradient-emerald">VIRTUAL TOUR</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Explore every dedicated zone engineered with hospital-grade air purification, acoustic sound isolation, and competition-ready equipment.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {FACILITIES.map((facility, index) => (
            <button
              key={facility.id}
              onClick={() => setActiveFacilityIndex(index)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-2 ${
                activeFacilityIndex === index
                  ? "bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20 font-bold"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              <span>{facility.title.split(" ")[0]}</span>
              {activeFacilityIndex === index && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
            </button>
          ))}
        </div>

        {/* Active Facility Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          {/* Image Viewer */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
            <img
              src={activeFacility.image}
              alt={activeFacility.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-xs font-semibold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>Interactive Space Preview</span>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                {activeFacility.tagline}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeFacility.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeFacility.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Equipment & Suite Highlights:
              </div>
              {activeFacility.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-emerald-500/40 text-xs font-semibold text-white rounded-xl transition"
              >
                <span>View Membership Access</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}