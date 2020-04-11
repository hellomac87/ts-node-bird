import * as express from "express";
import { Request, Response, NextFunction, Application } from "express";
const app: Application = express();
const prod: boolean = process.env.NODE_ENV === "production";

app.set("port", prod ? process.env.PORT : 3065);
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("react node-bird 백엔드 정상 동작!");
});

app.listen(app.get("port"), () => {
  console.log(`express listening port on ${app.get("port")}`);
});
