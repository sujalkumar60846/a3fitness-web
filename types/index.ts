export interface MemberSubscription {
  planMonths: number;
  startDate: string;
  dueDate: string;
  status: "ACTIVE" | "EXPIRED" | "PENDING";
}

export interface MemberPayment {
  id: string;
  invoiceNumber: string;
  amount: number;
  paidAt: string;
  invoiceUrl?: string | null;
}

export interface MemberAttendance {
  id: string;
  date: string;
  checkInTime: string;
}

export interface MemberDashboardData {
  id: string;
  fullName: string;
  memberCode: string;
  photoUrl?: string | null;
  joiningDate: string;
  isActive: boolean;
  subscriptions: MemberSubscription[];
  payments: MemberPayment[];
  attendances: MemberAttendance[];
}

export interface ProgramItem {
  id: string;
  title: string;
  category: "Strength" | "Cardio" | "Mind & Body" | "HIIT" | "Spa & Recovery" | "Nutrition";
  tagline: string;
  description: string;
  intensity: "Low" | "Moderate" | "High" | "Extreme";
  duration: string;
  calorieBurn: string;
  trainerName: string;
  trainerRole: string;
  image: string;
  benefits: string[];
  scheduleDays: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  experience: string;
  certifications: string[];
  specialties: string[];
  photo: string;
  bio: string;
  rating: number;
  clientsTrained: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  periodMonths: number;
  description: string;
  popular?: boolean;
  features: string[];
  badge?: string;
  trialAvailable?: boolean;
}

export interface FacilityItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  inquiryType: "Trial Pass" | "Personal Training" | "Corporate Membership" | "Franchise Partnership" | "General Inquiry";
  preferredTime?: string;
  notes?: string;
}

export interface FranchiseFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  investmentCapacity: "25L - 50L" | "50L - 1 Cr" | "1 Cr - 2.5 Cr" | "2.5 Cr+";
  hasSpace: boolean;
  spaceAreaSqFt?: string;
  businessBackground: string;
  notes?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  achievement: string;
  timeframe: string;
  quote: string;
  photo: string;
  rating: number;
  program: string;
}

export interface GMSConnectionStatus {
  isConnected: boolean;
  baseUrl: string;
  memberPortalUrl: string;
  staffLoginUrl: string;
  attendanceScanUrl: string;
  responseTimeMs?: number;
  lastChecked?: string;
  message?: string;
}
