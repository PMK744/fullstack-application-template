import { View } from "react-native";

import { Navbar } from "./navbar";

import type { LayoutProps } from "./layout.props";

export function Layout({ children, navbar }: LayoutProps) {
  return (
    <View className="flex-1 bg-slate-950">
      <Navbar {...navbar} />
      {children}
    </View>
  );
}
