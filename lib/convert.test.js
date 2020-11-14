import { expect } from "chai";
import { convertLength, invalidMeasurement } from "./convert";

describe("convert - basic functionality", () => {
    it("is a function", () => {
        expect(convertLength).to.be.a("function");
    });

    it("correctly converts 5cm to 0.05m", () => {
        const expected = "5cm is 0.05m";
        const actual = convertLength("5", "cm", "m");
        expect(actual).to.equal(expected);
    });

    it("correctly converts 5m to 500cm", () => {
        const expected = "5m is 500cm";
        const actual = convertLength("5", "m", "cm");
        expect(actual).to.equal(expected);
    });

    it("correctly converts 0m to 0cm", () => {
        const expected = "0m is 0cm";
        const actual = convertLength("0", "m", "cm");
        expect(actual).to.equal(expected);
    });

    it("correctly converts 0cm to 0m", () => {
        const expected = "0cm is 0m";
        const actual = convertLength("0", "cm", "m");
        expect(actual).to.equal(expected);
    });
});

describe("invalidMeasurement - basic functionality", () => {
    it("is a function", () => {
        expect(invalidMeasurement).to.be.a("function");
    });

    it("returns a string", () => {
        const actual = invalidMeasurement();
        expect(actual).to.contain(
            "Please select a valid measuremnt to convert"
        );
    });
});
