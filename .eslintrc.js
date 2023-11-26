/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-shadow": "off",
    curly: "error",
    eqeqeq: "error",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.ts"],
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: __dirname,
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "no-console": "error",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: [
          "block-like",
          "case",
          "default",
          "multiline-const",
          "multiline-expression",
          "multiline-let",
        ],
        next: "*",
      },
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
        propElementValues: "always",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
};
