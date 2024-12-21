import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import UserBase from "../models/UserBase"; 
const router = express.Router();


const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
 
router.post("/signup", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await UserBase.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new UserBase({ name, email, password, role });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    next(error); 
  }
});

router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await UserBase.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    next(error); 
}
});

router.post("/logout", (req: Request, res: Response) => {
  res.status(200).json({ message: "User logged out successfully" });
});


export default router;
