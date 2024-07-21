import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: "./config/.env"
});

connectDB()
.then(() => {
    app.listen(process.env.PORT , () => {
        console.log(`Server is UP and RUNNING on PORT:${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Mongo db connection error : ",error);
    throw error;
})
// import express from "express";

// const app = express()

// (async () =>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Server is FACING ERROR");
//             throw error
//         })
//         app.on("listening",()=>{
//             console.log("Server is UP and RUNNING on PORT ${process.env.PORT}")
//         })
//     }catch (error) {
//         console.log("Error : ",error)
//         throw error;
//     }
// })()