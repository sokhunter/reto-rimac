import { execute } from '../utils/mysql.connector';
import { Planet } from './interfaces/planet.interface';

export const getAll = async () => {
  return execute<Planet[]>('SELECT * from planetas', []);
};
export const getById = async (id:Planet['id']) => {
  return execute<Planet[]>('SELECT * from planetas where id = ?', [id]);
}