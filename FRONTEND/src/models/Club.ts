import mongoose, { Schema, Document } from "mongoose";

export interface IClub extends Document {
  name: string; 
  description: string; 
  socialMediaLinks: string[]; 
  websiteLink: string; 
  logo: string; 
  creator: mongoose.Types.ObjectId; 
  createdAt: Date; 
}

const ClubSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    socialMediaLinks: [{ type: String }], 
    websiteLink: { type: String }, 
    logo: { type: String }, 
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "UserBase", required: true }, // References UserBase (Admin or Coordinator)
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Club = mongoose.model<IClub>("Club", ClubSchema);

export default Club;
