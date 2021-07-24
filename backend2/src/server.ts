import express,{ Application} from "express";
import cors from "cors";
import morgan from "morgan";
import { IRoute } from "./interfaces/route.interface";
export default class Server{
    private app:Application;
    private port:number;
    constructor(routes:IRoute[],port:number){
        this.app = express();
        this.middlewares();
        this.router(routes);
        this.port =port;
    }
   private middlewares = ()=>{
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.static("public"));
    }
    private router = (routes:IRoute[])=>{
        
    routes.forEach((route:IRoute)=>{
        
        this.app.use(`/api${route.path}`,route.router)
    });
    }
    public listen = ()=>{
        this.app.listen(this.port,()=>{
            console.log("Server Running on Port: ",this.port);
        });
    }
}

