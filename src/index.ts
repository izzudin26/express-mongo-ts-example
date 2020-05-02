import express, { Application } from "express";
import mongoose from "mongoose";
import identityRoute from "./route/identityRoute";
require("./connection");
const port = 8080;

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.route();
  }

  route(): void {
    this.app.use("/identity", identityRoute);
  }
}

const app = new App().app;
app.listen(port, () => console.log(`running on http://localhost:${port}`));
