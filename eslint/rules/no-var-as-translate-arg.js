const isTranslateFunc = require("../utils/isTranslateFunc");

module.exports = {
  meta: {
    type: "problem",
    schema: [],
    docs: {
      recommended: true,
    },
    messages: {
      noVarAsTranslateArg: "多言語化の引数に変数を使わないでください",
    },
  },
  create(context) {
    return {
      CallExpression: (node) => {
        if (isTranslateFunc(node)) {
          const targetNode = node.arguments.find((v) => v.type === "Identifier");
          if (targetNode != null) {
            context.report({
              node: targetNode,
              messageId: "noVarAsTranslateArg",
            });
          }
        }
      },
    };
  },
};
