import { Router } from "express";
import identityController from "../controller/identityController";

class identityRoute {
  public route: Router;
  constructor() {
    this.route = Router();
    this.routes();
  }

  routes(): void {
    this.route.get("/", identityController.index);
  }
}

export default new identityRoute().route;
