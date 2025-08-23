/* eslint-disable @typescript-eslint/no-require-imports */
const tseslint = require("typescript-eslint");

module.exports = [
  {
    ignores: ["dist", "node_modules", "eslint.config.cjs"],
  },
  ...tseslint.configs.recommended,
];
