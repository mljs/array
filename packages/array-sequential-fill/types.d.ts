declare module 'ml-array-sequential-fill' {
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
   */
  function arraySequentialFill(options?: ArraySequentialFillOptions): number[];
  function arraySequentialFill<T extends ArrayLike<number>>(
    array: T,
    options?: ArraySequentialFillOptions,
  ): T;

  export = arraySequentialFill;
}
