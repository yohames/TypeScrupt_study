import { OutputTarget } from "./Summary";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(`Here is the final report: ${report}`);
  }
}
