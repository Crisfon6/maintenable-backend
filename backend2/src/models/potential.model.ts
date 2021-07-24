import {Schema, Document, model} from 'mongoose';

export interface IPotential {
    name:string;
    state: Boolean;
}
const potentialSchema =  new Schema({
    name:{type: String, required: true ,unique: true},
    state: {type: Boolean, required: true,default: true}
});

export const  Potential = model<IPotential & Document>('Potential', potentialSchema);