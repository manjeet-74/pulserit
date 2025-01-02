import jwt from "jsonwebtoken";
import UserBase from "@/models/UserBase";
import { connectDB } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

connectDB();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { name, email, password, role } = reqBody;
    console.log(reqBody);

    const existingUser = await UserBase.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = new UserBase({ name, email, password, role });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return NextResponse.json(
      { message: "User created successfully", token },
      { status: 201 }
    );

    return NextResponse.json({ message: "Route not found" }, { status: 404 });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
