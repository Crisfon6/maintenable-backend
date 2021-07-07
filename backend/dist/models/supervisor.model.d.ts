import { Model, Document } from "mongoose";
export interface ISupervisor extends Document {
    name: string;
    state: Boolean;
}
export declare const Supervisor: Model<ISupervisor>;
