import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/db";
import Event from "@/models/Event";
import { authenticate, isAdminOrCoordinator } from "@/authMiddleware";

export async function POST(req: NextRequest) {
    console.log("POST request received.");
  
    const authResponse = await authenticate(req);
    if (authResponse instanceof NextResponse) {
      console.log("Authentication failed.");
      return authResponse;
    }
  
    const { user } = authResponse;
    console.log("Authenticated user:", user);
  
    const hasPermission = await isAdminOrCoordinator(user);
    if (!hasPermission) {
      console.log("User does not have permission.");
      return NextResponse.json({ message: "Permission denied" }, { status: 403 });
    }
  
    try {
      await connectDB();
      console.log("Database connected.");
  
      const body = await req.json();
      console.log("Request body:", body);
  
      const event = await Event.create({ ...body, createdBy: user.id });
      console.log("Event created:", event);
  
      return NextResponse.json(event, { status: 201 });
    } catch (error) {
      console.error("Error while creating event:", error);
      return NextResponse.json({ message: "Failed to create event", error}, { status: 500 });
    }
  }
  