/**
 * Computes the mean of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function mean(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }
    var sum = 0;
    var l = input.length;
    for (var i = 0; i < l; i++) {
        sum += input[i];
    }
    return sum / l;
}
