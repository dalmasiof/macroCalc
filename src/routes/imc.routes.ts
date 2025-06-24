import { request, response, Router } from 'express';
import { IMCController } from '../controllers/IMCController';

const imcRoutes = Router();
const imcController = new IMCController();

imcRoutes.post('/calculate', imcController.calculate);
imcRoutes.post('/teste', imcController.teste);

export default imcRoutes;
