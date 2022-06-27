// COMMAND Pattern
import { AddCommand, Calculator } from "./command/Calculator";

const calculator = new Calculator();
const addCommand = new AddCommand(6);

calculator.calculate(addCommand);

console.log(calculator.initialValue);
console.log(calculator.history);

calculator.undo();

console.log(calculator.initialValue);
console.log(calculator.history);
