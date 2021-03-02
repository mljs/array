declare namespace ArrayMin {
  export interface ArrayMinOptions {
    /**
     * Start index (inclusive) for the slice within which we look for the minimum.
     */
    fromIndex?: number;
    /**
     * End index (exclusive) for the slice within which we look for the minimum
     */
    toIndex?: number;
  }
}

/**
 * Computes the minimum of the given values.
 */
declare function ArrayMin(
  array: ArrayLike<number>,
  options?: ArrayMin.ArrayMinOptions,
): number;

export = ArrayMin;
