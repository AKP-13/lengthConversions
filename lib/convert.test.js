import { expect } from "chai";
import { randomUnit } from "./convert";

describe("randomUnit - basic functionality", () => {
    it("is a function", () => {
        expect(randomUnit).to.be.a("function");
    });
});
