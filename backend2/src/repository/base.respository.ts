import { IBaseRepository } from '../interfaces/repository.interface';
import {isValidObjectId,model} from 'mongoose';
export class BaseRepository implements IBaseRepository {
    private Model:any;
    constructor(Model:any){
    this.Model = Model;
    }  
    validId(id: string) {
        return isValidObjectId(id);
    }
    create(element: any) {
        const newElement = new this.Model(element);
        return newElement.save();
    }
    getAll(query: any, populateField: any) {//this change on the base should send regex
        return this.Model.find(query).populate(populateField);
///TODO:example
        // return this.Model.find({ name: new RegExp(String(name), "i") }).populate(
        //     populateField
        //   );
    }  
    update(id: string, element: any) {
        return this.Model.findByIdAndUpdate(id,element,{new:true});
    }
    getById(id: string, populateField: any={}) {
        return this.Model.findById(id).populate(populateField);
    }
    getOne(query: any, populateField: any={}) {
        return this.Model.findOne(query).populate(populateField);
    }
    remove(id: string) {
        return this.Model.findByIdAndDelete(id);
    }
}