if (!process.env.ALREADY_SET) {
  require("dotenv").config();
}

import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import * as http from "http";
import { app } from "./app";
import { Logger } from "./lib/logger";
import dataSourceConfig from "../ormconfig";

// Composition root

const logger: any = new Logger();

const server = http
  .createServer(app)
  .listen(parseInt(process.env.PORT || "3000", 10));
server.on("listening", async () => {
  logger.log(
    "info",
    `Sample app listening on ${JSON.stringify(server.address())}`
  );
});

const APP_DATA_SOURCE = new DataSource(dataSourceConfig as DataSourceOptions);

APP_DATA_SOURCE.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
