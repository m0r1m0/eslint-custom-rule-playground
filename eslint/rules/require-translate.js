const JAPANESE_REGEX = /^.*[^a-zA-Z0-9 !-/:-@[-`{-~]+.*$/;

module.exports = {
  meta: {
    type: "suggestion",
    schema: [],
    messages: {
      requireTranslate: "多言語化タグつかわなくていいん？"
    }
  },
  create(context) {
    return {
      Literal: (node) => {
        if (
          !isTranslated(node) &&
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

function isTranslated(node) {
  // t("こんにちは")
  if (
    node.parent.type === "CallExpression" &&
    node.parent.callee.name === "t"
  ) {
    return true;
  }
  // i18n.t("こんにちは")
  if (
    node.parent.type === "CallExpression" &&
    node.parent.callee.type === "MemberExpression" &&
    node.parent.callee.object.name === "i18n" &&
    node.parent.callee.property.name === "t"
  ) {
    return true;
  }
  return false;
}
