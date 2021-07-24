import { BaseController } from "./base.controller";
import Services from '../services/index.service';

const controllers = {
        UserController: new BaseController(Services.UserService),
};
export default controllers;