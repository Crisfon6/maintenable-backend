import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { IController } from "../interfaces/controller.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { ActivityInvolved } from "../models/activityInvolved.model";
import { Area } from "../models/area.model";
import { City } from "../models/city.model";
import { CompanyInvolved } from "../models/companyInvolved.model";
import { Contractor } from "../models/contractor.model";

import { EvidenceReport } from "../models/evidenceReport.model";
import { Potential } from "../models/potential.model";
import { Supervisor } from "../models/supervisor.model";

export class EvidenceReportController implements IController {
  public path = "/evidenceReport";
  public router = Router();
  private Model;
  constructor() {
    this.initRoutes();
    this.Model = EvidenceReport;
  }
  initRoutes = () => {
    this.router
      .all(this.path, authMiddleware)
      .get(this.path, this.get)
      .get(this.path + "/all", this.getAll)
      .get(this.path + "/create", this.getInfoForCreate)
      .get(this.path + "/:id", this.getById)
      .post(this.path, this.create)
      .get(this.path + "/id/:id", this.getById)
      .put(this.path + "/:id", this.update)
      .put(this.path + "/disable/:id", this.disable)
      .delete(this.path + "/delete/:id", this.delete);
  };
  getInfoForCreate = async (req: Request, res: Response) => {
    const q = { state: true };

    const [
      supervisor,
      companyObserved,
      contractor,
      area,
      potential,
      activityInvolved,
      city,
    ] = await Promise.all([
      Supervisor.find(q),
      CompanyInvolved.find(q),
      Contractor.find(q),
      Area.find(q),
      Potential.find(q),
      ActivityInvolved.find(q),
      City.find(q),
    ]);

    res.status(200).send({ items:  {supervisor,
      companyObserved,
      contractor,
      area,
      potential,
      activityInvolved,
      city}, });
  };
  getAll = async (req: Request, res: Response) => {
    const q = { state: true };
    const results = await this.Model.find(q)
    .populate('activityInvolved')
    .populate('area')
    .populate('city')
    .populate('companyObserved')
    .populate('contractor')
    .populate('potential')
    .populate('supervisor')
    ;
    res.status(200).send({ items: results })
    
    ;
  };
  get = async (req: Request, res: Response) => {
    const { limit = 5, skip = 0, mean = "" } = req.query;
    const r = new RegExp(String(mean), "i");
    const q = { state: true };
    const total = await this.Model.countDocuments(q);
  
    const results = await this.Model.find(q)
    .populate('activityInvolved')
    .populate('area')
    .populate('city')
    .populate('companyObserved')
    .populate('contractor')
    .populate('potential')
    .populate('supervisor')
      .skip(Number(skip))
      .limit(Number(limit));
    res.status(200).send({ items: results, total });
  };
  update = async (req: Request, res: Response) => {
    const result = await this.Model.findByIdAndUpdate(
      req.params.id,
      {
        supervisor: req.body.supervisor,
        companyObserved: req.body.companyObserved,
        contractor: req.body.contractor,
        area: req.body.area,
        observation: req.body.observation,
        potential: req.body.potential,
        activityInvolved: req.body.activityInvolved,
        city: req.body.city,
        closingDate: req.body.closingDate,
        photoUnsafeCondition: req.body.photoUnsafeCondition,
        observations: req.body.observations,
      },
      { new: true }
    );
    res.status(200).send({ items: result });
  };

  getById = async (req: Request, res: Response) => {
    const result = await this.Model.findById(req.params.id);
    res.status(200).send({ items: result });
  };
  create = async (req: Request, res: Response) => {
    const newDoc = new this.Model({
      supervisor: req.body.supervisor,
      companyObserved: req.body.companyObserved,
      contractor: req.body.contractor,
      area: req.body.area,
      observation: req.body.observation,
      potential: req.body.potential,
      activityInvolved: req.body.activityInvolved,
      city: req.body.city,
      closingDate: req.body.closingDate,
      photoUnsafeCondition: req.body.photoUnsafeCondition,
      observations: req.body.observations,
      status:req.body.status,
    });
    const saved = await newDoc.save();
    res.status(200).send({ items: saved });
  };

  disable = async (req: Request, res: Response) => {
    const result = await this.Model.findByIdAndUpdate(
      req.params.id,
      { state: false },
      { new: true }
    );
    res.status(200).send({ items: result });
  };

  delete = async (req: Request, res: Response) => {
    const deleted = await this.Model.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ items: deleted });
  };
}
