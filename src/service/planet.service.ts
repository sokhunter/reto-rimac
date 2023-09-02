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