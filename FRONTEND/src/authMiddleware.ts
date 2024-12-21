import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

interface AuthenticatedUser {
  user: jwt.JwtPayload & { role?: string };
}

export async function authenticate(req: NextRequest): Promise<NextResponse | AuthenticatedUser> {
  const authorizationHeader = req.headers.get("Authorization");
  const token = authorizationHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ message: "Unauthorized: No token provided" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload & { role?: string };
    return { user: decoded };
  } catch (error) {
    return NextResponse.json(
      { message: "Unauthorized: Invalid or expired token" },
      { status: 401 }
    );
  }
}

export async function isAdminOrCoordinator(user: jwt.JwtPayload & { role?: string }): Promise<void | NextResponse> {
  const { role } = user;

  if (user.role === "admin" || role === "coordinator") {
    return; 
  } else {
    return NextResponse.json({ message: "Permission denied: Insufficient privileges" }, { status: 403 });
  }
}

export async function middleware(req: NextRequest) {
  const authResponse = await authenticate(req);
  if (authResponse instanceof NextResponse) {
    return authResponse; 
  }

  const { user } = authResponse; 

  const roleResponse = await isAdminOrCoordinator(user);
  if (roleResponse instanceof NextResponse) {
    return roleResponse; 
  }

  return NextResponse.next(); 
}


export const config = {
  matcher: ["/api/clubs/:path*", "/api/posts/:path*", "/api/events/:path*"], // Add more routes if necessary
};
