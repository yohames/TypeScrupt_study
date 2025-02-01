import { parseDate } from "../Utils";
import { MatchResult } from "../MatchResult_ENUM";
import { MatchData } from "../MatchData";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public read: DataReader) {}

  load(): void {
    this.read.read();
    this.matches = this.read.data.map((row: string[]): MatchData => {
      return this.mapRow(row);
    });
  }
  mapRow(row: string[]): MatchData {
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
