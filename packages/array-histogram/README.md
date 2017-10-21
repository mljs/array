# array-histogram

  [![NPM version][npm-image]][npm-url]
  [![npm download][download-image]][download-url]

Get the histogram of values from the array.

## Installation

`$ npm install --save ml-array-histogram`

## Usage

```js
import histogram from 'ml-array-histogram';

const result = histogram([0, 1, 3, 1, 1, 0, 5, 3, 2]);
/* {
    x: [0, 1, 2, 3, 5],
    y: [2, 3, 1, 2, 1]
} */
```

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-array-histogram.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-array-histogram
[download-image]: https://img.shields.io/npm/dm/ml-array-histogram.svg?style=flat-square
[download-url]: https://npmjs.org/package/ml-array-histogram
