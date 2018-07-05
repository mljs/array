const config = {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  external: ['median-quickselect']
};

export default config;
