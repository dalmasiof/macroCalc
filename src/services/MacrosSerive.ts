import { Goal } from "../DTOs/GoalEnumerator";
import { MacrosDto } from "../DTOs/MacrosDto";

export class MacrosService{
    public generateMacros(weight:number, goal:Goal){
        switch(goal){
            case Goal.Maintenance:
            return this.getMacrosMaintenance(weight);

            case Goal.Bulking:
            return this.getMacrosBulking(weight);

            case Goal.Cutting:
            return this.getMacrosCutting(weight);
        }
    }

    private getMacrosMaintenance (weight:number):MacrosDto{
        
    }

    private getMacrosBulking(weight:number):MacrosDto{
        
    }

    private getMacrosCutting(weight:number):MacrosDto{
        
    }
}