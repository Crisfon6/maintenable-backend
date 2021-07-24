
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import {Router,Request, Response} from 'express';


const router = Router();
const controller = new UserController(UserService);

router.post('/',(req:Request, res:Response )=> controller.create(req, res,{username:req.body.username}));
router.post('/getAll',controller.getAll);
router.post('/getAllRegex',controller.getAllRegex);
router.post('/getOneRegex',controller.getOneRegex);
router.post('/getOne',controller.getOne);

router.put('/',controller.update);
router.put('/:id',controller.disableEnable);

router.delete('/:id',controller.remove);

export {router};