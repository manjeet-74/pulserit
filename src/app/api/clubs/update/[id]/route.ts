import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/db";
import Club from "@/models/Club";
import { authenticate, isAdminOrCoordinator } from "@/authMiddleware";


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
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
      const updatedClub = await Club.findByIdAndUpdate(params.id, body, { new: true });
  
      if (!updatedClub) {
        return NextResponse.json({ message: "Club not found" }, { status: 404 });
      }
  
      return NextResponse.json(updatedClub, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Failed to update club" }, { status: 500 });
    }
  }
  