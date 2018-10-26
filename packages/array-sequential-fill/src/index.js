import isArray from 'is-any-array';

/**
 * Fill an array with sequential numbers
 * @param {Array<number>} [input=[]]
 * @return {Array<number>}
 */
export default function sequentialFill(input = [], options = {}) {
  if (!isArray(input)) {
    throw new TypeError('input must be an array');
  }

  let { from = 0, to = 10, size = input.length, step } = options;
  if (!size) {
    if (step) {
      size = Math.floor((to - from) / step) + 1;
    } else {
      size = to - from + 1;
    }
  }
  if (!step && size) {
    step = (to - from) / (size - 1);
  }
  if (Array.isArray(input)) {
    input.length = 0; // only works with normal array
    for (let i = 0; i < size; i++) {
      input.push(from);
      from += step;
    }
  } else {
    if (input.length !== size) {
      throw new Error(
        'sequentialFill typed array must have the correct length'
      );
    }
    for (let i = 0; i < size; i++) {
      input[i] = from;
      from += step;
    }
  }

  return input;
}
