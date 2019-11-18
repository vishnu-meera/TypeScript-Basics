export interface IReader {
  data: string[][];
  read(): void;
}

export interface IAnalyser<T> {
  run(data: T[]): string;
}

export interface IReport {
  print(report: string): void;
}
