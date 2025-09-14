// const { defineConfig } = require("eslint/config");
// const expoConfig = require("eslint-config-expo/flat");
// const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

// module.exports = defineConfig([
//   expoConfig,
//   eslintPluginPrettierRecommended,
//   {
//     ignores: ["dist/*"],
//   },
// ]);
// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  js.configs.recommended, // Basic recommended JavaScript rules
  ...tseslint.configs.recommended, // Recommended TypeScript rules
  prettierConfig, // Integrates with Prettier
  ...compat.config({
    extends: [
      "airbnb-base", // Or 'airbnb' if using React
      // Add other framework-specific configs here, e.g., 'next'
    ],
    rules: {
      // Custom rules or overrides
      // "no-console": "warn",
      // indent: ["error", 2],
    },
  }),
];
