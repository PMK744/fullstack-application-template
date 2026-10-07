# @pmkerby/components

Shared React Native components for the web and mobile applications.

Components in this package should stay platform-agnostic and use React Native primitives. Applications can provide platform-specific behavior through props, composition, or their platform adapter.

Platform-specific implementations use React Native's platform file resolution. For example, `Button.tsx` is used by Expo and `Button.web.tsx` is used by Vite while both are imported as `Button` from this package.

```tsx
import { Box } from "@pmkerby/components";

export function Example() {
  return <Box padding={16} />;
}
```

The shared `Button` supports shadcn-style `variant` and `size` props on both platforms:

```tsx
import { Button } from "@pmkerby/components";

<Button variant="outline" size="sm" onPress={() => undefined}>
  Continue
</Button>;
```

The package is source-first so Expo and Vite can transpile the shared TypeScript directly from the workspace.
