import { Request, Response } from "express";
import * as planetService from "../service/planet.service";
import { Planet } from "../repository/interfaces/planet.interface";

export const getAll = async (req: Request, res: Response) => {
  try {
    const planets = await planetService.getAll();
    res.status(200).json({ planets });
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json({ error });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const planet = await planetService.getById(req.params.id);
    res.status(200).json({ planet });
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json({ error });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const planet = await planetService.create(req.body);
    res.status(200).json({ planet });
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json({ error });
  };
};