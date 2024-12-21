import mongoose, { Schema } from "mongoose";
import UserBase, { IUserBase } from "./UserBase";

export interface IAdmin extends IUserBase {
    usn: string
}
const AdminSchema= new Schema<IAdmin>({
    usn: {type: String, required: true}
}
    
)
const Admin = UserBase.discriminator<IAdmin>("Admin", AdminSchema);

export default Admin;
