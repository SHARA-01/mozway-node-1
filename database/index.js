import mongoose from "mongoose";

const server =async()=> {
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("Database Atlas connection is successfully");
    }
    catch(error){
        console.log("database connection faild", error)
    }
}


export default server