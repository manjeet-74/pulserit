import jwt from "jsonwebtoken";
import UserBase from "@/models/UserBase";
import { connectDB } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

connectDB();

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url); 
    const reqBody = await req.json(); 

    if (url.pathname.endsWith("/signup")) {
      const { name, email, password, role} = reqBody;

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
    }

    if (url.pathname.endsWith("/login")) {
      const { email, password } = reqBody;

      const user = await UserBase.findOne({ email });
      if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
      }

      if (user.password !== password) {
        return NextResponse.json(
          { message: "Invalid credentials" },
          { status: 401 }
        );
      }

                const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
        expiresIn: "1h",
      });

      return NextResponse.json(
        { message: "Login successful", token },
        { status: 200 }
      );
    }

    if (url.pathname.endsWith("/logout")) {
      return NextResponse.json(
        { message: "User logged out successfully" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Route not found" },
      { status: 404 }
    );
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
