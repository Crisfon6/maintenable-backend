import { Schema, Document, model } from "mongoose";

export interface IClassification {
  name: string;
  state: Boolean;
  dataRegistration: Date;
}
const classificationSchema = new Schema({
  name: { type: String, required: true , unique: true},
  state: { type: Boolean, default: true },
  dataRegistration: { type: Date, required: true, default: Date.now() },
});

export const Classification = model<IClassification & Document>(
  "Classification",
  classificationSchema
);
