import { Planet } from '../repository/interfaces/planet.interface';
import * as swapiRepository from '../repository/swapi.repository';

export const getPlanetById = async (id: string) => {
  const result = await swapiRepository.getPlanetById(id);
  let planet: Planet = {
    id: id,
    nombre: result.data.name,
    periodo_rotacion: result.data.rotation_period,
    periodo_orbita: result.data.orbital_period,
    diametro: result.data.diameter,
    clima: result.data.climate,
    gravedad: result.data.gravity,
    terreno: result.data.terrain,
    superficie_agua: result.data.surface_water,
    poblacion: result.data.population,
    url: result.data.url,
    f_creacion: result.data.created,
    f_edicion: result.data.edited,
  };
  return planet;
};
