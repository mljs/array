/**
 * Computes the mode of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function mode(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }
    if (input.length === 0) {
        throw new Error('Array should not be empty!');
    }

    var maxValue = 0;
    var maxCount = 0;
    var count = 0;
    var counts = {};

    for (var i = 0; i < input.length; ++i) {
        var element = input[i];
        count = counts[element];
        if (count) {
            counts[element]++;
            count++;
        } else {
            counts[element] = count = 1;
        }
        //count = counts[element] = counts[element] ? counts[element] + 1 : 1;
        if (count > maxCount) {
            maxCount = count;
            maxValue = input[i];
        }
    }

    return maxValue;
}
