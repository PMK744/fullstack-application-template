import { YStack } from "tamagui";

import { Navbar } from "./navbar";

import type { LayoutProps } from "./layout.props";

export function Layout({ children, navbar }: LayoutProps) {
  return (
    <YStack flex={1} backgroundColor="$background">
      <Navbar {...navbar} />
      {children}
    </YStack>
  );
}
