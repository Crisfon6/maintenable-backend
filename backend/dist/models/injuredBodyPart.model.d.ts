import { Document } from "mongoose";
export interface IInjuredBodyPart {
    name: string;
    state: Boolean;
    dataRegistration: Date;
}
export declare const InjuredBodyPart: import("mongoose").Model<IInjuredBodyPart & Document<any, any>, {}, {}>;
