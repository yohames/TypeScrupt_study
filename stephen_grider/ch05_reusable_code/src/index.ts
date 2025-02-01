import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchReader } from "./composition/MatchReader";
import { AverageGoalsAnalysis } from "./AverageGoalsAnalysis";
import { WinsAnalysis } from "./WinsAnalysis";
import { Summary } from "./Summary";
import { ConsoleReport } from "./ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

// ============= COMPOSITION ===================
const csvReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(
  csvReader
); /* we pass the csvReader object to the MatchReader constructor as a dependency injection*/

// csvReader.read();
/* we call the read method on the csvReader object but we don't need to do this because the load method in the MatchReader class will call the read method on the csvReader object for us via the load method **(This is the Dependency Injection)** */
matchReader.load();
// console.log(matchReader.matches[0]);

const averageGoalsAnalysis = new AverageGoalsAnalysis("Man United");
// const manAverageGoal = averageGoalsAnalysis.run(matchReader.matches);//will be called by the Summary class
// console.log("Average Goals Man United:", manAverageGoal);

const totalGoalsAnalysis = new WinsAnalysis("Man United");
// const totalGoals = totalGoalsAnalysis.run(matchReader.matches);

const report = new ConsoleReport();
const htmlReport =  new HtmlReport();
const reportSummary = new Summary(averageGoalsAnalysis, htmlReport);
reportSummary.buildAndPrintReport(matchReader.matches);




//==============================================

//=================== INHERITANCE ===================
// import { MatchReader } from "./MatchReader";

// const matches = new MatchReader("football.csv");

// matches.readFile();

// console.log("first match", matches.data[0][0]);

//===================================================
