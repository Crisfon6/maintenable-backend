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
  async  create(element: any) {
        const newElement =  this.Model(element);
        return await newElement.save();
        // const result=  await newElement.save();
        // return result;
        
    }
  async   getAll(query: any, populateField: string[]=[]) {//this change on the base should send regex
        const result= await         this.Model.find(query).populate(...populateField);
        return result;    
///TODO:example
        // return this.Model.find({ name: new RegExp(String(name), "i") }).populate(
        //     populateField
        //   );
    }  
    async update(id: string, element: any) {
        const result=  await this.Model.findByIdAndUpdate(id,element,{new:true});
        return result; 
    }
    async getById(id: string, populateField: string[]=[]) {
        const result= await  this.Model.findById(id).populate(...populateField);
        return result; 
    }
  async  getOne(query: any, populateField: string[]=[]) {
return await  this.Model.findOne(query).populate(...populateField);
    //     const result=  this.Model.findOne(query).populate(...populateField);

         
    }
  async  remove(id: string) {
        const result= await this.Model.findByIdAndDelete(id);
        return result; 
    }
}