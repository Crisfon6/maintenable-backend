import Server from './server';
import ConnectDB from './db/db';
import dotenv from 'dotenv';
import { validEnv } from './utils/validEnv';
import routes from "./routes/index.routes"

dotenv.config();
validEnv();

const index = ()=>{
    const port = Number(process.env.PORT) || 3000;
    const mongoURI = process.env.MONGO_URI|| '';
    const server = new Server(routes,port);
    server.listen();
    ConnectDB(mongoURI);
}

index();