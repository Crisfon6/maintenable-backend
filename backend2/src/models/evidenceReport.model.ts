import { Schema, model, Document, PopulatedDoc } from "mongoose";
import { IActivityInvolved } from "./activityInvolved.model";
import { IArea } from "./area.model";
import { ICity } from "./city.model";
import { ICompanyInvolved } from "./companyInvolved.model";
import { IContractor } from "./contractor.model";
import { IPotential } from "./potential.model";
import { ISupervisor } from "./supervisor.model";

export interface IEvidenceReport {
  supervisor: PopulatedDoc<ISupervisor & Document>;
  companyObserved: PopulatedDoc<ICompanyInvolved & Document>;
  contractor: PopulatedDoc<IContractor & Document>;
  area: PopulatedDoc<IArea & Document>;
  observation: String;
  potential: PopulatedDoc<IPotential & Document>;
  activityInvolved: PopulatedDoc<IActivityInvolved & Document>;
  city: PopulatedDoc<ICity & Document>;
  closingDate: Date;
  photoUnsafeCondition: String[];
  observations: String;
  status:String;
  state:Boolean;
}
const evidenceReportSchema = new Schema({
  supervisor: { type: Schema.Types.ObjectId,ref: 'Supervisor', required: true },
  companyObserved: { type: Schema.Types.ObjectId,ref: 'CompanyInvolved', required: true },
  contractor: { type: Schema.Types.ObjectId,ref: 'Contractor', required: true },
  area: { type: Schema.Types.ObjectId,ref: 'Area', required: true },
  observation: { type: String, required: false },
  potential: { type: Schema.Types.ObjectId,ref: 'Potential', required: true },
  activityInvolved: { type: Schema.Types.ObjectId,ref: 'ActivityInvolved', required: true },
  city: { type: Schema.Types.ObjectId,ref: 'City', required: true },
  closingDate: { type: String, required: true },
  photoUnsafeCondition: { type: String, },
  observations: { type: String, required: false },
  status: { type: String, required:true,enum:['ABIERTO','CERRADO']},
  state: { type: Boolean,required:true, default: true}
});

export const EvidenceReport = model<IEvidenceReport & Document>('EvidenceReport',evidenceReportSchema );
