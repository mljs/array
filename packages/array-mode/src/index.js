/**
 * Computes the mode of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function mode(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    /**
     * Faster way to get the mode (https://jsperf.com/mode)
     */
    return input.sort((a, b) =>
        input.filter(v => v === a).length
        - input.filter(v => v === b).length
    ).pop();
}
