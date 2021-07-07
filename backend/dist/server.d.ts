import { IController } from "./interfaces/controller.interface";
export declare class Server {
    private app;
    private port;
    constructor(controllers: IController[]);
    connectDB: () => Promise<void>;
    middlewares: () => void;
    setupPublic: () => void;
    routes: (controllers: IController[]) => void;
    listen(): Promise<void>;
}
