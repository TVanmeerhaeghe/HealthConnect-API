import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
    },
  },
];