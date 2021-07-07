import { NextFunction,Response } from "express";
import {  IRequestUser } from "../interfaces/user.interface";
import { IUser, User } from "../models/user.model";

export const  roleValidatorMiddleware = (...roles: string[]) => {
    return async (req: IRequestUser, res: Response, next: NextFunction) => {
      if (!req.user)
        return res
          .status(401)
          .json({ msg: "Necesitas validar primero el token" });

      const user = (await User.findById(req.user._id).populate(
        "role"
      )) as IUser;
      user.password = "";
      if (!roles.includes(user.role)) {
        req.user = user;
        next();
      } else {
        return res
          .status(401)
          .send({ msg: "Tu usuario no puede realizar esta tarea" });
      }
    };
  };