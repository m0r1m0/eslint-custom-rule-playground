const requireTranslate = require("./rules/require-translate");
const useUtilFetch = require("./rules/use-util-fetch");

module.exports = {
  rules: {
    "require-translate": requireTranslate,
    "use-util-fetch": useUtilFetch,
  },
  configs: {
    recommended: {
      plugins: ["custom-rule"],
      rules: {
        "custom-rule/require-translate": "warn",
        "custom-rule/use-util-fetch": "error",
      }
    },
  },
};
