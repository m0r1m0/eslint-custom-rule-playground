"use strict";

module.exports = {
  meta: {
    type: "problem",
    schema: [],
    messages: {
      useUtilFetch: "`utils/fetch`を利用してください"
    }
  },
  create(context) {
    let isUtilFetchImported = false;

    return {
      ImportDeclaration: (node) => {
        if (isUtilFetch(node)) {
          isUtilFetchImported = true;
        }
      },
      CallExpression: (node) => {
        if (
          node.callee.type === "Identifier" &&
          node.callee.name === "fetch" &&
          !isUtilFetchImported
        ) {
          context.report({
            node,
            messageId: "useUtilFetch"
          });
        }
      },
    };
  },
};

function isUtilFetchPath(path) {
  return path.match(/(^|\/)utils\/fetch$/) != null
}

function isUtilFetch(node) {
  if (
    node.type !== "ImportDeclaration" ||
    !isUtilFetchPath(node.source.value)
  ) {
    return false;
  }
  return (
    node.specifiers.find(
      (s) =>
        (s.type === "ImportDefaultSpecifier" && s.local.name === "fetch") ||
        (s.type === "ImportSpecifier" &&
          s.imported.name === "default" &&
          s.local.name === "fetch")
    ) != null
  );
}
