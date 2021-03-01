const requireTranslate = require("./rules/require-translate");
const useUtilFetch = require("./rules/use-util-fetch");
const noVarAsTranslateArg = require("./rules/no-var-as-translate-arg");

module.exports = {
  rules: {
    "require-translate": requireTranslate,
    "use-util-fetch": useUtilFetch,
    "no-var-as-translate-arg": noVarAsTranslateArg,
  },
  configs: {
    recommended: {
      plugins: ["custom-rule"],
      rules: {
        "custom-rule/require-translate": "warn",
        "custom-rule/use-util-fetch": "error",
        "custom-rule/no-var-as-translate-arg": "error",
      },
    },
  },
};
