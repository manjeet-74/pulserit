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

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);

export default Event;

/* {
    
    "title": "asd",
    "description": "asd",
    "date":"2024-01-01",
    "venue": "rit",
    "club":"6766daaf279cf426e67c805e",
    "createdBy":"6766c969e78169a90570f794"

}*/