import { Router } from 'express';
import imcRoutes from './routes/imc.routes';

const routes = Router();

routes.use('/imc', imcRoutes);


export default routes;