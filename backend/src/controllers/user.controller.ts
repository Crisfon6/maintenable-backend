import { IController } from "../interfaces/controller.interface";
import { Router, Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import { authMiddleware } from "../middlewares/auth.middleware";
import { body } from "express-validator";
import { validatePlacesMiddleware } from "../middlewares/validatePlaces.middleware";

export class UserController implements IController {
  public path = "/user";
  public router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes = () => {
    this.router
      .all(this.path, )//authMiddleware
      .get(this.path+'/id/:id', this.getById)
      .get(this.path, this.getUsers)
      .put(this.path+'/update/:id',this.update)
      .delete(this.path+'/delete/:id',this.delete)
      .post(
        this.path,
        [
          body("username").not().isEmpty().isString(),
          body("password").not().isEmpty().isString(),
          body("role").isIn(["ADMIN","NORMAL"]),
                   validatePlacesMiddleware,
        ],
        this.createUser
      );
  };

  update = async(req:Request,res:Response)=>{
    const updated = await User.findByIdAndUpdate(req.params.id,{
      username:req.body.username,
      password:req.body.password
    },{new:true});
    res.status(200).send({
      items: updated
    });
  }
  delete = async(req:Request,res:Response)=>{
    const deleted  = await User.findByIdAndUpdate(req.params.id,{state:false},{new:true})
    return res.status(200).send({items: deleted});
  }
  getUsers = async (req: Request, res: Response) => {
    const { limit = 5, skip = 0, mean = "" } = req.query;
    const cMean = String(mean);
    const r = new RegExp(cMean, "i");
    const q = { state: true };
    const total = await User.countDocuments(q);
    const users = await User.find({
      $or: [{ username: r }],
      $and: [{ state: true }],
    })     
    .skip(Number(skip)).limit(Number(limit));

    res.status(200).send({ items: users, total });
  };
  getById= async (req:Request,res:Response)=>{
    const id = req.params['id'];

    const user = await User.findById(id);
    res.status(200).send({
      user
    });
  }
  createUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    let user = await User.findOne({ username });    
    if (user) return res.status(400).send("El usuario ya existe");
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user = new User({
      username,
      password: hash,
      role:req.body.role,
    });

    const result = await user.save();
    if (result) {      
      res.status(200).send({ msg:'ok' });
    } else {
      return res.status(400).send("Error registrando el usuario");
    }
  };
}
