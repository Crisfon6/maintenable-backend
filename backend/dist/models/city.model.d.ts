import { Document } from 'mongoose';
export interface ICity {
    name: string;
    state: Boolean;
}
export declare const City: import("mongoose").Model<ICity & Document<any, any>, {}, {}>;
