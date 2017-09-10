import { Router, Request, Response } from 'express';

export class Notes {
  constructor(public routes = Router()) {
    this.routes.get('/all', this.all);
  }

  all = (req: Request, res: Response) => {
    res.status(200).send([]);
  }
}
