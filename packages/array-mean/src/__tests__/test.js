import mean from '..';

describe('array-mean', () => {
    it('should return the mean', () => {
        expect(mean([])).toEqual(undefined);
        expect(mean([0])).toEqual(0);
        expect(mean([1])).toEqual(1);
        expect(mean([1, 2])).toEqual(1.5);
        expect(mean([1, 2, 1])).toBeCloseTo(1.33, 0.001);
        expect(mean([3, 2, 1])).toEqual(2);
    });
    it('should throw on invalid value', () => {
        expect(() => mean()).toThrow(/input must be an array/);
    });
});
