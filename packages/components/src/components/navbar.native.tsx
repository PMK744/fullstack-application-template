import { Text, useTheme } from "tamagui";

import type { NavbarProps } from "./navbar.props";

import { NativeTabs } from "expo-router/unstable-native-tabs";

const defaultSections = [{ title: "Home", href: "/" }, { title: "About", href: "/about" }];

function routeNameFromHref(href: string) {
  const routeName = href.replace(/^\/+|\/+$/g, "");
  return routeName || "index";
}

export function Navbar({ sections = defaultSections }: NavbarProps) {
  const theme = useTheme();

  return (
    <NativeTabs tintColor={theme.color12.val}>
      {sections.map((section) => (
        <NativeTabs.Trigger
          key={section.href}
          name={routeNameFromHref(section.href)}
          // Native tab screens don't inherit the layout's background, so
          // paint each one with the active Tamagui theme.
          contentStyle={{ backgroundColor: theme.background.val }}
        >
          <NativeTabs.Trigger.Label>
            {section.title}
          </NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      ))}

      <NativeTabs.BottomAccessory >
        <Text textAlign="center" fontSize={12} fontWeight="700" color="$color11">
          Hello, World
        </Text>
      </NativeTabs.BottomAccessory>
    </NativeTabs>
  );
}
