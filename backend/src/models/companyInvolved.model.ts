import { Schema, Document, model } from "mongoose";

export interface ICompanyInvolved {
  name: string;
  state: Boolean;
  dataRegistration: Date;
}
const companyInvolvedSchema = new Schema({
  name: { type: String, required: true,unique: true},
  state: { type: Boolean, default: true },
  dataRegistration: { type: Date, required: true, default: Date.now() },
});

export const CompanyInvolved = model<ICompanyInvolved & Document>(
  "CompanyInvolved",
  companyInvolvedSchema
);
