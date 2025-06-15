export class IMCService {
  classifyIMC(imc: number) {
    if (imc < 18.5) return "Underweight";
    if (imc < 24.9) return "Normal weight";
    if (imc < 29.9) return "Overweight";
    return "Obesity";
  }
}
