const _ = require("lodash");
const colors = require("colors");

const measurments = ["--length"];

const lengthUnits = {
    cm: "centimetre",
    m: "metre",
};

exports.convertLength = function (fromValue, fromUnit, toUnit) {
    if (fromUnit === "cm" && toUnit === "m") {
        return (
            fromValue + fromUnit + " is " + parseInt(fromValue) / 100 + toUnit
        );
    } else if (fromUnit === "m" && toUnit === "cm") {
        return (
            fromValue + fromUnit + " is " + parseInt(fromValue) * 100 + toUnit
        );
    } else {
        return colors.brightRed(
            "Error! We can't currently do that conversion."
        );
    }
};

exports.invalidMeasurement = function () {
    console.log(
        colors.brightRed(
            "Please select a valid measuremnt to convert in the format: 'convert --measurement X unit1 in Y unit2'. Measurments to choose from are: " +
                measurments.join(", ")
        )
    );
};
