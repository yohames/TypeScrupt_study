"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./composition/CsvFileReader");
const MatchReader_1 = require("./composition/MatchReader");
const AverageGoalsAnalysis_1 = require("./AverageGoalsAnalysis");
const WinsAnalysis_1 = require("./WinsAnalysis");
const Summary_1 = require("./Summary");
const ConsoleReport_1 = require("./ConsoleReport");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
// ============= COMPOSITION ===================
const csvReader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvReader); /* we pass the csvReader object to the MatchReader constructor as a dependency injection*/
// csvReader.read();
/* we call the read method on the csvReader object but we don't need to do this because the load method in the MatchReader class will call the read method on the csvReader object for us via the load method **(This is the Dependency Injection)** */
matchReader.load();
// console.log(matchReader.matches[0]);
const averageGoalsAnalysis = new AverageGoalsAnalysis_1.AverageGoalsAnalysis("Man United");
// const manAverageGoal = averageGoalsAnalysis.run(matchReader.matches);//will be called by the Summary class
// console.log("Average Goals Man United:", manAverageGoal);
const totalGoalsAnalysis = new WinsAnalysis_1.WinsAnalysis("Man United");
// const totalGoals = totalGoalsAnalysis.run(matchReader.matches);
const report = new ConsoleReport_1.ConsoleReport();
const htmlReport = new HtmlReport_1.HtmlReport();
const reportSummary = new Summary_1.Summary(averageGoalsAnalysis, htmlReport);
reportSummary.buildAndPrintReport(matchReader.matches);
//==============================================
//=================== INHERITANCE ===================
// import { MatchReader } from "./MatchReader";
// const matches = new MatchReader("football.csv");
// matches.readFile();
// console.log("first match", matches.data[0][0]);
//===================================================
