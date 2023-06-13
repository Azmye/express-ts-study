import { Request, Response } from 'express';
import IController from './controllerInterface';

class AuthController {
  register(req: Request, res: Response): Response {
    return res.send('');
  }
  login(req: Request, res: Response): Response {
    return res.send('');
  }
}

export default new AuthController();
