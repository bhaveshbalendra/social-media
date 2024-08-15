import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config({});
const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Backend Response");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening at port ${PORT}`);
});
