import { Schema, Document, model } from "mongoose";

export interface IActivityInvolved {
  name: string;
  state: Boolean;
  dataRegistration: Date;
}
const activityInvolvedSchema = new Schema({
  name: { type: String, required: true, unique: true },
  state: { type: Boolean, default: true },
  dataRegistration: { type: Date, required: true, default: Date.now() },
});

export const ActivityInvolved = model<IActivityInvolved & Document>(
  "ActivityInvolved",
  activityInvolvedSchema
);
