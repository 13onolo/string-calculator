let calc = require('../src/string_calc');
let calculator = new calc;

console.log(calculator.Add("-//1\n-2;1001,-3%%9"));

describe("StringCalculator()", () => {
    it("should return zero if string is empty", () => {
        expect(calculator.Add("")).toEqual(0);
    });
});
describe("StringCalculator()", () => {
    it("should ignore the newlines and continue adding numbers", () => {
        expect(calculator.Add("1\n2,3")).toEqual(6);
    });
});
describe("StringCalculator()", () => {
    it("should support different delimiter", () => {
        expect(calculator.Add("//;\n1;2")).toEqual(3);
    });
});
describe("StringCalculator()", () => {
    it("should return error message and negative number", () => {
        expect(calculator.Add("-//1\n-2;1001,%%9")).toBe("negative -2, not allowed");
    });
});
describe("StringCalculator()", () => {
    it("should return error message and negative numbers", () => {
        expect(calculator.Add("-//1\n-2;1001,-3%%9")).toBe("negative -2,-3, not allowed");
    });
});
describe("StringCalculator()", () => {
    it("Should ignore numbers bigger than 1000", () => {
        expect(calculator.Add("2 + 1001")).toEqual(2);
    });
});
