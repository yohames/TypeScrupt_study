"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const Utils_1 = require("../Utils");
class MatchReader {
    constructor(read) {
        this.read = read;
        this.matches = [];
    }
    load() {
        this.read.read();
        this.matches = this.read.data.map((row) => {
            return this.mapRow(row);
        });
    }
    mapRow(row) {
        return [
            (0, Utils_1.parseDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ]; // here we use typeassertion to confirm that the value is of type MatchResult
    }
}
exports.MatchReader = MatchReader;
