import { arabicToRoman } from "../src/romanConverter";

describe("Conversor de numeros arabes a romanos", () => {
    it('Convierte 1 a "I"', () => {
        expect(arabicToRoman(1)).toBe('I');
    });
})
