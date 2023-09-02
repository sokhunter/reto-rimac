import { Router } from 'express';
import planetRoutes from './planet.routes';
import swapiRoutes from './swapi.routes';

const router = Router();

router.use('/planet', planetRoutes);
router.use('/swapi', swapiRoutes);

export default router;
