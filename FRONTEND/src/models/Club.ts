import mongoose, { Schema, Document } from "mongoose";

export interface IClub extends Document {
  name: string; 
  description: string; 
  socialMediaLinks: string[]; 
  websiteLink: string; 
  logo: string; 
  creator: string ;
  createdAt: Date; 
}

const ClubSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    socialMediaLinks: [{ type: String }], 
    websiteLink: { type: String }, 
    logo: { type: String }, 
    creator: { type: String, ref: "UserBase",  }, // References UserBase (Admin or Coordinator)
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Club = mongoose.models.Club || mongoose.model("Club", ClubSchema);

export default Club;
