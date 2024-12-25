import mongoose, { Schema } from "mongoose";
import UserBase, { IUserBase } from "./UserBase";

export interface IStudent extends IUserBase {
  registeredClubs: mongoose.Types.ObjectId[]; 
  usn: string;
}

const StudentSchema: Schema = new Schema({
  registeredClubs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Club" }],
  usn : {type:String, unique: true, required:true }
});

const Student = UserBase.discriminator<IStudent>("Student", StudentSchema);

export default Student;
