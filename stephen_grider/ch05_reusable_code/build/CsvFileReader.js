"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const node_fs_1 = require("node:fs");
class CsvFileReader {
    constructor(filename) {
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
        });
    }
    formatFile() {
        console.log(this.data);
    }
}
exports.CsvFileReader = CsvFileReader;
