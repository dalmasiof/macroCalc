
import { Request, Response } from 'express';
import { MacrosService } from '../services/MacrosSerive';
import { MeasurementsDto } from '../DTOs/MeasurementsDto';

export class MacrosController{
    generateMacros = (req: Request, res: Response) =>  {
        const dto: MeasurementsDto = req.body;

        let macrosService = new MacrosService();
        let result = macrosService.generateMacros(dto.Weigth, dto.Goal);

        if(result == null){
            res.status(503).json("Goal undefined")
        }
        else{
            res.status(200).json(result);
        }

    }

}