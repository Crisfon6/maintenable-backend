import {Schema, Document, model} from 'mongoose';

export interface ICity {
    name:string;
    state:Boolean;
}
const citySchema =  new Schema({
    name:{type: String, required: true, unique: true},
    state: {type: Boolean, required: true, default:true},
});

export const  City = model<ICity & Document>('City', citySchema);