/**
 * Computes the minimum of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function min(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    var l = input.length;
    if (l === 0) {
        throw new Error('Array should not be empty!');
    }

    var min = input[0];
    for (var i = 1; i < l; i++) {
        if (input[i] < min) min = input[i];
    }
    return min;
}
