import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

interface AuthenticatedUser {
  user: jwt.JwtPayload & { role?: string };
}

// Middleware for authentication
export async function authenticate(
  req: NextRequest
): Promise<NextResponse | AuthenticatedUser> {
  const authorizationHeader = req.headers.get("authorization");
  const token = authorizationHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ msg: "unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload & { role?: string };
    return { user: decoded };
  } catch (error) {
    return NextResponse.json(
      { msg: "invalid or expired token" },
      { status: 401 }
    );
  }
}

// Middleware for role-based authorization
export async function isAdminOrCoordinator(
  req: NextRequest
): Promise<NextResponse | void> {
  const authResult = await authenticate(req);

  // Check if authentication failed (returns a NextResponse)
  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { role } = authResult.user;

  if (role === "admin" || role === "coordinator") {
    return; // Allow the request to proceed
  } else {
    return NextResponse.json({ message: "Permission denied" }, { status: 403 });
  }
}

// Example middleware combining authentication and authorization
export async function middleware(req: NextRequest) {
  // Authenticate the user
  const authResponse = await authenticate(req);
  if (authResponse instanceof NextResponse) {
    return authResponse; // Return error response if authentication fails
  }

  // Check role-based access
  const roleResponse = await isAdminOrCoordinator(req);
  if (roleResponse instanceof NextResponse) {
    return roleResponse; // Return error response if authorization fails
  }

  return NextResponse.next(); // Proceed to the requested route
}

// Define the paths where this middleware applies
export const config = {
  matcher: ["/api/protected-route/:path*"], // Apply to specific routes
};
