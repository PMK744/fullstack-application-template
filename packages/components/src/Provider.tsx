import type { ReactNode } from "react";
import { TamaguiProvider, type ThemeName } from "tamagui";

import { config } from "./tamagui.config";

export type ProviderProps = {
  children?: ReactNode;
  defaultTheme?: ThemeName;
};

export function Provider({ children, defaultTheme = "dark" }: ProviderProps) {
  return (
    <TamaguiProvider config={config} defaultTheme={defaultTheme}>
      {children}
    </TamaguiProvider>
  );
}
