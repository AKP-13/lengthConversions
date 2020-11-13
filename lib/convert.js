const _ = require("lodash");

const UNITS = {
    cm: "centimetre",
    m: "metre",
};

// return a random supported unit
exports.randomUnit = function () {
    // _.values returns values of objects in array
    // _.sample returns any random item in array
    return _.sample(_.values(UNITS));
};
