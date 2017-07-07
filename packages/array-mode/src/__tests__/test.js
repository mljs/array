import mode from '..';

describe('array-mode', () => {
    it('should return the mode', () => {
        expect(mode([0])).toBe(0);
        expect(mode([1])).toBe(1);
        expect(mode([1, 2])).toBe(2);
        expect(mode([1, 2, 1])).toBe(1);
        expect(mode([3, 2, 1])).toBe(1);
        expect(mode([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4])).toBe(4);
    });
    it('should throw on invalid value', () => {
        expect(() => mode()).toThrow(/input must be an array/);
        expect(() => mode([])).toThrow(/Array should not be empty!/);
    });
});
