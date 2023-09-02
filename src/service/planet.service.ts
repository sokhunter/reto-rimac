import { Planet } from '../repository/interfaces/planet.interface';
import * as planetRepository from '../repository/planet.repository';

export const getAll = async () => {
  const planets = await planetRepository.getAll();

  return planets;
};

export const getById = async (id: string) => {
  const planet = await planetRepository.getById(id);
  if(planet.length === 0) {
    throw 'Planet not found';
  }
  return planet[0];
};

export const create = async (body:Planet) => {
  const result = await planetRepository.create(body);
  if(result.affectedRows === 0) {
    throw 'Planet not created';
  }
  body.id = result.insertId;
  return body;
};