import { readFileSync } from "node:fs";
import { parseDate } from "./Utils";
import { MatchResult } from "./MatchResult_ENUM";
import { CsvFileReader } from "./CsvFileReader";

type MatchDataType = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchDataType> {
  data: MatchDataType[] = [];
  constructor(public filename: string) {
    super();
  }
  readFile(): void {
    this.data = readFileSync(this.filename, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((e: string): string[] => {
        return e.split(",");
      })
      .map((row: string[]): MatchDataType => {
        return this.mapRow(row);
      });
  }

  mapRow(row: string[]): MatchDataType {
    return [
      parseDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ]; // here we use typeassertion to confirm that the value is of type MatchResult
  }
}
