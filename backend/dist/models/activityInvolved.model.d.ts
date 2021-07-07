import { Document } from "mongoose";
export interface IActivityInvolved {
    name: string;
    state: Boolean;
    dataRegistration: Date;
}
export declare const ActivityInvolved: import("mongoose").Model<IActivityInvolved & Document<any, any>, {}, {}>;
