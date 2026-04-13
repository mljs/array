import { isAnyArray } from 'is-any-array';

export interface ArraySequentialFillOptions {
  /**
   * First value in the array.
   * @default 0
   */
  from?: number;
  /**
   * Last value in the array.
   * @default 10
   */
  to?: number;
  /**
   * Size of the array. If not provided, calculated from step.
   */
  size?: number;
  /**
   * If not provided, calculated from size.
   */
  step?: number;
}

/**
 * Fill an array with sequential numbers.
 *
 * @param input - The input array to fill
 * @param options - The options to drive the filling
 */
function sequentialFill(options?: ArraySequentialFillOptions): number[];
function sequentialFill<T extends ArrayLike<number>>(
  input: T,
  options?: ArraySequentialFillOptions,
): T;
function sequentialFill(
  input: undefined,
  options: ArraySequentialFillOptions,
): number[];
function sequentialFill<T extends ArrayLike<number>>(
  input?: T,
  options: ArraySequentialFillOptions = {},
): T {
  if (!isAnyArray(input)) {
    if (typeof input === 'object') {
      options = (input as ArraySequentialFillOptions) ?? {};
    }
    input = [] as unknown as T;
  }

  if (!isAnyArray(input)) {
    throw new TypeError('input must be an array');
  }

  let { from = 0, to = 10, size = input.length, step } = options;

  if (size !== 0 && step) {
    throw new Error('step is defined by the array size');
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

  if (typeof step !== 'number') {
    throw new TypeError('No checks initialized the step');
  }

  if (Array.isArray(input)) {
    // only works with normal array
    input.length = 0;
    for (let i = 0; i < size; i++) {
      input.push(from);
      from += step;
    }
  } else {
    if (input.length !== size) {
      throw new Error(
        'sequentialFill typed array must have the correct length',
      );
    }
    for (let i = 0; i < size; i++) {
      input[i] = from;
      from += step;
    }
  }

  return input;
}

export default sequentialFill;
