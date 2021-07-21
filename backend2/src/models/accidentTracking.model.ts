import { Schema, model, Document, PopulatedDoc } from "mongoose";
import { IContractor } from './contractor.model';
import { ICompanyInvolved } from './companyInvolved.model';
import { IArea } from './area.model';
import { IActivityInvolved } from './activityInvolved.model';
import { IClassification } from './classification.model';
import { IInjuredType } from "./injuredType.model";

export interface IAccidentTracking {
  date: Date;
  contractor: PopulatedDoc<IContractor & Document>;
  companyInvolved: PopulatedDoc<ICompanyInvolved & Document>;
  area: PopulatedDoc<IArea & Document>;
  description: string;
  activityInvolved: PopulatedDoc<IActivityInvolved & Document>;
  classification: PopulatedDoc<IClassification & Document>;
  injuredBodyPart: PopulatedDoc<IClassification & Document>;
  injuredType: PopulatedDoc<IInjuredType & Document>;
  state: Boolean;
  dataRegistration: Date;
  pdf:String;
 
}

const accidentTracking: Schema = new Schema({
  dataRegistration: { type: Date, required: true, default: Date.now() },

  contractor: {
    type: Schema.Types.ObjectId,
    ref: "Contractor",
    required: true,
  },

  // CompanyInvolved
  companyInvolved: {
    type: Schema.Types.ObjectId,
    ref: "CompanyInvolved",
    required: true,
  },

  area: { type: Schema.Types.ObjectId, ref: "Area", required: true },

  description: { type: String, required: true },

  activityInvolved: {
    type: Schema.Types.ObjectId,
    ref: "ActivityInvolved",
    required: true,
  },

  classification: {
    type: Schema.Types.ObjectId,
    ref: "Classification",
    required: true,
  },

  injuredBodyPart: {
    type: Schema.Types.ObjectId,
    ref: "InjuredBodyPart",
    required: true,
  },

  injuredType: {
    type: Schema.Types.ObjectId,
    ref: "InjuredType",
    required: true,
  },
  state: { type: Boolean, default: true },
  date: { type: Date, required: true },
  pdf:{ type:String,},

});
export const AccidentTracking = model<IAccidentTracking & Document>(
  "AccidentTracking",
  accidentTracking
);
