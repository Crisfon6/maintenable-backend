import { IRoute } from "../interfaces/route.interface";
import { router as UserRouter } from "./user.route";

 const routes:IRoute[] =[
    {path: "/user",router: UserRouter}
];
export {routes};