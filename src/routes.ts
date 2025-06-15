import { Router } from 'express';
import imcRoutes from './routes/imc.routes';
import macroRoutes from './routes/macros.routes';

const routes = Router();

routes.use('/imc', imcRoutes);
routes.use('/macros', macroRoutes);

export default routes;