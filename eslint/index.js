const requireTranslate = require("./rules/require-translate");
const useUtilFetch = require("./rules/use-util-fetch");

module.exports = {
  rules: {
    "require-translate": requireTranslate,
    "use-util-fetch": useUtilFetch,
  },
};
