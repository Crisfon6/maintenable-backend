import { Router, Request, Response } from "express";
import { IController } from "../interfaces/controller.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { InjuredBodyPart } from "../models/injuredBodyPart.model";
import { body } from "express-validator";
import { validatePlacesMiddleware } from "../middlewares/validatePlaces.middleware";
export class InjuredBodyPartController implements IController {
  public path = "/injuredBodyPart";
  public router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes = () => {
    this.router
    .all(this.path,authMiddleware)
      .get(this.path, this.get)
      .get(this.path+'/id/:id',this.getById)
      .put(this.path+'/update/:id',this.update)
      .delete(this.path+'/delete/:id',this.delete)
      .post(this.path,[   body("name").not().isEmpty().isString(),
       
        validatePlacesMiddleware], this.create);
      
  };
  delete  = async (req:Request,res:Response)=>{
    const results = await InjuredBodyPart.findByIdAndUpdate(req.params.id,{
      state:false
    },{new:true});   
    res.status(200).send({items: results});
  }
  update = async (req:Request,res:Response)=>{
    const results = await InjuredBodyPart.findByIdAndUpdate(req.params.id,{
      name:req.body.name
    },{new:true});   
    res.status(200).send({items: results});
  }

  getById = async (req:Request,res:Response)=>{
    const results = await InjuredBodyPart.findById(req.params.id);   
    res.status(200).send({items: results});
  }
  get = async (req: Request, res: Response) => {       
    const { limit = 5, skip = 0, mean = "" } = req.query;
    const cMean = String(mean);
    const r = new RegExp(cMean, "i");
    (cMean);
    const q = { state: true };
    const total = await InjuredBodyPart.countDocuments(q);
    const users = await InjuredBodyPart.find({
      $or: [{ name: r }],
      $and: [{ state: true }],
    })     
    .skip(Number(skip)).limit(Number(limit));

    res.status(200).send({ items: users, total });
  };
  create = async (req: Request, res: Response) => {
    const { name } = req.body;
    const newInjuredBodyPart  = new InjuredBodyPart({
      name
    });   
    const saved = await newInjuredBodyPart.save();
    res.status(200).send({ items: saved});
  };
 
}
