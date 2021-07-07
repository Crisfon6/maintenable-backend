import { NextFunction, Request,Response } from "express";
import { validationResult } from "express-validator";

export const validatePlacesMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({
            msg: errors.array()
        });

    }
    next();
}