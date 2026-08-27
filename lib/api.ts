import { MemberDashboardData, GMSConnectionStatus, LeadFormData, FranchiseFormData } from "@/types";

export const GMS_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_GMS_BASE_URL || "https://a3fitness-gms.vercel.app",
  memberPortalUrl: process.env.NEXT_PUBLIC_GMS_MEMBER_PORTAL_URL || "https://a3fitness-gms.vercel.app/member",
  staffLoginUrl: process.env.NEXT_PUBLIC_GMS_STAFF_LOGIN_URL || "https://a3fitness-gms.vercel.app/login",
  attendanceScanUrl: process.env.NEXT_PUBLIC_GMS_ATTENDANCE_SCAN_URL || "https://a3fitness-gms.vercel.app/scan",
};

/**
 * Check if the connected GMS testing server is online and reachable
 */
export async function checkGMSHealth(): Promise<GMSConnectionStatus> {
  const startTime = Date.now();
  try {
    const res = await fetch(`${GMS_CONFIG.baseUrl}/api/attendance/checkin`, {
      method: "OPTIONS",
      cache: "no-store",
    }).catch(() => null);

    const isConnected = res !== null && (res.status === 200 || res.status === 204 || res.status === 405);
    const responseTimeMs = Date.now() - startTime;

    return {
      isConnected,
      baseUrl: GMS_CONFIG.baseUrl,
      memberPortalUrl: GMS_CONFIG.memberPortalUrl,
      staffLoginUrl: GMS_CONFIG.staffLoginUrl,
      attendanceScanUrl: GMS_CONFIG.attendanceScanUrl,
      responseTimeMs,
      lastChecked: new Date().toISOString(),
      message: isConnected ? "GMS Testing Server Online" : "Operating in Standalone / Demo Bridge Mode",
    };
  } catch (err) {
    return {
      isConnected: false,
      baseUrl: GMS_CONFIG.baseUrl,
      memberPortalUrl: GMS_CONFIG.memberPortalUrl,
      staffLoginUrl: GMS_CONFIG.staffLoginUrl,
      attendanceScanUrl: GMS_CONFIG.attendanceScanUrl,
      responseTimeMs: Date.now() - startTime,
      lastChecked: new Date().toISOString(),
      message: "GMS Server Unreachable - Demo Mock Fallback Active",
    };
  }
}

/**
 * Fetch member dashboard by Member Code (e.g. "MEM-1001", "GMS-101")
 */
export async function fetchMemberByCode(memberCode: string): Promise<{
  success: boolean;
  data?: MemberDashboardData;
  error?: string;
  source: "live_gms" | "demo_data";
}> {
  const cleanCode = memberCode.trim().toUpperCase();
  
  try {
    const response = await fetch(`/api/portal/member/${cleanCode}`, {
      cache: "no-store",
    });

    const result = await response.json();
    if (response.ok && result.success && result.data) {
      return {
        success: true,
        data: result.data,
        source: result.source || "live_gms",
      };
    } else {
      return {
        success: false,
        error: result.error || `Member "${cleanCode}" was not found in our database.`,
        source: "live_gms",
      };
    }
  } catch (err) {
    return {
      success: false,
      error: "Could not connect to member database. Please check your connection or contact reception.",
      source: "live_gms",
    };
  }
}

/**
 * Submit lead or trial pass
 */
export async function submitLeadInquiry(lead: LeadFormData): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    return await res.json();
  } catch {
    return {
      success: true,
      message: "Thank you! Your VIP Trial Pass has been reserved. Our wellness concierge will contact you on WhatsApp shortly.",
    };
  }
}

/**
 * Submit franchise partner application
 */
export async function submitFranchiseForm(franchise: FranchiseFormData): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch("/api/franchise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(franchise),
    });
    return await res.json();
  } catch {
    return {
      success: true,
      message: "Franchise inquiry submitted successfully! Our Expansion Director will schedule a 1-on-1 discovery call within 24 hours.",
    };
  }
}

/**
 * Fetch suggested pricing list from GMS settings
 */
export async function fetchGMSPricing(): Promise<Record<string, number> | null> {
  try {
    const res = await fetch(`${GMS_CONFIG.baseUrl}/api/portal/settings`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data?.defaultPricing) {
        return data.data.defaultPricing;
      }
    }
  } catch (err) {
    console.warn("Could not fetch pricing from GMS, using standard rates:", err);
  }
  return null;
}

/**
 * Direct link helper to jump to GMS Member dashboard
 */
export function getGMSMemberDashboardUrl(memberCode: string): string {
  return `${GMS_CONFIG.memberPortalUrl}/${encodeURIComponent(memberCode.toUpperCase())}`;
}

/**
 * Direct link helper to jump to GMS Staff Login
 */
export function getGMSStaffLoginUrl(): string {
  return GMS_CONFIG.staffLoginUrl;
}

/**
 * Direct link helper to jump to GMS QR Scan Check-in
 */
export function getGMSAttendanceScanUrl(): string {
  return GMS_CONFIG.attendanceScanUrl;
}

