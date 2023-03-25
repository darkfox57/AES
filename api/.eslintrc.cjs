module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['standard', 'eslint-config-prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'comma-dangle': ['error', 'ignore'],
  },
}
