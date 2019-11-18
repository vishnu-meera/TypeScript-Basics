import { IReport } from "../interface";

export class ConsoleReport implements IReport {
  print(report: string): void {
    console.log(report);
  }
}
