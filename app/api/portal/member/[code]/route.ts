import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ code: string }> }
) {
  try {
    const { code } = await context.params;
    const cleanCode = code?.trim().toUpperCase();

    if (!cleanCode) {
      return NextResponse.json({ success: false, error: "Member code is required" }, { status: 400 });
    }

    const gmsBaseUrl = process.env.NEXT_PUBLIC_GMS_BASE_URL || "http://localhost:3000";

    // Query live GMS database JSON endpoint
    try {
      const gmsRes = await fetch(`${gmsBaseUrl}/api/portal/member/${cleanCode}`, {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });

      if (gmsRes.ok) {
        const gmsData = await gmsRes.json();
        if (gmsData.success && gmsData.data) {
          return NextResponse.json({ success: true, data: gmsData.data, source: "live_gms" });
        }
      } else if (gmsRes.status === 404) {
        const errData = await gmsRes.json().catch(() => ({}));
        return NextResponse.json(
          { success: false, error: errData.error || `No member found with code "${cleanCode}".` },
          { status: 404 }
        );
      }
    } catch (gmsErr) {
      console.warn("Could not reach live GMS database:", gmsErr);
    }

    return NextResponse.json(
      { success: false, error: `Member "${cleanCode}" could not be verified. Please check the ID or contact gym reception.` },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}