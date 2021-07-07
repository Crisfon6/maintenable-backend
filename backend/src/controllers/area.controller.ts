import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { IController } from "../interfaces/controller.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { Area } from '../models/area.model';
import { validatePlacesMiddleware } from "../middlewares/validatePlaces.middleware";



export class AreaController implements IController {
  public path = "/area";
  public router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes = () => {
    this.router
    .all(this.path,authMiddleware)
      .get(this.path, this.getArea)
      .get(this.path+'/id/:id',this.getById)
      .delete(this.path+'/delete/:id',this.delete)
      .put(this.path+'/update/:id',this.update)
      .post(this.path, [   body("name").not().isEmpty().isString(),
       
        validatePlacesMiddleware],this.create)
      
  };
  getArea = async (req: Request, res: Response) => { 
    
    const { limit = 5, from = 0, mean = "" } = req.query;
    const cMean = String(mean);
    const r = new RegExp(cMean, "i");
    const q = { state: true };
    const total = await Area.countDocuments(q);
    const users = await Area.find({
      $or: [{ name: r }],
      $and: [{ state: true }],
    })     
    .skip(Number(from)).limit(Number(limit));

    res.status(200).send({ items: users, total });
  };
  getById =async (req: Request, res: Response) => { 
  const result = await Area.findById(req.params.id);
  res.status(200).send({items:result});

  }
  update = async (req: Request, res: Response) => {
    const result  = await Area.findByIdAndUpdate(req.params.id,{
      name:req.body.name
    });   
    res.status(200).send({ items: result});
  };

  delete = async (req: Request, res: Response) => {
    const result  = await Area.findByIdAndUpdate(req.params.id,{
      state:false
    },{new:true});   
    res.status(200).send({ items: result});
  };
  create = async (req: Request, res: Response) => {
    const exist = await Area.findOne({name: req.body.name});
    if (exist){
      return res.status(401).send({msg:"Ya fue creado"});
    }
    const { name } = req.body;
    const newArea  = new Area({
      name
    });       
    const saved = await newArea.save();
    res.status(200).send({ items: saved});
  };
 
}
