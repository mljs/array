/**
 * Fill an array with sequential numbers
 * @param {Array<number>} [input=[]]
 * @return {Array<number>}
 */
export default function sequentialFill(input = [], options = {}) {
  if (!Array.isArray(input)) {
    throw new Error('input must be an array');
  }

  let {
    from = 0,
    to = 10,
    size = input.length,
    step
  } = options;

  if (size && step) {
    size = 0;
  }

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

  input.length = 0;
  for (var i = 0; i < size; i++) {
    input.push(from);
    from += step;
  }

  return input;
}
