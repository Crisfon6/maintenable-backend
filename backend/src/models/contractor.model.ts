import { Schema, Document, model } from "mongoose";

export interface IContractor {
  name: string;
  state: Boolean;
  dataRegistration: Date;
}
const contractorSchema = new Schema({
  name: { type: String, required: true ,unique: true},
  state: { type: Boolean, default: true },
  dataRegistration: { type: Date, required: true, default: Date.now() },
});

export const Contractor = model<IContractor & Document>(
  "Contractor",
  contractorSchema
);
