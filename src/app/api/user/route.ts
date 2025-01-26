import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import UserBase from "@/models/UserBase";
import { connectDB } from "@/config/db";

connectDB();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const userId = getDataFromToken(request);
    const user = await UserBase.findById(userId).select("-password");

    return NextResponse.json({ message: "User found", data: user });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An error occured!" }, { status: 500 });
  }
}
