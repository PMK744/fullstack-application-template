# @pmkerby/components

Shared [Tamagui](https://tamagui.dev) components for the web and mobile applications.

Components in this package should stay platform-agnostic and be built from Tamagui primitives (`View`, `Text`, `XStack`, `YStack`, `styled`). Style them with Tamagui props and theme tokens (`$color12`, `$borderColor`, `$4`, ...) rather than class names.

Platform-specific implementations use React Native's platform file resolution when behavior genuinely differs. For example, `navbar.native.tsx` is used by Expo and `navbar.web.tsx` is used by Vite while both are imported as `Navbar` from this package.

## Setup

Both applications must render the shared `Provider` at the root. It wraps `TamaguiProvider` with the shared config in `src/tamagui.config.ts` and defaults to the `dark` theme:

```tsx
import { Provider } from "@pmkerby/components";

<Provider>
  <App />
</Provider>;
```

## Usage

```tsx
import { Box } from "@pmkerby/components";

export function Example() {
  return <Box padding="$4" />;
}
```

The shared `Button` supports `variant` (`default`, `secondary`, `outline`, `ghost`) and `size` (`default`, `sm`, `lg`) props on both platforms, plus any Tamagui style prop:

```tsx
import { Button } from "@pmkerby/components";

<Button variant="outline" size="sm" marginTop="$4" onPress={() => undefined}>
  Continue
</Button>;
```

The package is source-first so Expo and Vite can transpile the shared TypeScript directly from the workspace.
