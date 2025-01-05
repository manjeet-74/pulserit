import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/db";
import Club from "@/models/Club";
import { authenticate, isAdminOrCoordinator  } from "@/middleware";
export async function POST(request: NextRequest) {
  const authResponse = await authenticate(request);
  if (authResponse instanceof NextResponse) return authResponse;

  const { user } = authResponse;

  const hasPermission = await isAdminOrCoordinator(user);
  if (!hasPermission) {
    return NextResponse.json({ message: "Permission denied" }, { status: 403 });
  }

  try {
    await connectDB();
    const body = await request.json();
    const club = await Club.create({ ...body, createdBy: user.id });
    return NextResponse.json(club, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to create club" }, { status: 500 });
  }
}
