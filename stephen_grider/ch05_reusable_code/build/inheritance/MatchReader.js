"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const node_fs_1 = require("node:fs");
const Utils_1 = require("./Utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    constructor(filename) {
        super();
        this.filename = filename;
        this.data = [];
    }
    readFile() {
        this.data = (0, node_fs_1.readFileSync)(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map((e) => {
            return e.split(",");
        })
            .map((row) => {
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
