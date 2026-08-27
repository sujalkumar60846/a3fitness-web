"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Facilities } from "@/components/Facilities";
import { Pricing } from "@/components/Pricing";
import { PortalWidget } from "@/components/PortalWidget";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { MemberPortalModal } from "@/components/MemberPortalModal";
import { TrialModal } from "@/components/TrialModal";

export default function HomePage() {
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [portalCode, setPortalCode] = useState("GYM-0001");

  const openPortalWithCode = (code?: string) => {
    if (code) {
      setPortalCode(code);
    }
    setIsPortalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenPortalModal={() => openPortalWithCode()}
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
          onOpenPortalModal={(code) => openPortalWithCode(code)}
        />

        {/* Programs & Services Grid */}
        <ProgramsGrid
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
        />

        {/* Why Choose Us / Value Proposition */}
        <WhyChooseUs />

        {/* Facility Virtual Tour */}
        <Facilities />

        {/* Membership Tiers & Pricing */}
        <Pricing
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
          onOpenPortalModal={() => openPortalWithCode()}
        />

        {/* Smart Member & Attendance Hub (Integrated with GMS) */}
        <PortalWidget
          onOpenPortalModal={() => openPortalWithCode()}
        />

        {/* Member Success Stories & Transformations */}
        <Testimonials />
      </main>

      {/* Comprehensive Multi-Column Footer */}
      <Footer
        onOpenPortalModal={() => openPortalWithCode()}
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
      />

      {/* Global Interactive Modals */}
      <MemberPortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
        initialCode={portalCode}
      />

      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </div>
  );
}