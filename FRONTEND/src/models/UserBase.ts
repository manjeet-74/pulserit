import mongoose, { Schema, Document } from "mongoose";

export interface IUserBase extends Document {
  name: string;
  email: string;
  password: string; // Hashed password
  role: "student" | "admin" | "coordinator";
  
}

const UserBaseSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["student", "admin", "coordinator"] },
  },
  { discriminatorKey: "role" } // Differentiates between user types
);

const UserBase = mongoose.model<IUserBase>("UserBase", UserBaseSchema);

export default UserBase;
