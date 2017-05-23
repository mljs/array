/**
 * Computes the minimum of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function min(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }
    var min = input[0];
    var l = input.length;
    for (var i = 1; i < l; i++) {
        if (input[i] < min) min = input[i];
    }
    return min;
}
