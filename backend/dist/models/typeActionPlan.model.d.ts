import { Document } from "mongoose";
export interface ITypeActionPlan {
    name: string;
    dataRegistration: Date;
    state: Boolean;
}
export declare const TypeActionPlan: import("mongoose").Model<ITypeActionPlan & Document<any, any>, {}, {}>;
