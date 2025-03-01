// const params = require("strong-params");
import bodyParser from "body-parser";
import express, { Request, Response, NextFunction } from "express";
import {
  NOT_FOUND_STATUS_CODE,
  NOT_FOUND_STATUS_MESSAGE,
} from "./config/constants";
import { Logger } from "./lib/logger";
import { routes as apiRoutes } from "./routes/index";
import { middlewares } from "./app/middlewares/error.handler"
const app = express();
const logger = new Logger();

app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
// app.use(params.expressMiddleware());
app.use(logger.getRequestLogger());

app.use("/api", apiRoutes);
app.get("/health", (req: Request, res: Response) =>
  res.json({ status: true, message: "Health OK!" })
);

app.use(logger.getRequestErrorLogger());

app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new Error(NOT_FOUND_STATUS_MESSAGE);
  res.statusCode = NOT_FOUND_STATUS_CODE;
  res.send(err.message);
});

app.use(middlewares.handleRequestError);

export { app };
