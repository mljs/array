/**
 * Computes the maximum of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function max(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }
    var l = input.length;
    if (l === 0) {
        throw new Error('Array should not be empty!');
    }

    return input.reduce(function (a, b) {
        return Math.max(a, b);
    });
}
