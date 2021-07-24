import { BaseService } from './base.service';
import { UserRepository } from '../repository/user.repository';

export class UserService  extends BaseService{
    constructor(){
        super(UserRepository);
    }
 }