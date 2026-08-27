"use client";

import React from "react";
import { Dumbbell, Phone, Mail, Clock, Instagram, Facebook, Youtube, Twitter, ExternalLink, MapPin } from "lucide-react";
import { getGMSStaffLoginUrl, getGMSAttendanceScanUrl } from "@/lib/api";

interface FooterProps {
  onOpenPortalModal: () => void;
  onOpenTrialModal: () => void;
}

export function Footer({ onOpenPortalModal, onOpenTrialModal }: FooterProps) {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 text-xs">
      {/* Top Banner Callout */}
      <div className="border-b border-zinc-900 bg-zinc-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="text-base font-bold text-white">
              Ready to redefine your physical & mental ceiling?
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Claim your complimentary 3-day VIP experience pass at A3Fitness.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onOpenTrialModal}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl text-xs transition shadow-lg shadow-emerald-500/20"
            >
              Claim VIP Free Pass
            </button>
            <button
              onClick={onOpenPortalModal}
              className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white rounded-xl text-xs font-semibold transition"
            >
              Member Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-zinc-950 font-black">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                A3<span className="text-emerald-400">FITNESS</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              India's premier luxury fitness and contrast thermal recovery club. Powered by clinical sports science, world-class biomechanics, and seamless digital member portals.
            </p>
            <div className="flex items-center gap-3 text-zinc-400 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-900 hover:text-emerald-400 hover:bg-zinc-800 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-900 hover:text-emerald-400 hover:bg-zinc-800 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-900 hover:text-emerald-400 hover:bg-zinc-800 transition">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-900 hover:text-emerald-400 hover:bg-zinc-800 transition">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Explore Club
            </h5>
            <ul className="space-y-2">
              <li><a href="#programs" className="hover:text-emerald-400 transition">Training Programs</a></li>
              <li><a href="#facilities" className="hover:text-emerald-400 transition">Facility Virtual Tour</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition">Membership Tiers</a></li>
              <li><a href="#portal-hub" className="hover:text-emerald-400 transition">Smart Member Hub</a></li>
            </ul>
          </div>

          {/* GMS Integration Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Member & Staff Portals
            </h5>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenPortalModal} className="hover:text-emerald-400 transition text-left">
                  Member ID Lookup
                </button>
              </li>
              <li>
                <a href={getGMSAttendanceScanUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>QR Attendance Desk</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a href={getGMSStaffLoginUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>Staff & Admin Sign In</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li><a href="#portal-hub" className="hover:text-emerald-400 transition">Smart System Status</a></li>
            </ul>
          </div>

          {/* Hours, Contact & Location */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Club Location & Hours
            </h5>
            
            {/* Address */}
            <div className="flex items-start gap-2 text-zinc-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">A3Fitness Flagship</p>
                <p className="text-zinc-400 leading-snug">
                  Opposite Aakash Healthcare, Gate No. 4, Sector 3, Dwarka, New Delhi – 110059
                </p>
                <a
                  href="https://maps.google.com/?q=Aakash+Healthcare+Gate+4+Dwarka+Sector+3+New+Delhi+110059"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 mt-1"
                >
                  <span>Get Directions on Map</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            <div className="pt-2 space-y-1.5 text-zinc-400 border-t border-zinc-900">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mon – Sat: 5:30 AM – 11:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Sun: 6:00 AM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2 space-y-1">
              <div className="text-white font-semibold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span>concierge@a3fitness.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} A3Fitness. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-400">Terms of Membership</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-400">GMS Integration Engine</a>
          </div>
        </div>
      </div>
    </footer>
  );
}