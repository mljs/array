/**
 * Fill an array with sequential numbers
 * @param {Array<number>} [input] - optional destination array (if not provided a new array will be created)
 * @param {object} [options={}]
 * @param {number} [options.from=0] - first value in the array
 * @param {number} [options.to=10] - last value in the array
 * @param {number} [options.size=input.length] - size of the array (if not provided calculated from step)
 * @param {number} [options.step] - if not provided calculated from size
 * @return {Array<number>}
 */
export default function sequentialFill(input = [], options = {}) {
  if (typeof input === 'object' && !Array.isArray(input)) {
    options = input;
    input = [];
  }

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
