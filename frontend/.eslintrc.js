module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['error', 'never'],
    'no-trailing-spaces': 'off',
    'no-mixed-operators': 'off',
    'max-len': [2, 200, 4],
    'prefer-template': 'off',
    'prefer-const': 'off',
    'no-plusplus': 'off',
  },
}
