import axios from 'axios';
import { SWAPI } from '../config/vars.config';
import { Planet } from './interfaces/planet.interface';

export const getPlanetById = async (id: Planet['swapi_id']) => {
  return axios.get(`${SWAPI.url}planets/${id}`);
}