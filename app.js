import express from "express";
import cors from "cors";
import { path } from "path";
const PORT = 5000;
const app = express();

app.use(express.static(path.join(__dirname(), "/frontend/build")));
app.use(cors());

app.get("/name", (req, res) => {
  res.send("abdo");
});

app.listen(PORT, () => console.log("server run on port", PORT));
