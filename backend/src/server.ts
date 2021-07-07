import express, { Application,Request,Response } from "express";
import cors from "cors";
import { connect } from "mongoose";
import path from "path";
import morgan from "morgan";


import { IController } from "./interfaces/controller.interface";
import { errorMiddleware } from "./middlewares/error.middleware";


export class Server {
  private app: Application;
  private port: String;

  constructor(controllers: IController[]) {
    this.app = express();
    this.port = process.env.PORT || "8080";
   this.connectDB();
    this.middlewares();
    this.setupPublic();
    this.routes(controllers);  
  }
  connectDB = async () => {
    const uriDB = process.env.MONGO_URI || "";

    await connect(
      uriDB,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
      },
      (err) => {
        if (err) {
          console.log("Error Connecting to the Database",err);
        } else {
          console.log("Connect to the database");
        }
      }
    );
  };
  middlewares = () => {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(errorMiddleware);
  };
  // let routerTemp :Router = controller.router;
  setupPublic=() =>{
    this.app.use(express.static('public'))
  }
  routes = (controllers: IController[]) => {  
  
    controllers.forEach((controller: IController) => {     
      const routerTemp = controller.router;
      this.app.use('/api/', routerTemp);
    });
    this.app.use('*',(req:Request, res:Response)=>{
      res.sendFile(path.resolve('public/index.html'));
    });
  };
   async listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  };
}


