import { Router } from 'express';
import planetRoutes from './planet.routes';
import swapiRoutes from './swapi.routes';
import dashboardRoutes from './dashboard.routes';

const router = Router();

router.use('/planet', planetRoutes);
router.use('/swapi', swapiRoutes);
router.use('/dashboard', dashboardRoutes);

export default router;
