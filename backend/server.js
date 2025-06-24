import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'

dotenv.config() 

const app = express();

console.log(process.env.MONGO_URI)

app.get("/", (req, res) => {
    res.send("Hello node js")
})
app.listen(5000, () => {
    connectDB();
    console.log("Server is running at port 5000")
})
