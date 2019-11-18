export interface IReader<T> {
  filename: string;
  data: T[];
  read(): void;
}
