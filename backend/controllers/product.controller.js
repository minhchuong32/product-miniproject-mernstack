import Product from "../models/product.model.js";
import mongoose from "mongoose";

export async function getAllProducts(req, res) {
  try {
    const products = await Product.find({}); // empty object -> fetch all products

    res
      .status(200)
      .json({ success: true, message: "Get SuccessFull!", data: products });
  } catch (e) {
    console.log(`Server Error: ${e.message}`);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
}

export async function createProduct(req, res) {
  const product = req.body;

  if (!product.image || !product.price || !product.name) {
    return res
      .status(400)
      .json({ success: false, message: "You must be provide all field" });
  }

  const newProduct = Product(product);

  try {
    await newProduct.save();
    return res.status(200).json({
      success: true,
      message: "Create product successfully !",
      data: newProduct,
    });
  } catch (e) {
    console.log(`Server Error: ${e.message}`);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Product Id" });
  }

  try {
    const updateProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      message: "Update Successfully",
      data: updateProduct,
    });
  } catch (e) {
    console.log(`Server Error: ${e.message}`);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid product Id" });
  }

  try {
    await Product.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "Delete Successfully !" });
  } catch (e) {
    console.log(`Server Error: ${e.message}`);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
}
