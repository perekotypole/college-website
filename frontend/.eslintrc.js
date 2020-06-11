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
    'max-len': [2, 350, 4],
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    'global-require': 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'no-mixed-operators': 'off',
    'no-param-reassign': 'off',
    'no-empty-pattern': 'off',
    'no-extra-boolean-cast': 'off',
    //---------------------------
    'no-trailing-spaces': 'off',
    'prefer-template': 'off',
    'prefer-const': 'off',
    'arrow-body-style': 'off',
    'no-multiple-empty-lines': 'off',
  },
}
