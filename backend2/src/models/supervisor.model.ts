import { Schema, Model, Document, model, PopulatedDoc } from "mongoose";
import { IUser } from './user.model';

export interface ISupervisor extends Document {
  name:string;
  state:Boolean;
}

const supervisorSchema: Schema = new Schema({
 name:{ type: String, required: true,unique: true},
  state: { type: Boolean,required:true, default: true}
});

export const Supervisor: Model<ISupervisor> = model("Supervisor", supervisorSchema);
