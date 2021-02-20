"use strict";

const rule = require("../rules/use-util-fetch");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  }
});

ruleTester.run("use-util-fetch", rule, {
  valid: [
    {
      code: `import fetch from "./utils/fetch"
      
      fetch("/api/xxxxx")`,
    },
    {
      code: `import { default as fetch } from "./utils/fetch"
      
      fetch("/api/xxxxx")`,
    },
    {
      code: `import { default as fetch, abc } from "./utils/fetch"
      
      fetch("/api/xxxxx")`
    },
    {
      code: `import fetch from "../../../utils/fetch";
      
      fetch("/api/xxxxx");`
    },
    {
      code: `import fetch from "utils/fetch";
      
      fetch("/api/xxxxx");`
    }
  ],
  invalid: [
    {
      code: `fetch("/api/xxxxx")`,
      errors: [{
        messageId: "useUtilFetch"
      }]
    },
    {
      code: `import fetch from "./xxx/fetch";
      
      fetch("/api/xxxxx");`,
      errors: [{
        messageId: "useUtilFetch"
      }]
    }
  ]
})
