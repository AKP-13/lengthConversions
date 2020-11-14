import { expect } from "chai";
import { convert, randomUnit } from "./convert";

describe("convert - basic functionality", () => {
    it("is a function", () => {
        expect(convert).to.be.a("function");
    });

    it("correctly converts 5cm to 0.05m", () => {
        const expected = "5cm is 0.05m";
        const actual = convert("5", "cm", "m");
        expect(actual).to.equal(expected);
    });

    it("correctly converts 5m to 500cm", () => {
        const expected = "5m is 500cm";
        const actual = convert("5", "m", "cm");
        expect(actual).to.equal(expected);
    });

    it("correctly converts 0m to 0cm", () => {
        const expected = "0m is 0cm";
        const actual = convert("0", "m", "cm");
        expect(actual).to.equal(expected);
    });
});

describe("randomUnit - basic functionality", () => {
    it("is a function", () => {
        expect(randomUnit).to.be.a("function");
    });

    it("returns a string", () => {
        const actual = randomUnit();
        expect(actual).to.be.a("string");
    });
});
