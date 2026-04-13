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
  ]),
  ts,
  unicorn,
  vitest,
  createNoExtraneousConfigs(),
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
