"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = parseDate;
function parseDate(input) {
    let dateParts = input.split("/");
    return new Date(+dateParts[0], +dateParts[1], +dateParts[2]);
}
