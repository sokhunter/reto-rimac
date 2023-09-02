import { execute } from '../utils/mysql.connector';
import { Planet } from './interfaces/planet.interface';

export const getAll = async () => {
  return execute<Planet[]>('SELECT * from planetas', []);
};