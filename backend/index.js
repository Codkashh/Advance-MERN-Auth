import express from "express";
import { connectDB } from "./db/connectDB.js"
import dotenv from "dotenv";
import  authRoutes from "./routes/auth.route.js"


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes)
app.use(express.json());// this will allow us to parse incoming request from re.body
app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port: ", PORT);
});
