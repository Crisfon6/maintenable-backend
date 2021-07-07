import { Request, Response } from "express";
import multer from "multer";
import { IController } from "../interfaces/controller.interface";
export declare class UploadController implements IController {
    path: string;
    router: import("express-serve-static-core").Router;
    storage: multer.StorageEngine;
    upload: multer.Multer;
    constructor();
    initRoutes: () => void;
    sendFile: (req: Request, res: Response) => void;
}
