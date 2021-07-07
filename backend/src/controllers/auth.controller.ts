import { Router, Request, Response } from "express";
import { IController } from "../interfaces/controller.interface";
import { compare } from "bcrypt";
import { User, IUser } from '../models/user.model';
import { authMiddleware } from "../middlewares/auth.middleware";
import { IRequestUser } from "../interfaces/user.interface";

export class AuthController implements IController {
  public path = "/auth";
  public router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes = () => {
    this.router
      .all(this.path)
      .post(this.path + "/login", this.login)
      .get(this.path + "/isAdmin", [authMiddleware], this.isAdmin);
  };
  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) return res.status(401).send({ msg: "Credenciales erroneas" });
    const valid = await compare(password, user.password);

    if (!valid) return res.status(401).send({ msg: "Credenciales erroneas" });
    
    
    const jwtToken = await user.generateJWT();
    res.status(200).send({
      token: jwtToken,
      
    });
  };
  isAdmin = async (req: IRequestUser, res: Response) => {
    
    const user = await User.findById(req.user._id) as IUser;
    
    if (user.role!=="ADMIN" ){
      return res.status(200).send(false);
    }
    res.status(200).send(true);
  };
}
