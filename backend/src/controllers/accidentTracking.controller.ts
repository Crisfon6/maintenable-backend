import { Router, Request, Response } from "express";
import { IController } from "../interfaces/controller.interface";
import {
  AccidentTracking,
  IAccidentTracking,
} from "../models/accidentTracking.model";
import { ActionPlan, IActionPlan } from "../models/actionPlan.model";
import { Contractor } from "../models/contractor.model";
import { CompanyInvolved } from "../models/companyInvolved.model";
import { Area } from "../models/area.model";
import { Classification } from "../models/classification.model";
import { InjuredBodyPart } from "../models/injuredBodyPart.model";
import { InjuredType } from "../models/injuredType.model";
import { ActivityInvolved } from "../models/activityInvolved.model";
import { TypeActionPlan } from "../models/typeActionPlan.model";
import { authMiddleware } from "../middlewares/auth.middleware";
import { body } from "express-validator";
import { validatePlacesMiddleware } from "../middlewares/validatePlaces.middleware";
import fs from "fs";
import moment from "moment";

export class AccidentTrackingController implements IController {
  public path = "/accidentTracking";
  public router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes = () => {
    this.router
      .all(this.path, authMiddleware)
      .delete(this.path + "/delete/:id", this.deleteAccidentTracking)
      .get(this.path + "/id/:id", this.getById)
      .get(this.path + "/get", this.getInfoForCreateAccidentTracking)
      .get(this.path, this.getAccidenTracking)
      .post(this.path + "/csv",[body("ids").isArray()], this.getCsv)
      .post(
        this.path,
        [
          body("contractor").isMongoId(),
          body("companyInvolved").isMongoId(),
          body("area").isMongoId(),
          body("description").isString(),
          body("activityInvolved").isMongoId(),
          body("classification").isMongoId(),
          body("injuredBodyPart").isMongoId(),
          body("injuredType").isMongoId(),
          body("actionPlanArray").isArray(),
          body("date").not().isEmpty(),

          validatePlacesMiddleware,
        ],
        this.create
      )
      .put(
        this.path + "/update/:id",
        [
          body("contractor").isMongoId(),
          body("companyInvolved").isMongoId(),
          body("area").isMongoId(),
          body("description").isString(),
          body("activityInvolved").isMongoId(),
          body("classification").isMongoId(),
          body("injuredBodyPart").isMongoId(),
          body("injuredType").isMongoId(),
          body("date").not().isEmpty(),

          validatePlacesMiddleware,
        ],
        this.updateAccidentTracking
      );
   
  };
  getAccidenTracking = async (req: Request, res: Response) => {
    const { limit = 5, from = 0, mean = "" } = req.query;
    const cMean = String(mean);
    const total = await AccidentTracking.countDocuments();
    if (cMean === "") {
      let results = await AccidentTracking.find({ state: true })
        .populate("companyInvolved", "name")
        .populate("contractor")
        .populate("area")
        .populate("classification")
        .populate("injuredType")
        .skip(Number(from))
        .limit(Number(limit)); //.exec().skip();
      return res.status(200).send({ items: results, total });
    }
    const results = await AccidentTracking.find({
      $or: [
        { _id: cMean },
        { contractor: cMean },
        { companyInvolved: cMean },
        { area: cMean },
        { classification: cMean },
        { injuredType: cMean },
      ],
      $and: [{ state: true }],
    })
      .populate("contractor")
      .populate("area")
      .populate("classification")
      .populate("injuredType")
      .populate("companyInvolved")
      .skip(Number(from))
      .limit(Number(limit));
    res.status(200).send({ items: results });
  };
  getById = async (req: Request, res: Response) => {
    const accident = await AccidentTracking.findById(req.params.id)
      .populate("contractor")
      .populate("area")
      .populate("classification")
      .populate("injuredType")
      .populate("companyInvolved")
      .populate("activityInvolved")
      .populate("injuredBodyPart");
    res.status(200).send({ items: accident });
  };
  getInfoForCreateAccidentTracking = async (req: Request, res: Response) => {
    const q = {};
    const [
      contractors,
      companyInvolveds,
      areas,
      classifications,
      injuredBodyParts,
      injuredTypes,
      activityInvolveds,
      typeActionPlans,
    ] = await Promise.all([
      Contractor.find(q),
      CompanyInvolved.find(q),
      Area.find(q),
      Classification.find(q),
      InjuredBodyPart.find(q),
      InjuredType.find(q),
      ActivityInvolved.find(q),
      TypeActionPlan.find(q),
    ]);
    res.status(200).send({
      contractors,
      companyInvolveds,
      areas,
      classifications,
      injuredBodyParts,
      injuredTypes,
      activityInvolveds,
      typeActionPlans,
    });
  };
  create = async (req: Request, res: Response) => {
    const { actionPlanArray } = req.body;

    const accident = new AccidentTracking({
      contractor: req.body.contractor,
      companyInvolved: req.body.companyInvolved,
      area: req.body.area,
      description: req.body.description,
      activityInvolved: req.body.activityInvolved,
      classification: req.body.classification,
      injuredBodyPart: req.body.injuredBodyPart,
      injuredType: req.body.injuredType,
      date: req.body.date,
    });

    const accidenTrackingSaved = await accident.save();
    for (let index = 0; index < actionPlanArray.length; index++) {
      let actionTemp = actionPlanArray[index] as IActionPlan;

      actionTemp.accidentTracking = accidenTrackingSaved._id;
      actionTemp.number = index;
      const action = new ActionPlan(actionTemp);

      const actionSaved = await action.save();
    }
    res.status(200).send(accidenTrackingSaved);
  };
  
