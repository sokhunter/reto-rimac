import { Request, Response } from "express";
import * as swapiService from "../service/swapi.service";
import { Planet } from "../repository/interfaces/planet.interface";


export const getPlanetById = async (req: Request, res: Response) => {
  try {
    const planet = await swapiService.getPlanetById(req.params.id);
    res.status(200).json({ planet });
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json({ error });
  }
};
