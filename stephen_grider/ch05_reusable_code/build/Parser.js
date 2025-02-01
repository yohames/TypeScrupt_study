"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
class Parser {
    constructor(input) {
        this.input = input;
    }
    parseDate() {
        for (let row of this.data) {
            if (row[0].split("/").length > 2) {
                console.log(new Date(row[0].split("/").toString()));
            }
        }
    }
}
exports.Parser = Parser;
