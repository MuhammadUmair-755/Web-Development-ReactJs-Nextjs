module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true }, // node added (optional)
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // 🧠 YOU ASKED FOR THIS (PropTypes OFF)
    "react/prop-types": "off",

    // 🚫 Remove console.log warning
    "no-console": "off",

    // 🧹 Let unused vars only show warning
    "no-unused-vars": "warn",

    // ⛔ Don't force React to be in scope (React 18+)
    "react/react-in-jsx-scope": "off",

    // 💡 Optional: enable better JSX detection
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "warn",
  },
};