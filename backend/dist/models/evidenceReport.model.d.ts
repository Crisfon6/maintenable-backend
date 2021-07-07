import { Document, PopulatedDoc } from "mongoose";
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
    status: String;
    state: Boolean;
}
export declare const EvidenceReport: import("mongoose").Model<IEvidenceReport & Document<any, any>, {}, {}>;
