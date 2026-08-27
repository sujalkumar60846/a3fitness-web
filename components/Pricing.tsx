"use client";

import React, { useState, useEffect } from "react";
import { Check, Sparkles, ArrowRight, Zap, RefreshCw } from "lucide-react";
import { PRICING_PLANS } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";
import { fetchGMSPricing } from "@/lib/api";

interface PricingProps {
  onOpenTrialModal: () => void;
  onOpenPortalModal: () => void;
}

export function Pricing({ onOpenTrialModal, onOpenPortalModal }: PricingProps) {
  const [gmsPricing, setGmsPricing] = useState<Record<string, number> | null>(null);
  const [syncedWithGMS, setSyncedWithGMS] = useState(false);

  useEffect(() => {
    async function loadPricing() {
      const prices = await fetchGMSPricing();
      if (prices && Object.keys(prices).length > 0) {
        setGmsPricing(prices);
        setSyncedWithGMS(true);
      }
    }
    loadPricing();
  }, []);

  return (
    <section id="pricing" className="py-24 bg-background relative border-t border-zinc-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment in Yourself</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            MEMBERSHIP <span className="text-gradient-emerald">EXPERIENCE</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <p className="text-sm text-zinc-400">
              Zero hidden maintenance charges. Every tier includes our complete wellness ecosystem and instant Member Portal tracking.
            </p>
          </div>
          {syncedWithGMS && (
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Prices Live-Synced with A3Fitness GMS</span>
            </div>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            // Check if GMS suggested price is available for this duration (1, 3, 6, 12)
            const dynamicPrice = gmsPricing?.[String(plan.periodMonths)] ?? plan.price;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border-2 border-emerald-500/60 shadow-2xl shadow-emerald-950/40 lg:-translate-y-3"
                    : "bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                {/* Badge if present */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-black text-[11px] uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-xs text-zinc-400 min-h-[32px]">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-white">
                        {formatCurrency(dynamicPrice)}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">{plan.period}</span>
                    </div>
                    <div className="text-[11px] text-emerald-400 mt-1 font-medium flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>Includes Tax & Full Portal Access</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      Plan Inclusions:
                    </div>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2 pt-4 border-t border-zinc-800/60">
                  <button
                    onClick={onOpenTrialModal}
                    className={`w-full py-3 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 ${
                      plan.popular
                        ? "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-lg shadow-emerald-500/20"
                        : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
                    }`}
                  >
                    <span>Select {plan.name.split(" ")[0]} Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenPortalModal}
                    className="w-full py-2 text-[11px] text-zinc-400 hover:text-white transition text-center"
                  >
                    Existing member? Check renewal
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}