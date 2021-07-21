import {port,str,cleanEnv} from "envalid";//TODO: INSTALL ENVALID

export const validEnv = ()=>{    
    cleanEnv(
        process.env,{
            PORT: port(),
            MONGO_URI:str(),
        }
    )
}
