#!/usr/bin/env node

const colors = require("colors");
const convert = require("../lib/convert");

// print random greeting
console.log(
    // wraps text with rainbow color formatting
    colors.brightBlue(
        // returns the random greeting text
        convert.randomUnit()
    )
);
