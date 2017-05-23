/**
 * Computes the maximum of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function max(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }
    var max = input[0];
    var l = input.length;
    for (var i = 1; i < l; i++) {
        if (input[i] > max) max = input[i];
    }
    return max;
}
