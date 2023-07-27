const express = require("express");
const AppRouter = require("./Routes/AppRoutes");
const mongoose = require("mongoose");
const app = express();

app.use("/", AppRouter)

const PORT = 3060;
const MONGO_DB_URI = "mongodb://127.0.0.1:27017/moivesdb";
mongoose.connect(MONGO_DB_URI).then(()=>{
    console.log("DB Connection successfull")
    app.listen(PORT, ()=>{
        console.log(`Server is runnig on port ${PORT}`);
    })
}).catch((error)=>{
    console.log(error)
})
