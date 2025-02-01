"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        let analysisOutput = this.analyser.run(matches);
        this.outputTarget.print(analysisOutput);
    }
}
exports.Summary = Summary;
