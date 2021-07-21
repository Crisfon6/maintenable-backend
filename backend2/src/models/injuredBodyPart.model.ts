import { Schema, Document, model } from "mongoose";

export interface IInjuredBodyPart {
  name: string;
  state: Boolean;
  dataRegistration: Date;
}
const injuredBodyPartSchema = new Schema({
  name: { type: String, required: true,unique: true},
  state: { type: Boolean, default: true },
  dataRegistration: { type: Date, required: true, default: Date.now() },
});

export const InjuredBodyPart = model<IInjuredBodyPart & Document>(
  "InjuredBodyPart",
  injuredBodyPartSchema
);
