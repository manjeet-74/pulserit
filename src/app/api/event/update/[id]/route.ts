import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/db";
import Event from "@/models/Event";
import { authenticate, isAdminOrCoordinator } from "@/middleware";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const authResponse = await authenticate(req);
    if (authResponse instanceof NextResponse) return authResponse;
    const { user } = authResponse;
    const hasPermission = await isAdminOrCoordinator(user);
    if (!hasPermission) return NextResponse.json({ message: "Permission denied" }, { status: 403 });

    try {
        await connectDB();
        const event = await Event.findById(params.id).populate("club");
        if (!event) return NextResponse.json({ message: "Event not found" }, { status: 404 });
        return NextResponse.json(event);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to fetch event" }, { status: 500 });
    }
}
