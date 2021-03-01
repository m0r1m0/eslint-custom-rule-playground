const isTranslateFunc = require("../utils/isTranslateFunc");
const JAPANESE_REGEX = /^.*[^a-zA-Z0-9 !-/:-@[-`{-~]+.*$/;

module.exports = {
  meta: {
    type: "suggestion",
    schema: [],
    docs: {
      recommended: true
    },
    messages: {
      requireTranslate: "多言語化タグつかわなくていいん？"
    }
  },
  create(context) {
    return {
      Literal: (node) => {
        if (
          !isTranslateFunc(node.parent) &&
          node.value.match(JAPANESE_REGEX)
        ) {
          context.report({
            node,
            messageId: "requireTranslate",
          });
        }
      },
      JSXText: (node) => {
        if (
          node.value.match(JAPANESE_REGEX)
        ) {
          context.report({
            node,
            messageId: "requireTranslate",
          });
        }
      },
    };
  },
};
