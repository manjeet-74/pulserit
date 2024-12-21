import mongoose, { Schema } from "mongoose";
import UserBase, {IUserBase} from "./UserBase";

export interface ICoordinator extends IUserBase {
    club: mongoose.Schema.Types.ObjectId
}

const CoordinatorSchema= new Schema<ICoordinator>({
    club: [{type: mongoose.Schema.Types.ObjectId, ref: "Club"}]
});
const Coordinator= UserBase.discriminator("Coordinator", CoordinatorSchema);

export default Coordinator;