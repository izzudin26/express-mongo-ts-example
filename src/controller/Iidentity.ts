import { Request, Response } from "express";

interface IIdentityController {
  index(req: Request, res: Response): Promise<Response>;
  get(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Response;
  destroy(req: Request, res: Response): Response;
}

export default IIdentityController;
