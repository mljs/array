# array-median

  [![NPM version][npm-image]][npm-url]
  [![npm download][download-image]][download-url]

Get the median value in an array, this median use the [Floyd-Rivest algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Rivest_algorithm).

Implementation taken from [here](https://softwareengineering.stackexchange.com/questions/284767/kth-selection-routine-floyd-algorithm-489).

Some benchmarks [here](https://jsperf.com/median1).


## Installation

`$ npm install --save ml-array-median`

## Usage

```js
import median from 'ml-array-median';

const result = median([1, 5, 3, 2, 4]);
// 3
```

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-array-median.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-array-median
[download-image]: https://img.shields.io/npm/dm/ml-array-median.svg?style=flat-square
[download-url]: https://npmjs.org/package/ml-array-median