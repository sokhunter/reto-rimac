import * as planetRepository from '../repository/planet.repository';

export const getAll = async () => {
    const planets = await planetRepository.getAll();

    return planets;
};