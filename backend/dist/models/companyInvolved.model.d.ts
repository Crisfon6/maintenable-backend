import { Document } from "mongoose";
export interface ICompanyInvolved {
    name: string;
    state: Boolean;
    dataRegistration: Date;
}
export declare const CompanyInvolved: import("mongoose").Model<ICompanyInvolved & Document<any, any>, {}, {}>;
