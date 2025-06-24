import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import Product from './models/product.model.js';
import mongoose from 'mongoose'
dotenv.config() 

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello node js")
})

app.post("/api/products", async(req, res) => {
    const product = req.body;

    if(!product.image || !product.price || !product.name)
    {
        return res.status(400).json({success: false, message: "You must be provide all field"})
    }

    const newProduct = Product(product)

    try {
        await newProduct.save();
        return res.status(200).json({success: true, message: "Create product successfully !", data: newProduct})
    }
    catch(e){
        console.log(`Server Error: ${e.message}`)
        return res.status(500).json({success: false, message: "Server Error"})
    }
})

app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({success: false, message: "Invalid product Id"})
    }

    try {
        await Product.findByIdAndDelete(id);
        return res.status(200).json({success: true, message: "Delete Successfully !"})
    }
    catch(e) {
        console.log(`Server Error: ${e.message}`)
        return res.status(500).json({success: false, message: "Server Error"})
    }
})


app.listen(5000, () => {
    connectDB();
    console.log("Server is running at port 5000")
})
