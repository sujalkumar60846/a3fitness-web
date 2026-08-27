import { ProgramItem, PricingPlan, FacilityItem, TestimonialItem } from "@/types";

export const STATS = [
  { label: "Active Members", value: "500+", change: "+24% this quarter", icon: "Users" },
  { label: "Elite Coaches", value: "5+", change: "Olympic & CSCS Certified", icon: "Award" },
  { label: "Success Rate", value: "98.4%", change: "Goal Transformation", icon: "TrendingUp" },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: "cardio-strength",
    title: "Cardio Strength & Endurance",
    category: "Strength",
    tagline: "Build lean muscle and superhuman cardiovascular stamina.",
    description: "A high-energy fusion of compound resistance training, sled pushes, and interval rowing designed to torch fat while increasing structural bone and muscular density.",
    intensity: "High",
    duration: "55 mins",
    calorieBurn: "650-800 kcal",
    trainerName: "Vikram Rathore",
    trainerRole: "Head Strength Conditioning Coach",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Accelerates metabolic burn up to 36 hours post-workout",
      "Improves VO2 max and anaerobic threshold",
      "Increases functional athletic power and joint resilience",
      "Customized micro-progressions for all baseline levels"
    ],
    scheduleDays: "Mon / Wed / Fri - 6:30 AM & 6:00 PM"
  },
  {
    id: "olympic-weightlifting",
    title: "Olympic Lifting & Hypertrophy",
    category: "Strength",
    tagline: "Master the barbell with precision biomechanics.",
    description: "Comprehensive coaching on snatches, clean & jerks, deadlifts, and targeted hypertrophy splits using competition-grade Eleiko bars and bumper plates.",
    intensity: "Extreme",
    duration: "60 mins",
    calorieBurn: "500-700 kcal",
    trainerName: "Rohan Varma",
    trainerRole: "USAW Level 2 Certified Coach",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Biomechanics video analysis for injury-free lifting",
      "Maximizes central nervous system power output",
      "Hypertrophy periodization for symmetric physique sculpting",
      "Includes dedicated mobility and shoulder stabilization routines"
    ],
    scheduleDays: "Tue / Thu / Sat - 7:00 AM & 7:00 PM"
  },
  {
    id: "body-balance-yoga",
    title: "Mind-Body Balance & Vinyasa",
    category: "Mind & Body",
    tagline: "Harmonize breath, deep flexibility, and inner peace.",
    description: "Immerse yourself in dynamic flow, yin restorative postures, and guided breathwork inside our acoustically isolated cedarwood sanctuary.",
    intensity: "Moderate",
    duration: "60 mins",
    calorieBurn: "300-450 kcal",
    trainerName: "Ananya Sharma",
    trainerRole: "ERYT-500 Master Yoga Instructor",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Releases deep myofascial tension and spinal compression",
      "Lowers resting cortisol and enhances autonomic nervous regulation",
      "Enhances full-body joint mobility and kinetic chain alignment",
      "Includes sound bowl meditation & pranayama techniques"
    ],
    scheduleDays: "Daily - 6:00 AM, 8:30 AM & 6:30 PM"
  },
  {
    id: "hiit-metabolic",
    title: "Metabolic HIIT & Core Ignition",
    category: "HIIT",
    tagline: "Short bursts, maximum output, unstoppable results.",
    description: "Heart-rate monitored circuit training featuring battle ropes, assault bikes, plyometric boxes, and core blast finishers.",
    intensity: "High",
    duration: "45 mins",
    calorieBurn: "700-900 kcal",
    trainerName: "Karan Singh",
    trainerRole: "HIIT & Functional Master Coach",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Real-time heart-rate wearable telemetry feedback",
      "Unmatched fat oxidation and cardiovascular conditioning",
      "Builds bulletproof rotational core and agility",
      "Dynamic playlist and club lighting atmosphere"
    ],
    scheduleDays: "Mon / Wed / Fri / Sat - Multiple Slots"
  },
  {
    id: "clinical-nutrition",
    title: "Tailored Macro & Nutrition Coaching",
    category: "Nutrition",
    tagline: "Precision fuel tailored to your unique metabolic profile.",
    description: "1-on-1 consultations with registered sports clinical dietitians including InBody 770 composition scans, continuous glucose insights, and custom grocery meal blueprints.",
    intensity: "Low",
    duration: "30 mins / bi-weekly",
    calorieBurn: "Metabolic Optimization",
    trainerName: "Pooja Malhotra",
    trainerRole: "Head Sports Clinical Dietitian",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "InBody 770 medical-grade body composition tracking",
      "Personalized macro breakdowns for fat loss / muscle gain",
      "Integration with our on-site Clean Fuel Shake Bar",
      "Direct WhatsApp meal review and travel dining guides"
    ],
    scheduleDays: "By Appointment - Mon to Sat"
  }
];

