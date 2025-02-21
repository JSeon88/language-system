import vueEslintParser from 'vue-eslint-parser';
import tsEslintParser from '@typescript-eslint/parser';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.vue'],
  languageOptions: {
    parser: vueEslintParser,
    parserOptions: {
      parser: tsEslintParser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  rules: {
    'vue/no-multiple-template-root': 'off',
  },
});
