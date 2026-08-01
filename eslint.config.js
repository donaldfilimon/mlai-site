import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  // The design bundle and the superseded TSX export are reference material, not
  // source we own — never lint them.
  { ignores: ["dist", "project", "node_modules"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  {
    // The vendored DS and the shared layout module deliberately export design
    // tokens (accent maps, type scales) alongside components — that pairing is
    // the point, and splitting them to satisfy fast-refresh would fragment the
    // port away from its upstream shape.
    files: ["src/ds/**/*.tsx", "src/components/site.tsx"],
    rules: { "react-refresh/only-export-components": "off" },
  }
);
