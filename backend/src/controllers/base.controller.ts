import {Request, Response} from 'express';

export class BaseController {
    private Model:any;
    constructor(Model:any){
    this.Model = Model;
    }
    create = (data:any)=>{
        // const created = new this.Model
    }



}