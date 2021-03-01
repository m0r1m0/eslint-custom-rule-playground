const isTranslateFunc = require("../utils/isTranslateFunc");

module.exports = {
  meta: {
    type: "problem",
    schema: [],
    docs: {
      recommended: true,
    },
    messages: {
      noVarAsTranslateArg: "多言語化の第一引数に変数を使わないでください",
    },
  },
  create(context) {
    return {
      CallExpression: (node) => {
        if (isTranslateFunc(node) && node.arguments.length > 0) {
          const targetNode = node.arguments[0];
          if (targetNode.type === "Identifier") {
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
