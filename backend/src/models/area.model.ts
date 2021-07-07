import { Schema, Document, model } from "mongoose";

export interface IArea {
  name: string;
  state: Boolean;
  dataRegistration: Date;
}
const areaSchema = new Schema({
  name: { type: String, required: true , unique: true},
  state: { type: Boolean, default: true },
  dataRegistration: { type: Date, required: true, default: Date.now() },
});

export const Area = model<IArea & Document>("Area", areaSchema);
