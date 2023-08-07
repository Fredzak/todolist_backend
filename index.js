const express = require("express");
require("./config/db")
const app = express()
const userRoutes = require("./routes/useRoutes");
app.use(express.json());
const cors = require("cors");

app.use(cors())

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res)=>{
    res.send("App is Running ...")
})


app.use("/",userRoutes)
app.listen(4000, (()=>{
    console.log("App is running on port 4000")
}))


