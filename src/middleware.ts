import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

interface AuthenticatedUser {
  user: { [key: string]: any; role: string };
}

// Authenticate the user by verifying the JWT token
export async function authenticate(
  req: NextRequest
): Promise<AuthenticatedUser | null> {
  const token = req.cookies.get("token")?.value || "";

  if (!token) {
    console.log("No token provided.");
    return null;
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    // console.log("Token decoded successfully:", payload);
    const decoded = payload as { [key: string]: any; role: string };
    return { user: decoded };
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

// Check if the user has the admin or coordinator role
export async function isAdminOrCoordinator(user: {
  [key: string]: any;
  role: string;
}): Promise<boolean> {
  const { role } = user;
  return role === "admin" || role === "coordinator";
}

// Middleware to handle authentication and authorization
export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Define public paths
  const isPublicPath =
    path === "/login" || path === "/signup" || path === "/verifyemail";

  // Allow access to public paths
  if (isPublicPath) {
    const token = req.cookies.get("token")?.value || "";
    if (token) {
      return NextResponse.redirect(new URL("/clubs", req.nextUrl));
    }
    return NextResponse.next();
  }

  // Authenticate the user for private paths
  const authResponse = await authenticate(req);
  if (!authResponse) {
    console.log("Authentication failed.");
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Restrict access to admin/coordinator paths
  const restrictedPaths = ["/api/clubs", "/api/posts", "/api/events"];
  if (restrictedPaths.some((p) => path.startsWith(p))) { 
    const authorized = await isAdminOrCoordinator(authResponse.user);
    if (!authorized) {
      console.log("Authorization failed.");
      return NextResponse.json(
        { message: "Forbidden: You do not have access to this resource" },
        { status: 403 }
      );
    }
  }

  // Allow access for authenticated users
  console.log(
    "User authenticated and authorized. Proceeding to the requested route."
  );
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/clubs/:path*",
    "/api/posts/:path*",
    "/api/events/:path*",
    "/clubs",
    "/",
  ],
};
