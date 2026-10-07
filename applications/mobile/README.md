# Mobile application

Expo application for the mobile client.

Expo Router is enabled with file-based routes under `src/app`. All application source is contained under `src`; Expo's package entrypoint is `expo-router/entry`.

Add new screens as route files:

```text
src/app/index.tsx        /
src/app/home.tsx         /home
src/app/settings.tsx     /settings
src/app/(auth)/login.tsx
```

Route files use kebab-case. Expo Router's required `_layout.tsx` and `index.tsx` filenames are framework conventions.

## Commands

```sh
bun run start
bun run android
bun run ios
bun run web
bun run typecheck
```

Shared components and utilities are imported from the workspace packages:

```tsx
import { Box } from "@pmkerby/components";
import { isDefined } from "@pmkerby/utilities";
```

The home counter uses the API at `http://localhost:5290` by default. Override
the API host for a device or emulator with `EXPO_PUBLIC_API_URL`, for example:

```sh
$env:EXPO_PUBLIC_API_URL = "http://10.0.2.2:5290"
bun run start
```
