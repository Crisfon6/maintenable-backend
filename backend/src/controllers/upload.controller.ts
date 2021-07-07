import { Request, Response, Router } from "express";



import { param } from "express-validator";
import multer from "multer";
import { validatePlacesMiddleware } from "../middlewares/validatePlaces.middleware";
import path from "path";
import moment from "moment";
import fs from "fs";
import { IController } from "../interfaces/controller.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleValidatorMiddleware } from "../middlewares/role.middleware";

export class UploadController implements IController { 
    path = "/uploads";
    router = Router();
    storage = multer.diskStorage({
      destination: (req: any, file: any, cb: any) => {
        if (file.mimetype.endsWith("pdf")) {
          cb(null, path.join("./uploads/pdf/"));
        } else if (file.mimetype.startsWith("image")) {
          cb(null, path.join("./uploads/img/"));
        }
      },
  
      filename: async (req: any, file, cb: any) => {
  
        if (!file) {
          return cb(null, false);
        }
        let filename = moment().unix() + path.extname(file.originalname);
  
        cb(null, filename);
      },
    });
    upload = multer({
      storage: this.storage,
      fileFilter: async (req: any, file: any, cb: any) => {
  
        if (!file.mimetype) {
          req.errorsFile = "Archivo no permitido";
          return cb(null, false);
        }
        if (
          !file.mimetype.startsWith("image") &&
          !file.mimetype.endsWith("pdf")
        ) {
          req.errorsFile = "Archivo no permitido";
          return cb(null, false);
        }
        return cb(null, true);
      },
    });
    constructor() {
      this.initRoutes();
    }
    initRoutes = () => {
      this.router
        .all(this.path, [
          authMiddleware,
          roleValidatorMiddleware("ADMIN",),
          param("type").isIn(["img", "pdf"]),
          validatePlacesMiddleware,
        ])
        .post(
          this.path + "/:type",
          this.upload.single("file"),
  
          async (req: any, res: Response) => {
            const file = req.file;
  
            if (req.errorsFile)
              return res.status(401).send({ msg: "Archivo no permitido" });
            const url =
              req.protocol +
              "://" +
              req.get("host") +
              "/api/uploads/" +
              `${req.params.type}/` +
              file.filename;
  
            res.send({ msg: url });
          }
        )
        .put(
          this.path + "/update/:type/:old",
          this.upload.single("file"),
  
          async (req: any, res: Response) => {
            const file = req.file;
  
            if (req.errorsFile)
              return res.status(401).send({ msg: "Archivo no permitido" });
            const url =
              req.protocol +
              "://" +
              req.get("host") +
              "/api/uploads/" +
              `${req.params.type}/` +
              file.filename;
            const urlOld = "./uploads/" + req.params.type + `/${req.params.old}`;
            fs.unlinkSync(urlOld);
            res.send({ msg: url });
          }
        )
  
        .get(this.path + "/:type/:name", this.sendFile);
    };
    sendFile = (req: Request, res: Response) => {
      const url = path.join(
        __dirname,
        "../../",
        "./uploads",
        req.params.type,
        req.params.name
      );
      res.status(200).sendFile(url);
    };
  

}

  