import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose"; // Import from 'jose'
import User from "@/models/UserBase";
import { connectDB } from "@/config/db";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function POST(request: NextRequest) {
  try {
    console.log("Enetered login route");
    await connectDB();

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    // console.log(user);
    // if (user.password !== hashedPassword) {
    //   console.log("passwords do not match");
    //   return NextResponse.json(
    //     { message: "Invalid email or password" },
    //     { status: 401 }
    //   );
    // }

    const validPassword = await bcrypt.compare(password, user.password);

    if(!validPassword) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Create the JWT using jose
    const secret = new TextEncoder().encode(JWT_SECRET);
    const token = await new SignJWT({ id: user._id, role: user.role })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(secret);

    const response = NextResponse.json(
      {
        message: "Login successful",
        token,
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
        success: true,
      },
      { status: 200 }
    );

    // Set the token in the cookies
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true, // Ensure secure flag is used in production
      maxAge: 3600, // 1 hour in seconds
      path: "/", // Accessible across the entire site
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
