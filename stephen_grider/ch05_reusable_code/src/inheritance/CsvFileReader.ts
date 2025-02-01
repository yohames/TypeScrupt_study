import { MatchResult } from "./MatchResult_ENUM";

type MatchData = [Date, string, string, number, number, MatchResult, string];
export abstract class CsvFileReader<T> {
  abstract readFile(): void;
  abstract mapRow(row: string[]): T;
}
