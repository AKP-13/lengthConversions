#!/usr/bin/env node

const colors = require("colors");
const convert = require("../lib/convert");

// get arguments after first two elements in process.argv
var arguments = process.argv.splice(2);

// default values are null
let fromValue = null;
let fromUnit = null;
let toUnit = null;

// check if user wants length
if (arguments[0] == "--length") {
    // assign respective arguments
    fromValue = arguments[1];
    fromUnit = arguments[2];
    toUnit = arguments[4];
}

// if valid input format, convert
if (fromValue && fromUnit && toUnit) {
    console.log(
        colors.brightCyan(convert.convert(fromValue, fromUnit, toUnit))
    );
} else {
    console.log(colors.brightRed(convert.randomUnit()));
}

// console.log(process.argv);
