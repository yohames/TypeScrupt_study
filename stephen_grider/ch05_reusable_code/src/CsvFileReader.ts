import { readFileSync } from "node:fs";

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}
  readFile(): void {
    this.data = readFileSync(this.filename, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((e: string): string[] => {
        return e.split(",");
      });
  }

  formatFile(): void {
    console.log(this.data);
  }
}
