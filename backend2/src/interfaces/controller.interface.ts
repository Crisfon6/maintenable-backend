import { Request, Response } from "express";

export interface IBaseController{    
    create(req:Request, res:Response, findCriteria?:any):any,
    update(req:Request, res:Response):any,
    getAll(req:Request, res:Response, populateField:any):any,
    getAllRegex(req:Request, res:Response, populateField:any):any,
    getOne(req:Request, res:Response, populateField:any):any,
    getOneRegex(req:Request, res:Response, populateField:any):any,
    disableEnable(req:Request, res:Response):any,
    remove(req:Request, res:Response):any,
}