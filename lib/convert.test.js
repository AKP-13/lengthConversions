import { expect } from "chai";
import { randomUnit } from "./convert";

describe("randomUnit - basic functionality", () => {
    it("is a function", () => {
        expect(randomUnit).to.be.a("function");
    });

    it("returns a string", () => {
        const actual = randomUnit();
        expect(actual).to.be.a("string");
    });
});
