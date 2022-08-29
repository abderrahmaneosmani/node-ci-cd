import express from "express";
import cors from "cors";
const PORT = 5000;
const app = express();

app.use(cors());

app.get("/name", (req, res) => {
  res.send("abdo");
});

app.listen(PORT, () => console.log("server run on port", PORT));
