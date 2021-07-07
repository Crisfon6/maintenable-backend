import { Document } from "mongoose";
export interface IContractor {
    name: string;
    state: Boolean;
    dataRegistration: Date;
}
export declare const Contractor: import("mongoose").Model<IContractor & Document<any, any>, {}, {}>;
