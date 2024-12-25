import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/config/db";
import Event from "@/models/Event";
import Club from "@/models/Club";

export async function GET(req: NextRequest, context: { params: { id?: string } }) {
  const { params } = context;
  // Ensure params are awaited
  const { id } = params || {};

  try {
    console.log("Connecting to the database...");
    await connectDB();
    console.log("Database connected.");

    if (id) {
      console.log(`Fetching event with ID: ${id}`);
      if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("Invalid event ID.");
        return NextResponse.json({ message: "Invalid event ID" }, { status: 400 });
      }

      const event = await Event.findById(id)
      if (!event) {
        console.log("Event not found.");
        return NextResponse.json({ message: "Event not found" }, { status: 404 });
      }
      console.log("Event fetched successfully:", event);
      return NextResponse.json(event);
    } else {
      console.log("Fetching all events...");
      const events = await Event.find({}).populate("clubs");
      console.log("Events fetched successfully:", events);
      return NextResponse.json(events);
    }
  } catch (error) {
    console.error("Error occurred in GET handler:", error);
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}
