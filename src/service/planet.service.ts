import { Planet } from '../repository/interfaces/planet.interface';
import * as planetRepository from '../repository/planet.repository';

export const getAll = async () => {
  const planets = await planetRepository.getAll();

  return planets;
};

export const getById = async (id: string) => {
  const planet = await planetRepository.getById(id);
  if (planet.length === 0) {
    throw 'Planet not found';
  }
  return planet[0];
};

export const create = async (body: Planet) => {
  if (
    !body.hasOwnProperty('nombre') ||
    !body.hasOwnProperty('url') ||
    body.nombre == '' ||
    body.url == ''
  ) {
    throw 'Planet not created: Missing data';
  }
  body.f_creacion = body.hasOwnProperty('f_creacion')  ? body.f_creacion : (new Date()).toISOString();
  console.debug("body.f_creacion", body.f_creacion);
  body.f_edicion = body.hasOwnProperty('f_edicion')  ? body.f_edicion : (new Date()).toISOString();
  const result = await planetRepository.create(body);
  if (result.affectedRows === 0) {
    throw 'Planet not created';
  }
  body.id = result.insertId;
  return body;
};