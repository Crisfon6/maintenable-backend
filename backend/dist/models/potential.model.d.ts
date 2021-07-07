import { Document } from 'mongoose';
export interface IPotential {
    name: string;
    state: Boolean;
}
export declare const Potential: import("mongoose").Model<IPotential & Document<any, any>, {}, {}>;
