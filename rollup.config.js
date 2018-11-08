import babel from 'rollup-plugin-babel';

const config = {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'esm',
  },
  external: ['median-quickselect'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['transform-es2015-parameters']
    })
  ]
};

export default config;
