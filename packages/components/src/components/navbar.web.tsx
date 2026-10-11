import { Anchor, XStack } from "tamagui";

import type { NavbarProps } from "./navbar.props";

const defaultSections = [{ title: "Home", href: "/" }, { title: "About", href: "/about" }];

export function Navbar({
  title = "Template",
  sections = defaultSections,
}: NavbarProps) {
  return (
    <XStack
      render="header"
      width="100%"
      borderBottomWidth={1}
      borderColor="$borderColor"
      backgroundColor="$background"
      paddingHorizontal="$6"
      paddingVertical="$4"
    >
      <XStack
        render="nav"
        marginHorizontal="auto"
        width="100%"
        maxWidth={1024}
        alignItems="center"
        justifyContent="space-between"
      >
        <Anchor
          href="/"
          fontSize={18}
          fontWeight="700"
          color="$color12"
          textDecorationLine="none"
        >
          {title}
        </Anchor>
        <XStack alignItems="center" gap="$5">
          {sections.map((section) => (
            <Anchor
              key={section.href}
              href={section.href}
              fontSize={14}
              fontWeight="500"
              color="$color11"
              textDecorationLine="none"
              hoverStyle={{ color: "$color12" }}
            >
              {section.title}
            </Anchor>
          ))}
        </XStack>
      </XStack>
    </XStack>
  );
}
