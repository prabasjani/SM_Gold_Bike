import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";

// Local Imports
import { connDB } from "./utils/connectDB.js";
import { AuthRouter } from "./routes/auth.routes.js";
import { CustomerRouter } from "./routes/customer.routes.js";

configDotenv();

const app = express();
const PORT = process.env.PORT || 5002;

// Middlewares are using to get data from client
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Main Routes
app.use("/api/auth", AuthRouter);
app.use("/api/gold", CustomerRouter);
// app.use("/api/bike");

// First connect the Database then Server Run
connDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
  });
});
