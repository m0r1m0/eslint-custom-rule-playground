"use strict";

const rule = require("../rules/no-var-as-translate-arg");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  }
});

ruleTester.run("no-var-as-translate-arg", rule, {
  valid: [
    {
      code: `t("こんにちは")`,
    },
  ],
  invalid: [
    {
      code: `t(textVar)`,
      errors: [{ messageId: "noVarAsTranslateArg" }]
    },
  ]
})
