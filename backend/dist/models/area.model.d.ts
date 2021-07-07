import { Document } from "mongoose";
export interface IArea {
    name: string;
    state: Boolean;
    dataRegistration: Date;
}
export declare const Area: import("mongoose").Model<IArea & Document<any, any>, {}, {}>;
