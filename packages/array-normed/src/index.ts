import type { AnyArray } from 'is-any-array';
import { isAnyArray } from 'is-any-array';
import max from 'ml-array-max';
import sum from 'ml-array-sum';

export interface ArrayNormedOptions<T extends ArrayLike<number>> {
  /**
   * @default 'absolute'
   */
  algorithm?: 'absolute' | 'max' | 'sum';
  /**
   * New max value for algo 'max'.
   * @default 1
   */
  maxValue?: number;
  /**
   * New max value for algo 'absolute' and 'sum'.
   * @default 1
   */
  sumValue?: number;
  /**
   * Specify the output array. Can be the input array for in place modification.
   */
  output?: T;
}

/**
 * Normalize the values of the given array.
 */
export default function norm<T extends ArrayLike<number>>(
  input: T,
  options: ArrayNormedOptions<T> = {},
): T | number[] {
  const { algorithm = 'absolute', sumValue = 1, maxValue = 1 } = options;
  if (!isAnyArray(input)) {
    throw new Error('input must be an array');
  }

  let output: T | number[];
  if (options.output !== undefined) {
    if (!isAnyArray(options.output)) {
      throw new TypeError('output option must be an array if specified');
    }
    output = options.output;
  } else {
    output = new Array(input.length);
  }

  if (input.length === 0) {
    throw new Error('input must not be empty');
  }

  switch (algorithm.toLowerCase()) {
    case 'absolute': {
      const absoluteSumValue = absoluteSum(input) / sumValue;
      if (absoluteSumValue === 0) return input.slice(0) as unknown as T;
      for (let i = 0; i < input.length; i++) {
        // @ts-expect-error In this context, T should not be readonly so it's OK.
        output[i] = input[i] / absoluteSumValue;
      }
      return output;
    }
    case 'max': {
      const currentMaxValue = max(input);
      if (currentMaxValue === 0) return input.slice(0) as unknown as T;
      const factor = maxValue / currentMaxValue;
      for (let i = 0; i < input.length; i++) {
        // @ts-expect-error In this context, T should not be readonly so it's OK.
        output[i] = input[i] * factor;
      }
      return output;
    }
    case 'sum': {
      const sumFactor = sum(input) / sumValue;
      if (sumFactor === 0) return input.slice(0) as unknown as T;
      for (let i = 0; i < input.length; i++) {
        // @ts-expect-error In this context, T should not be readonly so it's OK.
        output[i] = input[i] / sumFactor;
      }
      return output;
    }
    default:
      throw new Error(`norm: unknown algorithm: ${algorithm}`);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NumberArray = Exclude<AnyArray, any[]> | number[];
function absoluteSum(input: NumberArray) {
  let sumValue = 0;
  for (const value of input) {
    sumValue += Math.abs(value);
  }
  return sumValue;
}
