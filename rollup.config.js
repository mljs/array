import babel from '@rollup/plugin-babel';

const formats = [
  { format: 'cjs', file: 'lib/index.js', exports: 'auto' },
  { format: 'esm', file: 'lib-es6/index.js' },
];

const config = (opts) => ({
  input: 'src/index.js',
  output: opts,
  external: [
    'is-any-array',
    'median-quickselect',
    'ml-array-max',
    'ml-array-min',
    'ml-array-sum',
    'ml-array-mean',
    'ml-array-variance',
  ],
  plugins:
    opts.format === 'esm'
      ? [
          babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ['@babel/env'],
          }),
        ]
      : [],
});

export default formats.map(config);
