import { Schema, Document, model } from "mongoose";

export interface ITypeActionPlan {
  name: string;
  dataRegistration: Date;
  state:Boolean;
}
const typeActionPlanSchema = new Schema({
  name: { type: String, required: true ,unique: true},
  dataRegistration: { type: Date, required: true, default: Date.now() },
  state: { type:Boolean,default:true}
});

export const TypeActionPlan = model<ITypeActionPlan & Document>(
  "TypeActionPlan",
  typeActionPlanSchema
);
