import { Router } from "express";
import * as planetController from '../controller/planet.controller';

const routes = Router()

routes.get('/', planetController.getAll)

export default routes;