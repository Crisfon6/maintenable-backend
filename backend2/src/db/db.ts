import mongoose from "mongoose";

const ConnectDB = async (uriDB:string)=>{
    try {
        await mongoose.connect(uriDB,{
            useNewUrlParser:true, useCreateIndex:true,
            useFindAndModify:false,useUnifiedTopology:true,
        });
        console.log("Connected to the DB")   ;
    } catch (error) {
        console.error("Error Connecting with the DB",error);
        process.exit(0);
    }
};
export default ConnectDB;

