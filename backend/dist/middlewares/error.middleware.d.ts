import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/HttpException";
export declare const errorMiddleware: (error: HttpException, req: Request, res: Response, next: NextFunction) => void;
