module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/quotes": "off",
  },

  extends: ["@metamask/eslint-config"],

  overrides: [
    {
      files: ["**/*.js"],
      extends: ["@metamask/eslint-config-nodejs"],
    },

    {
      files: ["**/*.{ts,tsx}"],
      extends: ["@metamask/eslint-config-typescript"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        camelcase: 0,
      },
    },

    {
      files: ["**/*.test.ts", "**/*.test.js"],
      extends: ["@metamask/eslint-config-jest"],
      rules: {
        "@typescript-eslint/no-shadow": [
          "error",
          {allow: ["describe", "expect", "it"]},
        ],
      },
    },
  ],

  ignorePatterns: [
    "!.prettierrc.js",
    "**/!.eslintrc.js",
    "**/dist*/",
    "**/*__GENERATED__*",
    "**/build",
    "**/public",
    "**/.cache",
  ],
};
