"use client";

import React from "react";
import { X, Flame, Clock, Calendar, CheckCircle2, User, Award, ArrowRight } from "lucide-react";
import { ProgramItem } from "@/types";

interface ProgramModalProps {
  program: ProgramItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectTrial: () => void;
}

export function ProgramModal({ program, isOpen, onClose, onSelectTrial }: ProgramModalProps) {
  if (!isOpen || !program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-zinc-100 max-h-[90vh] flex flex-col">
        {/* Banner Image */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden shrink-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-black/80 transition"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-2">
              {program.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800">
            <div className="text-center">
              <div className="text-xs text-zinc-400 flex items-center justify-center gap-1 mb-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" /> Duration
              </div>
              <div className="text-sm font-bold text-white">{program.duration}</div>
            </div>

            <div className="text-center border-x border-zinc-800">
              <div className="text-xs text-zinc-400 flex items-center justify-center gap-1 mb-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" /> Burn
              </div>
              <div className="text-sm font-bold text-white">{program.calorieBurn}</div>
            </div>

            <div className="text-center">
              <div className="text-xs text-zinc-400 flex items-center justify-center gap-1 mb-1">
                <Award className="w-3.5 h-3.5 text-cyan-400" /> Intensity
              </div>
              <div className="text-sm font-bold text-emerald-400">{program.intensity}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide text-zinc-400">
              Program Overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wide text-zinc-400">
              What You Will Achieve
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60 text-xs text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trainer in Charge & Schedule */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-zinc-400">Lead Coach</div>
                <div className="text-sm font-bold text-white">{program.trainerName}</div>
                <div className="text-xs text-zinc-400">{program.trainerRole}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-zinc-400">Studio Timings</div>
                <div className="text-xs font-semibold text-white mt-0.5">{program.scheduleDays}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-zinc-900/90 border-t border-zinc-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="text-xs text-zinc-400 text-center sm:text-left">
            Included in all Quarterly, Semi-Annual & VIP Memberships
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs font-medium transition"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectTrial();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20"
            >
              <span>Book Trial Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
