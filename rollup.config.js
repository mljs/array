import babel from 'rollup-plugin-babel';

const formats = [
  { format: 'cjs', file: 'lib/index.js' },
  { format: 'esm', file: 'lib-es6/index.js' }
];

const config = (opts) => ({
  input: 'src/index.js',
  output: opts,
  external: ['median-quickselect'],
  plugins:
    opts.format === 'esm'
      ? [
        babel({
          exclude: 'node_modules/**',
          presets: ['@babel/env']
        })
      ]
      : []
});

export default formats.map(config);
