import { Document } from "mongoose";
export interface IInjuredType {
    name: string;
    state: Boolean;
    dataRegistration: Date;
}
export declare const InjuredType: import("mongoose").Model<IInjuredType & Document<any, any>, {}, {}>;
