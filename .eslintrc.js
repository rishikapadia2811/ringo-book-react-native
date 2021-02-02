module.exports = {
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  // extends: ["plugin:react-native/all"],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb-base'],
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prefer-destructuring': 0,
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: false,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 1,
    'react-native/no-single-element-style-arrays': 2,
    'react/prop-types': [0],
    'react/display-name': [0],
    quotes: ['error', 'single'],
    'max-len': [
      'warn',
      {
        code: 132,
      },
    ],
    'no-undef': [2],
    'react/jsx-curly-spacing': [0, 'always'],
    'no-restricted-syntax': [0],
    'react/jsx-indent': [
      2,
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'one-var-declaration-per-line': [0],
    'one-var': [0],
    semi: [0, 'never'],
    camelcase: [0],
  },
  globals: {
    fetch: false,
    React: false,
  },
  env: {
    'react-native/react-native': true,
    node: true,
  },
};
