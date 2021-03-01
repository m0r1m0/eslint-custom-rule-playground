module.exports = function (node) {
  // t("こんにちは")
  if (
    node.type === "CallExpression" &&
    node.callee.name === "t"
  ) {
    return true;
  }
  // i18n.t("こんにちは")
  if (
    node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.object.name === "i18n" &&
    node.callee.property.name === "t"
  ) {
    return true;
  }
  return false;
};
