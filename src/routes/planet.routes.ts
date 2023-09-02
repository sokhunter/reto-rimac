import { Router } from "express";
import * as planetController from '../controller/planet.controller';

const routes = Router()

routes.get('/', planetController.getAll)
routes.post('/', planetController.create)
routes.get('/:id', planetController.getById)

export default routes;