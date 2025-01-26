import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/db";
import Club from "@/models/Club";

export async function GET() {
  try {
    await connectDB();
    const clubs = await Club.find({}).lean();
    return NextResponse.json(
      { message: "Clubs found", data: clubs },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Failed to fetch clubs" },
      { status: 500 }
    );
  }
}
