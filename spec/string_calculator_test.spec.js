let calc = require('../src/string_calculator.js')
let calculator = new calc;

describe("StringCalculator()", () => {
    it("should return zero if string is empty", () => {
        expect(calculator.Add("")).toEqual(0);
    });
    
    it("should ignore the newlines and continue adding numbers", () => {
        expect(calculator.Add("1\n2,3")).toEqual(6);
    });

    it("should support different delimiter", () => {
        expect(calculator.Add("//;\n1;2")).toEqual(3);
    });

    it("should return error message and negative number", () => {
        expect(() => {
            calculator.Add("-1,2");
        }).toThrowError("ERROR!\n negative -1, not allowed");
    });

    it("Should ignore numbers bigger than 1000", () => {
        expect(calculator.Add("2 + 1001")).toEqual(2);
    });
});
