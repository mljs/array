/// <reference path="median-quickselect.d.ts" />
import { isAnyArray } from 'is-any-array';
import quickSelectMedian from 'median-quickselect';

export default function median(input: ArrayLike<number>): number {
  if (!isAnyArray(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  return quickSelectMedian(input.slice());
}