export const FACILITIES: FacilityItem[] = [
  {
    id: "strength-floor",
    title: "Main Performance Strength Arena",
    tagline: "Biomechanical excellence meets heavy iron.",
    description: "Fitted with custom Hammer Strength, Eleiko power racks, Watson dumbbells up to 60kg, and pin-loaded selectorized machines designed for optimal resistance curves.",
    features: ["Custom Eleiko Power Racks", "Olympic Lifting Platforms", "Dumbbells 2kg to 60kg", "Air-Purified HEPA Climate Control"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cardio-theater",
    title: "Dynamic Cardio & Endurance Hub",
    tagline: "Interactive cardio with cinematic entertainment.",
    description: "Equipped with Woodway slat-belt treadmills, Concept2 rowers and ski-ergs, StairMasters, and Wattbikes with live scenic route streaming and heart-rate telemetry.",
    features: ["Woodway Curve & Slat Treadmills", "Concept2 Ergometers", "StairMaster Gauntlets", "Virtual Racing Displays"],
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "yoga-sanctuary",
    title: "Mind & Body Zen Sanctuary",
    tagline: "Peace, stillness, and restorative tranquility.",
    description: "Acoustically isolated studio with natural Canadian cedarwood flooring, ambient dimmable chromatherapy lighting, and heated infrared panels for hot yoga sessions.",
    features: ["Acoustic Sound Isolation", "Infrared Thermal Heating", "Manduka Pro Mats & Props", "Tibetan Singing Bowls"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "nutrition-bar",
    title: "A3 Clean Fuel & Shake Lounge",
    tagline: "Organic nutrition crafted fresh for post-workout recovery.",
    description: "Fuel your progress with organic cold-pressed juices, grass-fed isolate protein shakes, artisan espresso, and chef-curated macro meal prep boxes.",
    features: ["Organic Cold-Pressed Juices", "Custom Protein Smoothies", "Specialty Artisan Coffee", "Pre-ordered Macro Meals"],
    image: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter-monthly",
    name: "1 Month Kickstart",
    price: 1299,
    period: "/ month",
    periodMonths: 1,
    description: "Perfect for testing our world-class facilities and building your daily fitness habit.",
    features: [
      "Full access to gym floor & cardio arena",
      "Locker & shower facilities access",
      "Complimentary InBody body composition scan",
      "Access to standard group fitness classes",
      "Mobile Member Portal access & QR Check-in"
    ],
    trialAvailable: true
  },
  {
    id: "pro-quarterly",
    name: "3 Months Transformation",
    price: 3300,
    period: "/ quarter",
    periodMonths: 3,
    description: "Our most popular package for members committed to serious, measurable physique transformations.",
    popular: true,
    badge: "Most Popular",
    features: [
      "All 1-Month Plan benefits included",
      "2 complimentary 1-on-1 Personal Training sessions",
      "1 Clinical Nutrition Consultation & Macro Plan",
      "Priority booking for premium studio classes",
      "1 Guest Pass per month"
    ],
    trialAvailable: true
  },
  {
    id: "elite-semi-annual",
    name: "6 Months Performance",
    price: 6000,
    period: "/ 6 months",
    periodMonths: 6,
    description: "Designed for intermediate & advanced athletes looking for structured periodization.",
    features: [
      "All 3-Month Plan benefits included",
      "4 complimentary 1-on-1 Personal Training sessions",
      "Monthly InBody tracking & Diet adjustments",
      "10% discount at A3 Clean Fuel Bar",
      "Free membership pause up to 30 days"
    ],
    trialAvailable: true
  },
  {
    id: "vip-annual",
    name: "12 Months VIP All-Access",
    price: 10800,
    period: "/ year",
    periodMonths: 12,
    badge: "Best Value",
    description: "The ultimate luxury fitness experience with complete club access and all perks.",
    features: [
      "Full VIP Passport Access across all club areas",
      "8 1-on-1 Coach personal training sessions",
      "Quarterly Sports Physiotherapy screenings",
      "Dedicated VIP locker & laundry service",
      "Free membership pause up to 60 days",
      "Direct Priority Concierge & Member Support"
    ],
    trialAvailable: true
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Aditya Roy",
    location: "A3Fitness Member",
    achievement: "-18 kg Fat Loss & 120kg Deadlift",
    timeframe: "6 Months Transformation",
    quote: "A3Fitness completely redefined my relationship with fitness. The biomechanics equipment, coaches, and member portal tracking made consistency effortless!",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    program: "Olympic Lifting & Hypertrophy"
  },
  {
    id: "2",
    name: "Sneha Mukherjee",
    location: "A3Fitness Member",
    achievement: "Cured Chronic Back Pain & Gained Lean Muscle",
    timeframe: "4 Months Journey",
    quote: "The combination of sports physiotherapy and yoga restored my spine health after 8 years of desk posture. The facilities are truly world class.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    program: "Mind-Body Balance & Recovery"
  },
  {
    id: "3",
    name: "Rajesh Singhania",
    location: "A3Fitness Member",
    achievement: "Marathon Finisher & 14% Body Fat",
    timeframe: "9 Months Progress",
    quote: "From being out of breath climbing stairs to finishing my first half marathon. The high-intensity metabolic conditioning and personalized nutrition guides are gold standard.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    program: "Cardio Strength & Endurance"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "Dumbbell",
    title: "World-Class Biomechanics",
    description: "Custom Eleiko, Hammer Strength, and Watson equipment calibrated for precise muscle recruitment and joint safety."
  },
  {
    icon: "QrCode",
    title: "Smart Attendance & Portal",
    description: "Zero-friction contactless QR code check-in and instant digital access to your workout logs, plan validity, and invoices."
  },
  {
    icon: "Salad",
    title: "Tailored Macro Nutrition",
    description: "Medical-grade InBody 770 body composition scans with custom nutrition blueprints from clinical sports dietitians."
  },
  {
    icon: "Clock",
    title: "Flexible 365-Day Access",
    description: "Open 7 days a week from 5:30 AM to 11:00 PM with all-access passport to all club amenities."
  }
];

export const FAQS = [
  {
    question: "How do I access the Member Portal or check my active plan?",
    answer: "You can click 'Member Portal' in the top navigation bar or enter your Member ID (e.g., MEM-1001) in the Member Hub on this page. It connects directly with our Gym Management System (GMS) to show your plan expiry, attendance streak, and downloadable tax invoices."
  },
  {
    question: "Can I try the gym before committing to a membership?",
    answer: "Absolutely! We offer a complimentary 3-Day VIP Experience Pass including gym floor access, one group studio class, and an InBody composition assessment. Click 'Claim Free Pass' to get started."
  },
  {
    question: "How does the contactless QR Attendance work?",
    answer: "Upon arriving at club reception, scan the live QR code at the desk or click 'QR Check-in' on your mobile portal. Your entry is recorded in real time on our GMS dashboard."
  },
  {
    question: "Can I freeze or pause my membership during travel or injury?",
    answer: "Yes! Quarterly plans include up to 15 days freeze, 6-Month plans include 30 days, and Annual VIP plans include up to 60 days of complimentary membership pause through the Member Portal."
  }
];