import { Request, Response, NextFunction } from "express";
import { userRegister, userLogin } from "../services/main.service";

class MainController {
  async userRegister(req: Request, res: Response, next: NextFunction) {
    return userRegister(req, res, next);
  }
  async userLogin(req: Request, res: Response, next: NextFunction) {
    return userLogin(req, res, next);
  }
}

export default new MainController();
