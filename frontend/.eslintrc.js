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
    //---------------------------
    'no-trailing-spaces': 'off',
    'no-mixed-operators': 'off',
    'prefer-template': 'off',
    'prefer-const': 'off',
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
  },
}
