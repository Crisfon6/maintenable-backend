import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { IController } from "../interfaces/controller.interface";
import { authMiddleware } from "../middlewares/auth.middleware";


import { validatePlacesMiddleware } from "../middlewares/validatePlaces.middleware";
import { Potential } from "../models/potential.model";


export class PotentialController implements IController {
  public path = "/potential";
  public router = Router();
  private Model;
  constructor() {
      this.Model = Potential;
    this.initRoutes();
  }
  initRoutes = () => {
    this.router
    .all(this.path,authMiddleware)
      .get(this.path, this.get)
      .get(this.path+'/all',this.getAll)
      .post(this.path,this.create)
      .get(this.path+'/id/:id', this.getById)
      .put(this.path+'/:id', this.update)
      .put(this.path+'/disable/:id', this.disable)
      .delete(this.path+'/delete/:id', this.delete)
    
  };
  getAll = async (req:Request, res: Response)=>{
    const results = await this.Model.find();
  res.status(200).send({items: results});
  }
  get = async (req: Request, res: Response) => {
    const { limit = 5, skip = 0, mean = "" } = req.query;    
    const r = new RegExp(String(mean), "i");
    const q = { state: true };
    const total =await this.Model.countDocuments(q);   
    
    const results = await this.Model.find({
      $or: [{ name: r }],
      $and: [{ state: true }],
    }).skip(Number(skip)).limit(Number(limit));
  res.status(200).send({ items: results, total });
  };
  update = async (req: Request, res: Response) => {       
    const result = await this.Model.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true});   
    res.status(200).send({items: result});
  };
  disable= async (req: Request, res: Response) => {    
    const result = await this.Model.findByIdAndUpdate(req.params.id,{state:false},{new:true});   
    res.status(200).send({items: result});
  };

  getById= async (req: Request, res: Response) => {    
    const result = await this.Model.findById(req.params.id);   
    res.status(200).send({items: result});
  };
  create = async (req: Request, res: Response) => {    
    const exist = await this.Model.findOne({name: req.body.name});
    if (exist) return res.status(401).send({ msg: "Ya fue Creado" });
    const newDoc  = new this.Model({
     name:req.body.name
    });   
    const saved = await newDoc.save();
    res.status(200).send({ items: saved});
  };
  delete = async (req: Request, res: Response) => {
      const deleted =await this.Model.findOneAndDelete({_id: req.params.id});
      res.status(200).send({ items: deleted});
  }   
     
}
