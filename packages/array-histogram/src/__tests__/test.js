import histogram from '..';

describe('array-histogram', () => {
    it('discrete case', () => {
        const input = [0, 1, 3, 1, 1, 0, 5, 3, 2];
        expect(histogram(input)).toEqual({
            x: [0, 1, 2, 3, 5],
            y: [2, 3, 1, 2, 1]
        });
        expect(histogram(input, {min: 1, max: 3})).toEqual({
            x: [1, 2, 3],
            y: [3, 1, 2]
        });
        expect(histogram(input, {threshold: 2})).toEqual({
            x: [0, 2, 4],
            y: [5, 3, 1]
        });
    });

    it('continuous case', () => {
        const input = [0.1, 1.1, 3, 1.2, 1.4, 5];
        expect(histogram(input)).toEqual({
            x: [0.1, 1.1, 2.1, 4.1],
            y: [1, 3, 1, 1]
        });
        expect(histogram(input, {min: 1, max: 3})).toEqual({
            x: [1, 3],
            y: [3, 1]
        });
        expect(histogram(input, {threshold: 2})).toEqual({
            x: [0.1, 2.1, 4.1],
            y: [4, 1, 1]
        });
    });

    it('should throw on invalid value', () => {
        expect(() => histogram()).toThrow(/input must be an array/);
        expect(() => histogram([])).toThrow(/input must not be empty/);
        expect(() => histogram([1, 2], {threshold: -1})).toThrow(/threshold must be bigger than 0/);
        expect(() => histogram([1, 2], {threshold: 0})).toThrow(/threshold must be bigger than 0/);
    });
});
