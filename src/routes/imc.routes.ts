import { request, response, Router } from 'express';
import { IMCController } from '../controllers/IMCController';

const imcRoutes = Router();
const imcController = new IMCController();

imcRoutes.post('/', imcController.calculate);

export default imcRoutes;
