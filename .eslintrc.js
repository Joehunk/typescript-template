module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'sort-imports-es6-autofix'],
  ignorePatterns: ['dist/*', 'gensrc/*', 'jest.config.js', '.eslintrc.js'],
  rules: {
    'block-spacing': ['error'],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error'],
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['error'],
    '@typescript-eslint/no-floating-promises': ['error'],
    semi: ['error', 'always'],
    'sort-imports': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': 'error',
    'no-duplicate-imports': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '[Ii]gnored', argsIgnorePattern: '^_' },
    ],
    // Prettier does not limit the length of comment lines, so this takes care
    // of that, without imposing a limit on code, so as to not conflict with
    // the rules Prettier is already enforcing.
    'max-len': ['error', { code: Infinity, comments: 80 }],
  },
};
