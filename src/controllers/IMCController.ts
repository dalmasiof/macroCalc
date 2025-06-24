import { Request, Response } from 'express';
import { IMCService } from '../services/IMCServices';

export class IMCController {
  
  calculate = (req: Request, res: Response) => {
    const { weight, height } = req.body;

    if (!weight || !height) {
       res.status(400).json({ error: 'Weight and height are required.' });
    }

    const imc = weight / (height * height);

    let imcService = new IMCService();

    res.status(200).json({
      imc: imc.toFixed(2),
      classification: imcService.classifyIMC(imc),
    });
  }
}