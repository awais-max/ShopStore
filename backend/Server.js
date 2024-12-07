import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import productRoute from "../backend/routes/productRoute.js";
import userRoute from "../backend/routes/userRoutes.js";
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser Middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Api is  properly running....");
});
app.use("/api/products", productRoute);
app.use("/api/user", userRoute);
app.listen(port, () => console.log(`Server running on ${port}`));
