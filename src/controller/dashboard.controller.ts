import { Request, Response } from "express";
import * as swapiService from "../service/swapi.service";
import * as planetService from "../service/planet.service";

export const createFromSwapi = async (req: Request, res: Response) => {
  try {
    let planetSwapi = await swapiService.getPlanetById(req.params.id);
    planetSwapi.swapi_id = planetSwapi.id;
    const planet = await planetService.create(planetSwapi);
    res.status(200).json({ planet });
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json({ error });
  };
};