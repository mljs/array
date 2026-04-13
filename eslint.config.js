import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, globalIgnores } from 'eslint/config';
import ts from 'eslint-config-cheminfo-typescript/base';
import unicorn from 'eslint-config-cheminfo-typescript/unicorn';
import vitest from 'eslint-config-cheminfo-typescript/vitest';

export default defineConfig(
  globalIgnores([
    '**/coverage',
    '**/lib',
    '**/lib-internal',
    '**/docs',
    '**/CHANGELOG.md',
    '/src/',
  ]),
  ts,
  unicorn,
  vitest,
  createNoExtraneousConfigs(),
  {
    // it uses an old `median-quickselect` package, which does not have types,
    // so triple-slash-reference is used to declare `median-quickselect` module.
    files: ['packages/array-median/src/index.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
);

function createNoExtraneousConfigs() {
  const configs = [];
  for (const pkg of fs.readdirSync('packages')) {
    configs.push({
      files: [`packages/${pkg}/**`],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            packageDir: [
              fileURLToPath(new URL(`packages/${pkg}`, import.meta.url)),
              path.dirname(fileURLToPath(import.meta.url)),
            ],
          },
        ],
      },
    });
  }
  return configs;
}
