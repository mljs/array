import mode from '..';

describe('array-mode', () => {
    it('should return the mode', () => {
        expect(mode([])).toEqual(undefined);
        expect(mode([0])).toEqual(0);
        expect(mode([1])).toEqual(1);
        expect(mode([1, 2])).toEqual(2);
        expect(mode([1, 2, 1])).toEqual(1);
        expect(mode([3, 2, 1])).toEqual(1);
        expect(mode([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4])).toEqual(4);
    });
    it('should throw on invalid value', () => {
        expect(() => mode()).toThrow(/input must be an array/);
    });
});
