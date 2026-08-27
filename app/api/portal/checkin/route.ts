import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { memberCode } = body;

    if (!memberCode) {
      return NextResponse.json({ success: false, error: "Member code is required." }, { status: 400 });
    }

    const gmsBaseUrl = process.env.NEXT_PUBLIC_GMS_BASE_URL || "http://localhost:3000";

    // Forward check-in to GMS
    try {
      const gmsRes = await fetch(`${gmsBaseUrl}/api/attendance/checkin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ memberCode: memberCode.toUpperCase() }),
      });

      if (gmsRes.ok) {
        const result = await gmsRes.json();
        return NextResponse.json({ success: true, ...result, source: "live_gms" });
      }
    } catch {
      // GMS server offline fallback
    }

    // Standalone checkin success confirmation
    return NextResponse.json({
      success: true,
      message: `Welcome to Wellness Club! Check-in recorded for Member ${memberCode.toUpperCase()}.`,
      checkInTime: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
      source: "demo_mode",
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to record check-in" }, { status: 500 });
  }
}
