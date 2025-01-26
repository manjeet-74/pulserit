import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import { SignJWT } from "jose";
import UserBase from "@/models/UserBase";
import { connectDB } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

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

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserBase({
      name,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();

    // const token = jwt.sign(
    //   { id: newUser._id, role: newUser.role },
    //   JWT_SECRET,
    //   { expiresIn: "1h" }
    // );

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ id: newUser._id, role: newUser.role })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);

    return NextResponse.json(
      { message: "User created successfully", token },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
