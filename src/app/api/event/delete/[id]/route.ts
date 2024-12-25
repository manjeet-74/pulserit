import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/db";
import Event from "@/models/Event";
import { authenticate, isAdminOrCoordinator } from "@/authMiddleware";


  export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const authResponse = await authenticate(req);
  if (authResponse instanceof NextResponse) return authResponse;
  const { user } = authResponse;
  const hasPermission = await isAdminOrCoordinator(user);
  if (!hasPermission) return NextResponse.json({ message: "Permission denied" }, { status: 403 });

  try {
    await connectDB();
    const deletedEvent = await Event.findByIdAndDelete(params.id);
    if (!deletedEvent) return NextResponse.json({ message: "Event not found" }, { status: 404 });
    return NextResponse.json({ message: "Event deleted successfully" });
  } catch {
    return NextResponse.json({ message: "Failed to delete event" }, { status: 500 });
  }
}
