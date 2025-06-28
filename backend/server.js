import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import productRoute from "./routes/product.route.js";
import path from "path";

dotenv.config();

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/products/", productRoute);

// Serve static files from the React app
const frontendDistPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendDistPath));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(frontendDistPath, "index.html"));
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running at port " + PORT);
});
