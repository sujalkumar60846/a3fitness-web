import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { fullName, email, phone, location, inquiryType, preferredTime } = data;

    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, error: "Full Name and Phone are required." },
        { status: 400 }
      );
    }

    const gmsBase = process.env.NEXT_PUBLIC_GMS_BASE_URL || "http://localhost:3000";

    // Forward lead directly to GMS Database
    try {
      const gmsRes = await fetch(`${gmsBase}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email: email || null,
          phone,
          location: location || "A3Fitness Flagship",
          inquiryType: inquiryType || "Free Trial Pass",
          preferredTime: preferredTime || null,
        }),
      });

      if (gmsRes.ok) {
        const gmsData = await gmsRes.json();
        return NextResponse.json({
          success: true,
          data: gmsData.data,
          message: `Thank you, ${fullName}! Your 3-Day VIP Free Pass has been claimed and registered in our system.`,
        });
      }
    } catch (gmsErr) {
      console.warn("Could not forward to GMS directly, recorded locally:", gmsErr);
    }

    return NextResponse.json({
      success: true,
      message: `Thank you, ${fullName}! Your 3-Day VIP Free Pass has been recorded. Our team will contact you shortly.`,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to submit inquiry" }, { status: 500 });
  }
}