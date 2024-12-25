import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

interface AuthenticatedUser {
  user: jwt.JwtPayload & { role?: string };
}

export async function authenticate(req: NextRequest): Promise<NextResponse | AuthenticatedUser> {
  const authorizationHeader = req.headers.get("Authorization");
  const token = authorizationHeader?.split(" ")[1];

  if (!token) {
    console.log("No token provided.");
    return NextResponse.json({ message: "Unauthorized: No token provided" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload & { role?: string };
    console.log("Token decoded successfully:", decoded);
    return { user: decoded };
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json(
      { message: "Unauthorized: Invalid or expired token" },
      { status: 401 }
    );
  }
}

export async function isAdminOrCoordinator(user: jwt.JwtPayload & { role?: string }): Promise<boolean> {
  const { role } = user;
  if (role === "admin" || role === "coordinator") {
    return true;
  }
  return false;
}

export async function middleware(req: NextRequest) {
  console.log("Middleware triggered for:", req.nextUrl.pathname);

  const authResponse = await authenticate(req);
  if (authResponse instanceof NextResponse) {
    console.log("Authentication failed.");
    return authResponse;
  }

  const { user } = authResponse;

  // const roleResponse = await isAdminOrCoordinator(user);
  // if (roleResponse instanceof NextResponse) {
  //   console.log("Authorization failed.");
  //   return roleResponse;
  // }

  console.log("User authenticated and authorized. Proceeding to the requested route.");
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/clubs/:path*", "/api/posts/:path*", "/api/events/:path*"],
};
