import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import productRoute from './routes/product.route.js'

dotenv.config() 

const app = express();

app.use(express.json())
app.use("/api/products/", productRoute);


app.listen(5000, () => {
    connectDB();
    console.log("Server is running at port 5000")
})
