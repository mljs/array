import babel from 'rollup-plugin-babel';

const formats = [
  { format: 'cjs', file: 'lib/index.js', },
  { format: 'esm', file: 'lib-esm/index.js' },
];

const config = (opts) => ({
  input: 'src/index.js',
  output: opts,
  external: ['median-quickselect'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['transform-es2015-parameters']
    })
  ]
});

export default formats.map(config);
