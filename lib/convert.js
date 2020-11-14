const _ = require("lodash");

const UNITS = {
    cm: "centimetre",
    m: "metre",
};

exports.convert = function (fromValue, fromUnit, toUnit) {
    if (UNITS[fromUnit] === undefined || UNITS[toUnit] === undefined) {
        return (
            "We can only convert to and from " +
            UNITS["cm"] +
            " and " +
            UNITS["m"]
        );
    } else if (fromUnit === "cm" && toUnit === "m") {
        return (
            fromValue + fromUnit + " is " + parseInt(fromValue) / 100 + toUnit
        );
    } else if (fromUnit === "m" && toUnit === "cm") {
        return (
            fromValue + fromUnit + " is " + parseInt(fromValue) * 100 + toUnit
        );
    }
};

// return a random supported unit
exports.randomUnit = function () {
    let possibileUnits = _.sampleSize(UNITS, 4);
    return (
        "Error! We can currently only convert between the following units: " +
        possibileUnits
    );
};
