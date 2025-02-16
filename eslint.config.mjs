import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  // eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
      "no-console": "off",
      "quotes": [
        "error",
        "double"
    ]
    }
  }
];