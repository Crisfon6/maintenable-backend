import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { IController } from "../interfaces/controller.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { ActivityInvolved } from "../models/activityInvolved.model";

import { validatePlacesMiddleware } from "../middlewares/validatePlaces.middleware";



export class ActivityInvolvedController implements IController {
  public path = "/activityInvolved";
  public router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes = () => {
    this.router
    .all(this.path,authMiddleware)
      .get(this.path, this.getActivityInvolved)
      .get(this.path+'/id/:id', this.getById)
      .put(this.path+'/update/:id', this.update)
      .delete(this.path+'/delete/:id', this.delete)
      .post(this.path, [
        body("name").not().isEmpty().isString(),
       
        validatePlacesMiddleware
      ],this.create)
      
  };
  getActivityInvolved = async (req: Request, res: Response) => {
    const { limit = 5, from = 0, mean = "" } = req.query;
    const cMean = String(mean);
    const r = new RegExp(cMean, "i");
    const q = { state: true };
    const total = await ActivityInvolved.countDocuments(q);
    const users = await ActivityInvolved.find({
      $or: [{ name: r }],
      $and: [{ state: true }],
    })     
    .skip(Number(from)).limit(Number(limit));

    res.status(200).send({ items: users, total });
  };
  update = async (req: Request, res: Response) => {
    
    
    const result = await ActivityInvolved.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true});
   
    res.status(200).send({items: result});
  };
  delete= async (req: Request, res: Response) => {    
    const result = await ActivityInvolved.findByIdAndUpdate(req.params.id,{state:false},{new:true});
   
    res.status(200).send({items: result});
  };

  getById= async (req: Request, res: Response) => {    
    const result = await ActivityInvolved.findById(req.params.id);   
    res.status(200).send({items: result});
  };
  create = async (req: Request, res: Response) => {
    const created = await ActivityInvolved.findOne({name:req.body.name})
    if (created){
      return res.status(401).send({msg: "Ya fue creado"});
    }
    const newActivityInvolved  = new ActivityInvolved({
      name:req.body.name
    });   
    const saved = await newActivityInvolved.save();
    res.status(200).send({ items: saved});
  };
 
}
