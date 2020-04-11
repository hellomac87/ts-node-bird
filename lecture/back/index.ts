import * as express from "express";

const app = express();
const prod = process.env.NODE_ENV === "production";

app.get("/", (req, res) => {
  res.send("react node-bird 백엔드 정상 동작!");
});

app.listen(prod ? process.env.PORT : 3065, () => {
  console.log("express listening port on");
});
