"use strict";
exports.__esModule = true;
var fs = require("fs");
var output = fs.readFileSync('data.txt', 'UTF8')
    .trim()
    .replace(/\r/g, '')
    .split('\n')
    .map(function (line) { return line.split('\t'); })
    .reduce(function (customers, line) {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
    });
    return customers;
}, {});
console.log('output', JSON.stringify(output, null, 2));
