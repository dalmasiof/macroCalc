import { Router } from "express";
import { MacrosController } from "../controllers/MacroController";

const macroRoutes = Router();
const macroCtrl = new MacrosController();

macroRoutes.post("/", macroCtrl.generateMacros);

export default macroRoutes;
