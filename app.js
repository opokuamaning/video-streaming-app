const express = require("express");
const AppRouter = require("./Routes/AppRoutes");
const app = express();

app.use("/", AppRouter)

const PORT = 3060;
app.listen(PORT, ()=>{
    console.log(`Server is runnig on port ${PORT}`);
})