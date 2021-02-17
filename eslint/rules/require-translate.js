module.exports = {
  meta: {
    type: "suggestion",
    schema: [],
  },
  create(context) {
    return {
      Literal: (node) => {
        if (
          !isTranslated(node) &&
          node.value.match(/^.*[^a-zA-Z0-9 !-/:-@[-`{-~]+.*$/)
        ) {
          node.get;
          context.report({
            node,
            message: "多言語化タグつかわなくていいん？",
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
