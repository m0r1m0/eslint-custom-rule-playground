"use strict";

const rule = require("../rules/require-translate");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  }
});

ruleTester.run("require-translate", rule, {
  valid: [
    {
      code: `t("こんにちは")`,
    },
    {
      code: `i18n.t("こんにちは")`,
    },
    {
      code: `<div>{t("こんにちは")}</div>`
    }
  ],
  invalid: [
    {
      code: `"こんにちは"`,
      errors: [{ message: "多言語化タグつかわなくていいん？" }]
    },
    {
      code: `<div>こんにちは</div>`,
      errors: [{ message: "多言語化タグつかわなくていいん？" }]
    }
  ]
})
