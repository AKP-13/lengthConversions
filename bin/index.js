#!/usr/bin/env node

const colors = require("colors");
const convert = require("../lib/convert");

// get arguments after first two elements in process.argv
var arguments = process.argv.splice(2);

// default values are null
let fromValue = null;
let fromUnit = null;
let toUnit = null;

const measurments = ["--length"];

// check for valid '--measurement'
if (!measurments.includes(arguments[0])) {
    return convert.invalidMeasurement();
} else {
    fromValue = arguments[1];
    fromUnit = arguments[2];
    toUnit = arguments[4];
}

if (arguments[0] === "--length") {
    console.log(
        colors.green(convert.convertLength(fromValue, fromUnit, toUnit))
    );
}
