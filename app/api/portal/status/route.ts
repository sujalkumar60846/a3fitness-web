import { NextResponse } from "next/server";

export async function GET() {
  const gmsBaseUrl = process.env.NEXT_PUBLIC_GMS_BASE_URL || "http://localhost:3000";
  const startTime = Date.now();

  try {
    const res = await fetch(`${gmsBaseUrl}/login`, {
      method: "HEAD",
      cache: "no-store",
    }).catch(() => null);

    const isConnected = res !== null && (res.status === 200 || res.status === 307 || res.status === 308);
    const responseTimeMs = Date.now() - startTime;

    return NextResponse.json({
      isConnected,
      baseUrl: gmsBaseUrl,
      responseTimeMs,
      timestamp: new Date().toISOString(),
      service: "Wellness Club - GMS Integration Layer",
      routes: {
        memberPortal: `${gmsBaseUrl}/member`,
        staffLogin: `${gmsBaseUrl}/login`,
        attendanceScan: `${gmsBaseUrl}/scan`,
        checkinApi: `${gmsBaseUrl}/api/attendance/checkin`,
      },
    });
  } catch {
    return NextResponse.json({
      isConnected: false,
      baseUrl: gmsBaseUrl,
      responseTimeMs: Date.now() - startTime,
      timestamp: new Date().toISOString(),
      service: "Wellness Club - Standalone Demo Mode",
    });
  }
}
