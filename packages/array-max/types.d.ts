declare namespace ArrayMax {
  export interface ArrayMaxOptions {
    /**
     * Start index (inclusive) for the slice within which we look for the maximum.
     */
    fromIndex?: number;
    /**
     * End index (exclusive) for the slice within which we look for the maximum
     */
    toIndex?: number;
  }

  /**
   * Computes the maximum of the given values.
   */
  function arrayMax(
    array: ArrayLike<number>,
    options?: ArrayMaxOptions,
  ): number;
}

export = ArrayMax;

