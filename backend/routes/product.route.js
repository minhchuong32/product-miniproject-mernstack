import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const productRoute = express.Router();

productRoute.get("/", getAllProducts);

productRoute.post("/", createProduct);

productRoute.delete("/:id", deleteProduct);

productRoute.put("/:id", updateProduct);

export default productRoute;