  updateAccidentTracking = async (req: Request, res: Response) => {
    const id = req.params["id"];
    const updated = await AccidentTracking.findByIdAndUpdate(
      id,
      {
        contractor: req.body.contractor,
        companyInvolved: req.body.companyInvolved,
        area: req.body.area,
        description: req.body.description,
        activityInvolved: req.body.activityInvolved,
        classification: req.body.classification,
        injuredBodyPart: req.body.injuredBodyPart,
        injuredType: req.body.injuredType,
        date: req.body.date,
        pdf:req.body.pdf
      },
      { new: true }
    );
    res.status(200).send({ items: updated });
  };
  deleteAccidentTracking = async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleted = await AccidentTracking.findByIdAndUpdate(
      id,
      { state: false },
      { new: true }
    );
    res.status(200).send({ items: deleted });
  };
  getCsv = async (req: Request, res: Response) => {
    const {ids} = req.body;
     const csv = await this.createCSV(ids);
    const url =  './temp/' +  moment().unix()+'.csv';
    const d =  fs.writeFileSync(url,csv);
    res.status(200).download(url,'report.csv');

    setTimeout(()=>{

      fs.unlinkSync(url)
    },20000);
  };
  createCSV = async(ids:string[])=>{
    let csv = "";
    for (let index = 0; index < ids.length; index++) {

      const id = ids[index];
      const [dataAccidentTracking, dataActionPlan] = await Promise.all([
        AccidentTracking.findById(id)
          .populate("companyInvolved", "name")
          .populate("contractor", "name")
          .populate("area", "name")
          .populate("classification", "name")
          .populate("injuredType", "name")
          .populate("activityInvolved", "name")
          .populate("injuredBodyPart", "name"),
        ActionPlan.find({ accidentTracking: id }).populate(
          "actionPlan"
        ),
      ]);
      const dataJSON : any = {
        "Fecha de regisrto": dataAccidentTracking?.dataRegistration,
        Contratista: dataAccidentTracking?.contractor.name,
        "Empresa involucrada": dataAccidentTracking?.companyInvolved.name,
        Area: dataAccidentTracking?.area.name,
        Descripcion: dataAccidentTracking?.description,
        "Actividad involucrada": dataAccidentTracking?.activityInvolved.name,
        Classificacion: dataAccidentTracking?.classification.name,
        "Parte del cuerpo lesionada": dataAccidentTracking?.injuredBodyPart.name,
        "Tipo de lesion o Daño": dataAccidentTracking?.injuredType.name,
        Fecha: dataAccidentTracking?.date,
      };

      let actionsPlansJSON = [];
  let lastNumber =0;
      for (let index = 0; index < 7; index++) {
        
        if (dataActionPlan[index]!==undefined) {
          let elementX :any = dataActionPlan[index];
          lastNumber = Number(elementX['number'])+1;
          let key1 = `Plan de accion ${lastNumber+1}`;
          let key2 = `Fecha de cumplimiento ${lastNumber+1}`;
          dataJSON[key1] = elementX['name'];
          dataJSON[key2] = elementX['dateCompliance'];
        }
        else{
          lastNumber+=1;
          let key1 = `Plan de accion ${lastNumber+1}`;
          let key2 = `Fecha de cumplimiento ${lastNumber+1}`;
          dataJSON[key1] = '';
          dataJSON[key2] = '';
        }
       
    }
    
      let headers = '';
      Object.keys(dataJSON).forEach(el=>{
        headers+=el+';';
      });
      let values = '';
      Object.values(dataJSON).forEach(el=>{
        values+=el+';';
      });



      if(index===0){
        csv += headers + '\n'+ values+"\n";
      }
      else{
        csv +=values+"\n";
      }
    }
    return csv;
  }
}
