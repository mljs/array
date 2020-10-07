declare module 'ml-array-min' {
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

  /**
   * Computes the minimum of the given values.
   */
  function arrayMin(
    array: ArrayLike<number>,
    options?: ArrayMinOptions,
  ): number;
  export = arrayMin;
}
