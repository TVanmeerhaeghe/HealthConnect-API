// import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

// const compat = new FlatCompat({
//   baseDirectory: import.meta.url,
// });

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      globals: {
        require: 'readonly',
        process: 'readonly',
        module: 'readonly',
      },
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      // 'no-console': 'off',
    },
  },
];
