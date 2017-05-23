import max from '..';

describe('array-max', () => {
    it('should return the max', () => {
        expect(max([])).toEqual(undefined);
        expect(max([0])).toEqual(0);
        expect(max([1])).toEqual(1);
        expect(max([1, 2])).toEqual(2);
        expect(max([1, 2, 1])).toEqual(2);
        expect(max([3, 2, 1])).toEqual(3);
    });
    it('should throw on invalid value', () => {
        expect(() => max()).toThrow(/input must be an array/);
    });
});
