import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import addroute from "./routes/todoroute.js";

Connection();

const app = express();

dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Todo list");
});

app.use("/", addroute);

const PORT = process.env.PORT;

app.listen(PORT, (res) => {
  console.log(`server is running on http://localhost:${PORT}`);
});
