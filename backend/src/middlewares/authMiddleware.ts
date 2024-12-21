import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload & { role?: string };
    req.user = decoded; 
    next();
  } catch (e) {
    res.status(401).json({ msg: "invalid or expired token" });
  }
};

export const isAdminOrCoordinator = (req: Request, res: Response, next: NextFunction) => {
  const { role } = req.user || {}; 
  if (role === "admin" || role === "coordinator") {
    next();
  } else {
    return res.status(403).json({ message: "Permission denied" });
  }
};
