import { Schema, Document, model } from "mongoose";

export interface IInjuredType {
  name: string;
  state: Boolean;
  dataRegistration: Date;
}
const injuredTypeSchema = new Schema({
  name: { type: String, required: true ,unique: true},
  state: { type: Boolean, default: true },
  dataRegistration: { type: Date, required: true, default: Date.now() },
});

export const InjuredType = model<IInjuredType & Document>(
  "InjuredType",
  injuredTypeSchema
);
