module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: [
    "eslint:recommended",
    "plugin:custom-rule/recommended"
  ],
};