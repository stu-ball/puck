# FluentUI Usage Guidelines

This project uses [FluentUI React Components](https://react.fluentui.dev/) for all custom UI and page components.

## Principles

- **Context**: All custom UI and page components must be wrapped in a `FluentProvider` context (see [`apps/demo/app/layout.tsx`](apps/demo/app/layout.tsx:4)).
- **Controls**: Use FluentUI controls/components in place of native elements or custom controls wherever possible. Do not replace layout primitives (e.g., `div`) unless a FluentUI layout component is specifically required.
- **Theming**: Use FluentUI tokens, typography, and style helpers for all colors, spacing, and typography. Reference tokens like `var(--colorNeutralBackground1)` and `var(--spacingHorizontalM)` for consistent design.
- **Accessibility**: Leverage FluentUI's built-in accessibility features and ARIA helpers. Always provide `aria-label`, `aria-labelledby`, and `aria-describedby` where appropriate. Use semantic roles and ensure keyboard navigation.
- **Best Practices**:
  - Prefer FluentUI Button, TabList, Tab, Title1, List, ListItem, etc. over native or custom equivalents.
  - Use FluentUI icons and icon buttons for actions.
  - Avoid overriding FluentUI styles unless necessary for branding.
  - Test with keyboard and screen readers.

## Example

```tsx
import { FluentProvider, webLightTheme, Button, Title1 } from "@fluentui/react-components";

<FluentProvider theme={webLightTheme}>
  <Title1 as="h1">Heading</Title1>
  <Button appearance="primary" aria-label="Save">Save</Button>
</FluentProvider>
```

## References

- [FluentUI React Components Documentation](https://react.fluentui.dev/)
- [FluentUI Tokens](https://react.fluentui.dev/?path=/docs/theme-tokens--page)
- [Accessibility in FluentUI](https://react.fluentui.dev/?path=/docs/accessibility-introduction--page)