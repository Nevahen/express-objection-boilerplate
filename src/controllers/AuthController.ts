import { Request, Response } from 'express';
import { User } from 'models';

export class AuthController {

  public static authenticate = async (req: Request, res: Response) => {
    const { username, id } = req.user as User;
    res.json({ id, username, loggedIn: true });
  }

  public static checkLogin = async (req: Request, res: Response) => {
    res.send({
      loggedIn: req.user ? true : false,
    });
  }

  public static logout = async (req: Request, res: Response) => {
    req.logOut();
    res.send({ status: 'ok' });
  }

}