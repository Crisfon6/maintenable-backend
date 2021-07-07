import { NextFunction ,Response ,Request} from "express";
import { verify } from 'jsonwebtoken';
import { IRequestUser } from "../interfaces/user.interface";



  export async  function authMiddleware(req:IRequestUser, res:Response, next:NextFunction){
    
    let jwtToken = req.header("Authorization");
    let key;
    if (process.env.SECRET_KEY != undefined) {
      key = process.env.SECRET_KEY;
    } else {
      key = "secret";
    }
    if (!jwtToken){

      return res.status(400).send("Autorizacion rechazada: No hay token");
    }
    
    try {
      const payload = verify(jwtToken, key);
      
      req.user = payload;
      next();
    } catch (e) {
      res.status(400).send("Autorizacion rechazada: Token Invalido");
    }

}