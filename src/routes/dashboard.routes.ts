import { Router } from "express";
import * as dashboardController from '../controller/dashboard.controller';

const routes = Router()

routes.get('/create-from-swapi/:id', dashboardController.createFromSwapi)

export default routes;