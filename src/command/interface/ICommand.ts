export interface ICommand {
  execute: (number: number) => number;
  undo: (number: number) => number;
}
