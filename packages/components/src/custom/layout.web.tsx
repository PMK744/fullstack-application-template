import { YStack } from "tamagui";

import { Navbar } from "./navbar";

import type { LayoutProps } from "./layout.props";

export function Layout({ children, navbar }: LayoutProps) {
  return (
    <YStack minHeight="100vh" backgroundColor="$background">
      <Navbar {...navbar} />
      {children}
    </YStack>
  );
}
