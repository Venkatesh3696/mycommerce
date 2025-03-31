import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// app.use(express.static("public"));

// routes

import userRoutes from "./routes/user.route.js";
import productRoutes from "./routes/product.route.js";
// import orderRoutes from "./routes/order.route.js";

app.use("/api/users", userRoutes);

app.use("api/products", productRoutes);

const port = process.env.PORT || 5000;
connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error: ", error);
    process.exit(1); // Exit the process with failure
  });

// MongoDB connection
