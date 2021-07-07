import { Router, Request, Response } from "express";
import { IController } from "../interfaces/controller.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { Classification } from "../models/classification.model";
import { TypeActionPlan } from "../models/typeActionPlan.model";
import { body } from "express-validator";
import { validatePlacesMiddleware } from "../middlewares/validatePlaces.middleware";
export class TypeActionPlanController implements IController {
  public path = "/typeActionPlan";
  public router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes = () => {
    this.router
    .all(this.path,authMiddleware)
      .get(this.path, this.getTypeActionPlan)
      .get(this.path+'/id/:id', this.getById)
      .post(this.path,[   body("name").not().isEmpty().isString(),
       
        validatePlacesMiddleware], this.createTypeActionPlan)
      .put(this.path+'/update/:id',[   body("name").not().isEmpty().isString(),       
        validatePlacesMiddleware], this.update)
        .delete(this.path+'/delete/:id', this.delete)
      
  };
 
  createTypeActionPlan = async (req: Request, res: Response) => {
    const { name } = req.body;
    const newTypeActionPlan  = new TypeActionPlan({
      name
    });   
    const saved = await newTypeActionPlan.save();
    res.status(200).send({ items: saved});
  };


  getTypeActionPlan = async (req: Request, res: Response) => {
    const { limit = 5, skip = 0, mean = "" } = req.query;
    const cMean = String(mean);
    const r = new RegExp(cMean, "i");
    
    const q = { state: true };
    const total = await TypeActionPlan.countDocuments(q);
    const result = await TypeActionPlan.find({
      $or: [{ name: r }],
      $and: [{ state: true }],
    })       
    .skip(Number(skip)).limit(Number(limit));

    res.status(200).send({ items: result, total });
  };
  getById= async (req:Request,res:Response)=>{
    const id = req.params['id'];   
    const result = await TypeActionPlan.findById(id);
    res.status(200).send({
      result
    });
  }
  update= async (req:Request,res:Response)=>{
    const id = req.params['id'];   
    const data =req.body.name;
    const result = await TypeActionPlan.findByIdAndUpdate(id,{name:data},{new:true});
    res.status(200).send({
     items: result
    });
  }
  delete= async (req:Request,res:Response)=>{
    const id = req.params['id'];   
    const result = await TypeActionPlan.findByIdAndUpdate(id,{state:false},{new:true});
    res.status(200).send({
      result
    });
  }
 
}
