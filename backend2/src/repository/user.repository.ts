import { User } from "../models/user.model";
import { BaseRepository } from "./base.respository";

export class UserRepository extends BaseRepository {
constructor(){
    super(User);
}
}