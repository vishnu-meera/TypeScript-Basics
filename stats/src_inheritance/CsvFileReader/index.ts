import { IReader } from "../interface/interface";
import fs from "fs";

export abstract class CSVReader<T> implements IReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
