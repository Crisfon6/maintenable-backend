import { Document, PopulatedDoc } from "mongoose";
import { IAccidentTracking } from "./accidentTracking.model";
export interface IActionPlan {
    actionPlan: string;
    dateCompliance: Date;
    number: number;
    accidentTracking: PopulatedDoc<IAccidentTracking & Document>;
    state: Boolean;
    dataRegistration: Date;
}
export declare const ActionPlan: import("mongoose").Model<IActionPlan, {}, {}>;
