declare module 'ml-array-variance' {
  export interface ArrayVarianceOptions {
    /**
     * If true, divide by (n-1). If false, divide by n.
     * @default true
     */
    unbiased?: boolean;
    /**
     * Precalculated mean.
     */
    mean?: number;
  }

  /**
   * Computes the variance of the given values.
   */
  function arrayVariance(
    array: ArrayLike<number>,
    options?: ArrayVarianceOptions,
  ): number;
  export = arrayVariance;
}
