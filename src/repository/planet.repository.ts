import { execute } from '../utils/mysql.connector';
import { Planet } from './interfaces/planet.interface';

export const getAll = async () => {
  return execute<Planet[]>('SELECT * from planetas', []);
};

export const getById = async (id: Planet['id']) => {
  return execute<Planet[]>('SELECT * from planetas where id = ?', [id]);
};

export const create = async (planet: Planet) => {
  const result = await execute<{ affectedRows: number, insertId: string }>('INSERT INTO planetas(nombre, periodo_rotacion, periodo_orbita, diametro, clima, gravedad, terreno, superficie_agua, poblacion, url, f_creacion, f_edicion, swapi_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
    planet.nombre,
    planet.periodo_rotacion,
    planet.periodo_orbita,
    planet.diametro,
    planet.clima,
    planet.gravedad,
    planet.terreno,
    planet.superficie_agua,
    planet.poblacion,
    planet.url,
    planet.f_creacion,
    planet.f_edicion,
    planet.swapi_id != null ? planet.swapi_id : '',

  ]);
  return result;
};