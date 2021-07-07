import { Document } from "mongoose";
export interface IClassification {
    name: string;
    state: Boolean;
    dataRegistration: Date;
}
export declare const Classification: import("mongoose").Model<IClassification & Document<any, any>, {}, {}>;
