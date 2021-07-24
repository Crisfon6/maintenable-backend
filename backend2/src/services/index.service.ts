import { UserRepository } from "../repository/user.repository";
import { BaseService } from "./base.service";

const services = {
    UserService: new BaseService(UserRepository)
    
};
export default services;