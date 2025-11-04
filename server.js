import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import homeRoutes from "./routes/homeRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB Error:", err));

app.use("/api/home", homeRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => res.send("Portfolio API Running..."));

app.listen(5000);
