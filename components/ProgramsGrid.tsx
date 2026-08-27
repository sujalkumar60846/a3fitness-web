"use client";

import React, { useState } from "react";
import { Flame, Clock, ArrowUpRight, Sparkles, Filter } from "lucide-react";
import { ProgramItem } from "@/types";
import { PROGRAMS } from "@/lib/mockData";
import { ProgramModal } from "./ProgramModal";

interface ProgramsGridProps {
  onOpenTrialModal: () => void;
}

export function ProgramsGrid({ onOpenTrialModal }: ProgramsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["All", "Strength", "Mind & Body", "HIIT", "Spa & Recovery", "Nutrition"];

  const filteredPrograms = activeCategory === "All"
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.category === activeCategory);

  const handleOpenProgram = (prog: ProgramItem) => {
    setSelectedProgram(prog);
    setIsModalOpen(true);
  };

  return (
    <section id="programs" className="py-24 bg-zinc-950 relative">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Training Tiers & Specialties</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              WORLD-CLASS <span className="text-gradient-emerald">PROGRAMS</span>
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Engineered with science-backed periodization to maximize hypertrophy, fat loss, athletic speed, and deep cellular recovery.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 mt-6 md:mt-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              onClick={() => handleOpenProgram(prog)}
              className="group relative rounded-2xl bg-zinc-900/50 border border-zinc-800/80 overflow-hidden hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-950/30 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-[11px] font-semibold text-emerald-400 border border-emerald-500/30">
                      {prog.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-[11px] font-semibold text-zinc-300 border border-zinc-700">
                      {prog.intensity}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-300">
                    <div className="flex items-center gap-1 bg-zinc-950/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-zinc-950/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>{prog.calorieBurn}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                    <span>{prog.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-5 pt-2 border-t border-zinc-800/50 flex items-center justify-between text-xs">
                <span className="text-zinc-500">Coach: {prog.trainerName}</span>
                <span className="text-emerald-400 font-semibold group-hover:underline">
                  View Syllabus ?
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectTrial={onOpenTrialModal}
      />
    </section>
  );
}
