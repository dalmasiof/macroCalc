import { Goal } from "../DTOs/GoalEnumerator";
import { MacrosDto } from "../DTOs/MacrosDto";

export class MacrosService {
  public generateMacros(weight: number, goal: Goal) {
    switch (goal as Goal) {
      case Goal.Maintenance:
        return this.getMacrosMaintenance(weight);

      case Goal.Bulking:
        return this.getMacrosBulking(weight);

      case Goal.Cutting:
        return this.getMacrosCutting(weight);

      default:
        return null;
    }
  }

  private getMacrosMaintenance(weight: number): MacrosDto {
    let macrosDto: MacrosDto = {
      carbs: 4,
      fat: weight * 1,
      protein: weight * 2,
    };

    return macrosDto;
  }

  private getMacrosBulking(weight: number): MacrosDto {
    let macrosDto: MacrosDto = {
      carbs: 5.5,
      fat: weight * 1.2,
      protein: weight * 2,
    };

    return macrosDto;

  }

  private getMacrosCutting(weight: number): MacrosDto {
    let macrosDto: MacrosDto = {
      carbs: 2.2,
      fat: weight * 1.2,
      protein: weight * 2.2,
    };

    return macrosDto;
  }
}
