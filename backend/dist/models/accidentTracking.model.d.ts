import { Document, PopulatedDoc } from "mongoose";
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
    pdf: String;
}
export declare const AccidentTracking: import("mongoose").Model<IAccidentTracking & Document<any, any>, {}, {}>;
