/**
 * eslint v9 부터 사용 방법이 변경되었다/
 * @see https://adequatica.medium.com/how-i-collected-bumps-during-the-migration-to-eslint-9-973ec54fe254
 */

import vueEslintParser from 'vue-eslint-parser';
import tsEslintParser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import withNuxt from './.nuxt/eslint.config.mjs';
import pluginPrettier from 'eslint-plugin-prettier';

import typescriptEslint from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default withNuxt([
  // eslint/typescript 설정 상속
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ),

  // 프로젝트 설정
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tsEslintParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      prettier: pluginPrettier,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'vue/no-multiple-template-root': 'off',
      'prettier/prettier': 'error',
    },
  },

  // // prettier 설정 추가
  // {
  //   ...configPrettier,
  // },
]);
