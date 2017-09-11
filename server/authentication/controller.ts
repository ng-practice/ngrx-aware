import { Router, Request, Response } from 'express';
import jwt = require('jsonwebtoken');

export class Authentication {
  options = { algorithm: 'HS256', expiresIn: '3 days' };

  constructor(private secret: string, public routes = Router()) {
    this.routes.post('/login', this.login);
  }

  login = ({ body: candidate }: Request, res: Response) => {
    if (candidate.userName === 'john' && candidate.password === '1234') {
      res.status(200).json(this.token(candidate.userName));
    } else {
      res.status(403).send();
    }
  }

  private token(userName: string) {
    return jwt.sign(
      this.createPayload(userName),
      this.secret,
      this.options
    );
  }

  private createPayload(userName: string) {
    return {
      userName,
      role: 'member'
    };
  }
}
