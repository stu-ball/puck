/**
 * ESLint config enforcing FluentUI usage and accessibility for custom UI/page components.
 * Extend this in your main .eslintrc.js as needed.
 */
module.exports = {
  plugins: ["@fluentui/eslint-plugin-react-components", "jsx-a11y"],
  extends: [
    "plugin:@fluentui/react-components/recommended",
    "plugin:jsx-a11y/recommended",
    // Add your base config here, e.g. "custom"
  ],
  rules: {
    // Enforce FluentUI Button usage over native <button>
    "@fluentui/react-components/no-native-html-element": [
      "error",
      { elements: ["button", "input", "select", "textarea"] }
    ],
    // Enforce FluentProvider context in custom/page components
    "@fluentui/react-components/require-fluent-provider": "warn",
    // Enforce ARIA attributes and accessibility best practices
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/click-events-have-key-events": "warn"
  },
  overrides: [
    {
      files: [
        "app/**/*.tsx",
        "custom-ui/**/*.tsx"
      ],
      rules: {
        // Only apply these rules to UI/page components
      }
    }
  ]
};