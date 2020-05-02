import { Request, Response } from "express";
import IController from "./Iidentity";
import identity from "../models/identityModel";

class IdentityController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      let data = await identity.find({});
      return res.send(data);
    } catch (error) {
      return res.send({ message: error });
    }
  }
  async get(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  update(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
  destroy(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
}

export default new IdentityController();
