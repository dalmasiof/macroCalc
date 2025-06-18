export class MacrosDto {
  protein: number;
  fat: number;
  carbs: number;
  calories: number;

  constructor(protein: number, carbs: number, fat: number, calories: number) {
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
    this.calories = calories;
  }
}
