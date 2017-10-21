/**
 * Get the histogram of values from the array
 * @param {Array<number>} input
 * @param {object} [options]
 * @param {number} [options.min = min(input)] - minimum value to start (has to be in the input range)
 * @param {number} [options.max = max(input)] - maximum value to end (has to be in the input range)
 * @param {number} [options.threshold = 1] - with of the histogram
 * @return {{x: Array<number>, y: Array<number>}}
 */
export default function histogram(input, options = {}) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    if (input.length === 0) {
        throw new Error('input must not be empty');
    }

    input = input.slice().sort();

    const {
        min = input[0],
        max = input[input.length - 1],
        threshold = 1,
    } = options;

    if (threshold <= 0) {
        throw new Error('threshold must be bigger than 0');
    }

    var dictionary = {};
    var index = 0;
    var current = Math.max(min, input[0]);
    while ((current <= max) && (index < input.length)) {
        if (input[index] < current) {
            index++;
        } else if (threshold > input[index] - current) {
            // value in the range
            index++;
            if (dictionary[current]) {
                dictionary[current] += 1;
            } else {
                dictionary[current] = 1;
            }
        } else {
            current += threshold;
        }
    }

    var ans = {x: [], y: []};
    for (var x in dictionary) {
        ans.x.push(Number(x));
        ans.y.push(dictionary[x]);
    }
    return ans;
}
