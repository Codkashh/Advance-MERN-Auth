import express from "express";
import { connectDB } from "./db/connectDB.js"
import dotenv from "dotenv";
import  authRoutes from "./routes/auth.route.js"


const app = express();
dotenv.config();

app.use("/api/auth", authRoutes)

app.get("/", function(req, res){
    res.send("sir ji");
});

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port 3000")
});
