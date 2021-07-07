import { Router, Request, Response } from "express";
import { IController } from "../interfaces/controller.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { ActionPlan } from "../models/actionPlan.model";

import { body } from "express-validator";
import { validatePlacesMiddleware } from "../middlewares/validatePlaces.middleware";

export class ActionPlanController implements IController {
  public path = "/actionPlan";
  public router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes = () => {
    this.router
      .all(this.path, authMiddleware)
      .get(this.path + "/accident/:id", this.getByAccident)
      .get(this.path + "/:id", this.getActionPlanById)
      .get(this.path, this.getActionPlan)
      .post(
        this.path,
        [
          body("actionPlan").isMongoId(),
          body("dateCompliance").not().isEmpty(),
          body("number").isInt(),
          validatePlacesMiddleware,
        ],
        this.create
      )
      .put(
        "/update/:id",
        [
          body("actionPlan").isMongoId(),
          body("dateCompliance").not().isEmpty(),
          body("number").isInt(),
          validatePlacesMiddleware,
        ],
        this.update
      )
      .put(
        "/update/array/:id",[
          body("actionPlanArray").isArray(),
          validatePlacesMiddleware
        ],this.updateArray
      );
  };
  getActionPlan = async (req: Request, res: Response) => {
    const actionsPlan = await ActionPlan.find();
    res.status(200).send({ items: actionsPlan });
  };
  getActionPlanById = async (req: Request, res: Response) => {
    const actionsPlan = await ActionPlan.findById(req.params.id);
    res.status(200).send({ items: actionsPlan });
  };
  getByAccident = async (req: Request, res: Response) => {
    const data = await ActionPlan.find({ accidentTracking: req.params.id });
    res.status(200).send({ items: data });
  };

  create = async (req: Request, res: Response) => {
    const { actionPlan, dateCompliance, number } = req.body;
    const newActionPlan = new ActionPlan({
      actionPlan,
      dateCompliance,
      number,
    });
    const actionPlanSaved = await newActionPlan.save();

    res.status(200).send({ items: actionPlanSaved });
  };
update = async (req:Request, res: Response) =>{
  const updated = await ActionPlan.findByIdAndUpdate(req.params.id,{
    actionPlan:req.body.actionPlan,
    dateCompliance:req.body.dateCompliance,
    number:req.body.number,
  },{new:true}) ;
  res.status(200).send({items:updated});
}
updateArray = async(req:Request, res:Response)=>{
  const array = await ActionPlan.find({accidentTracking: req.params.id});
  const data = req.body.actionPlanArray;

  //existing
  const exist=  data.filter((obj:any)=> Object.keys(obj).includes("id"));
  const idsRegister = array.map((obj:any)=>obj.id);
  const idsIncoming = exist.map((obj:any)=>obj.id);
  
  //deleted actionsplans delte from frontend
  const idsForDelete = idsRegister.filter((el:any)=>!idsIncoming.includes(el));
  let promises:any[] = [];
  idsForDelete.forEach((el:string)=>{
promises.push(ActionPlan.findOneAndDelete({_id:el}))
  } 
  );
  const resp = await Promise.all(promises);

  //new actionplans
  const news=  data.filter((obj:any)=> !Object.keys(obj).includes("id"));
  const newActionPlanForSave : any[] = [];
  news.forEach((el:any)=>{
      let temp = new ActionPlan({
          actionPlan:el.actionPlan,
          dateCompliance:el.dateCompliance,
          number:el.number,
        });
        newActionPlanForSave.push(temp);
      });

      let promisesSave : any[] = [];
      newActionPlanForSave.forEach((el:any)=>{
        promisesSave.push(el.save());
      });
 const resp2 = await Promise.all(promisesSave);
      res.status(200).send({msg:'good'})
}
}
