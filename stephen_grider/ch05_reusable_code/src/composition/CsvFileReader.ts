import { readFileSync } from "node:fs";

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = readFileSync(this.filename, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((e: string): string[] => {
        return e.split(",");
      });
  }
}
