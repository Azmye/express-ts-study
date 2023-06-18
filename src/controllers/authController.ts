import { Request, Response } from 'express';
import Authentication from '../utils/authentication';
import { NextFunction } from 'express-serve-static-core';
const db = require('../db/models');

class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    let { username, password } = req.body;

    const hashedPassword: string = await Authentication.passwordHash(password);

    await db.user.create({
      username,
      password: hashedPassword,
    });

    return res.status(200).send('Register Successfully!');
  }
  async login(req: Request, res: Response): Promise<Response> {
    // search user by username
    let { username, password } = req.body;
    const user = await db.user.findOne({
      where: { username },
    });

    if (!user) {
      return res.send('User not found!');
    }

    // check user password
    let checkPassword = await Authentication.passwordCheck(password, user.password);

    if (!checkPassword) {
      return res.send('Wrong password!');
    }

    // generate token
    if (checkPassword) {
      let token = Authentication.generateToken({ id: user.id, username });
      return res.send({ token });
    }

    return res.send('Authentication failed!');
  }

  profile(req: Request, res: Response): Response {
    return res.send('profile endpoint');
  }
}

export default new AuthController();
