import express from "express";
import { fileURLToPath } from "url";

import cors from "cors";
import path from "path";

import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);

const PORT = 5000;
const app = express();

app.use(express.static("/home/avatar/tuto/gita/frontend/build"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello application");
});
app.get("/name", (req, res) => {
  res.send("abdo");
});

app.listen(PORT, () => console.log("server run on port", PORT));
