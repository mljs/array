import { defineConfig } from 'vitest/config';

export default defineConfig({
  ssr: {
    resolve: {
      conditions: ['ml-array-internal'],
    },
  },
  test: {
    coverage: {
      include: ['**/src'],
      exclude: ['**/lib', '**/docs', '/src'],
    },
  },
});
