import { Text } from "react-native";

import type { NavbarProps } from "./navbar.props";

import { NativeTabs } from "expo-router/unstable-native-tabs";

const defaultSections = [{ title: "Home", href: "/" }, { title: "About", href: "/about" }];

function routeNameFromHref(href: string) {
  const routeName = href.replace(/^\/+|\/+$/g, "");
  return routeName || "index";
}

export function Navbar({ sections = defaultSections }: NavbarProps) {
  return (
    <NativeTabs>
      {sections.map((section) => (
        <NativeTabs.Trigger
          key={section.href}
          name={routeNameFromHref(section.href)}
        >
          <NativeTabs.Trigger.Label>
            {section.title}
          </NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      ))}

      <NativeTabs.BottomAccessory >
        <Text className="text-center text-xs font-bold text-slate-400">
          Hello, World
        </Text>
      </NativeTabs.BottomAccessory>
    </NativeTabs>
  );
}
