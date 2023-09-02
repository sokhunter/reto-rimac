import { Router } from "express";
import * as exampleController from '../controller/example.controller';

const routes = Router()

routes.get('/hello/:name', exampleController.hello)

export default routes;