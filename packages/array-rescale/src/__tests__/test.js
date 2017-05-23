import rescale from '../index';

describe('rescale', () => {
    it('should return a rescaled array', () => {
        expect(rescale([0, 2])).toEqual([0, 1]);
        expect(rescale([0, 1])).toEqual([0, 1]);
        expect(rescale([0, 1, 2])).toEqual([0, 0.5, 1]);
    });

    it('should throw min == max', () => {
        expect(() => rescale([1, 1])).toThrow(/minimum and maximum input values are equal\. Cannot rescale a constant array/)
    });

    it('should fill the provided output', () => {
        const array = [0, 1, 2, 3, 4];
        const output = new Array(5);
        rescale(array, {output});
        expect(output).toEqual([0, 0.25, 0.5, 0.75, 1]);
        expect(array).toEqual([0, 1, 2, 3, 4]);
    });

    it('should work in-place', () => {
        const array = [0, 1, 2, 3, 4];
        rescale(array, {output: array});
        expect(array).toEqual([0, 0.25, 0.5, 0.75, 1]);
    });

    it('should work with custom min/max', () => {
        expect(rescale([0, 1, 2], {min: -1, max: 1})).toEqual([-1, 0, 1]);
        expect(rescale([0, 1, 2], {min: 0.5})).toEqual([0.5, 0.75, 1]);
        expect(rescale([0, 1, 2], {max: 0.5})).toEqual([0, 0.25, 0.5]);
        expect(rescale([0, 1, 2], {min: 50, max: 100})).toEqual([50, 75, 100]);
    });

    it('should throw on bad inputs', () => {
        expect(() => rescale()).toThrow(/input must be an array/);
        expect(() => rescale([], {output: false})).toThrow(/output option must be an array if specified/);
        expect(() => rescale([], {min: 2})).toThrow(/min option must be smaller than max option/);
        expect(() => rescale([], {max: -1})).toThrow(/min option must be smaller than max option/);
        expect(() => rescale([], {min: 2, max: 0})).toThrow(/min option must be smaller than max option/);
        expect(() => rescale([], {min: 1, max: 1})).toThrow(/min option must be smaller than max option/);
    });
});
