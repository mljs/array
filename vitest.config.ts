import { defineConfig } from 'vitest/config';

export default defineConfig({
  ssr: {
    resolve: {
      conditions: ['ml-array-internal'],
    },
  },
  test: {
    coverage: {
      include: ['packages/*/src/**/*.ts'],
      exclude: ['packages/*/lib/**', 'packages/*/docs/**', 'src/**'],
    },
  },
});
