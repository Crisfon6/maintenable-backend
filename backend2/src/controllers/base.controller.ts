import { IBaseController } from "../interfaces/controller.interface";
import { IBaseService } from "../interfaces/service.interface";
import { Request, Response } from "express";
import { regexQuery } from "../helpers/regex-query";


/*
req.body.query is a element with all places i want search example:
  [{name:'crisfon6},{password:'solve'}]
populatedField: string[]
.populate("investment","tags")
*/
export class BaseController implements IBaseController {
  service;
  constructor(Service: any) {
    this.service = new Service() as IBaseService;
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getAllRegex = this.getAllRegex.bind(this);
    this.getOneRegex = this.getOneRegex.bind(this);
    this.getOne = this.getOne.bind(this);
    this.disableEnable = this.disableEnable.bind(this);
    this.remove = this.remove.bind(this);
  }
  async create(req: Request, res: Response, findCriteria: any = {}) {
    try {
      const result = await  this.service.create(req.body,findCriteria);      
      return res.status(200).send(result);
    } catch (error: any) {            
        return res.status(error.status | 500).send({message:error.error.message || 'Bad Request'});
    }
  }
  update(req: Request, res: Response): any {
    try {
      const result = this.service.update(req.params.id, req.body);
      return res.status(200).send(result);
    } catch (error: any) {
      return  res.status(error.status || 500).send(error.error.message);
    }
  }

  getAll(req: Request, res: Response, populateField: any = {}): any {
    //the get petition should be a post petittions because need get query as mongo need
    /* 
    {
        $and:  [{name: 'name'},],
        $or:
    }
    */
   console.log(req.query.tags);
   return res.status(200)
    // try {
    //   const result = this.service.getAll(req.body.query, populateField);
    //   res.status(200).send(result);
    // } catch (error: any) {
    //   return res.status(error.status || 500).send(error.error.message);
    // }
  }
  getAllRegex(req: Request, res: Response, populateField: any = {}): any {
    try {
      const query = regexQuery(req.body.query);
      const result = this.service.getAll(query, populateField);
      res.status(200).send(result);
    } catch (error: any) {
      return res.status(error.status || 500).send(error.error.message);
    }
  }
  getOneRegex(req: Request, res: Response, populateField: any = {}) {
    try {
      const query = regexQuery(req.body.query);
      const result = this.service.getOne(query, populateField);
      res.status(200).send(result);
    } catch (error) {}
  }
  getOne(req: Request, res: Response, populateField: any = {}): any {
    try {
      const result = this.service.getOne(req.body.query, populateField);
      res.status(200).send(result);
    } catch (error: any) {
      return res.status(error.status || 500).send(error.error.message);
    }
  }
  disableEnable(req: Request, res: Response) {
    try {
      const element = this.service.getById(req.params.id, []);
      const result = this.service.update(req.params.id, {
        state: !element.state,
      });
      return res.status(200).send(result);
    } catch (error: any) {
      return res.status(error.status || 500).send(error.error.message);
    }
  }
  remove(req: Request, res: Response): any {
    try {
      const result = this.service.remove(req.params.id);
      res.status(200).send(result);
    } catch (error: any) {
      return res.status(error.status || 500).send(error.error.message);
    }
  }
}
