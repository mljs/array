/**
 * Computes the mode of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function mode(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }
    return input.sort((a, b) =>
        input.filter(v => v === a).length
        - input.filter(v => v === b).length
    ).pop();
}
