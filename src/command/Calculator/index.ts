import { ICommand } from "../interface/ICommand";

export class Calculator {
  public history: ICommand[] = [];

  constructor(public initialValue: number = 0) {
    this.initialValue = initialValue;
  }

  calculate(command: ICommand) {
    this.initialValue = command.execute(this.initialValue);
    this.history.push(command);
  }

  undo() {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      this.initialValue = lastCommand.undo(this.initialValue);
    }
  }
}

export class AddCommand implements ICommand {
  constructor(public initialValue: number) {
    this.initialValue = initialValue;
  }

  execute(currentValue: number) {
    return this.initialValue + currentValue;
  }

  undo(currentValue: number) {
    return this.initialValue - currentValue;
  }
}
