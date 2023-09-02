
import { Request, Response } from "express";
import * as exampleService from "../service/example.service";

export const hello = (req: Request, res: Response) => {
  const result = exampleService.hello(req.params.name);
  res.json(result);
};
