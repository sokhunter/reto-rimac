import { Router } from "express";
import * as swapiController from '../controller/swapi.controller';

const routes = Router()

routes.get('/planet/:id', swapiController.getPlanetById)

export default routes;