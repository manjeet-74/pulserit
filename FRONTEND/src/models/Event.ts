import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
  title: string; 
  description: string; 
  date: Date; 
  venue: string; 
  club: mongoose.Types.ObjectId; 
  createdBy: mongoose.Types.ObjectId; 
  createdAt: Date; 
}

const EventSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    venue: { type: String, required: true },
    club: { type: mongoose.Schema.Types.ObjectId, ref: "Club", required: true }, // Reference to Club model
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "UserBase", required: true }, // Reference to UserBase model
  },
  { timestamps: true } 
);

const Event = mongoose.model<IEvent>("Event", EventSchema);

export default Event;
