import type { ReactNode } from "react";
import {
  createStyledContext,
  styled,
  Text,
  View,
  withStaticProperties,
  type GetProps,
} from "tamagui";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

const ButtonContext = createStyledContext<{
  variant: ButtonVariant;
  size: ButtonSize;
}>({
  variant: "default",
  size: "default",
});

const ButtonFrame = styled(View, {
  name: "Button",
  context: ButtonContext,
  role: "button",
  render: "button",
  focusable: true,
  cursor: "pointer",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  borderRadius: "$3",
  borderWidth: 1,
  borderColor: "transparent",

  variants: {
    variant: {
      default: {
        backgroundColor: "$color12",
        hoverStyle: { backgroundColor: "$color11" },
        pressStyle: { backgroundColor: "$color10" },
      },
      secondary: {
        backgroundColor: "$color4",
        hoverStyle: { backgroundColor: "$color5" },
        pressStyle: { backgroundColor: "$color6" },
      },
      outline: {
        backgroundColor: "transparent",
        borderColor: "$borderColor",
        hoverStyle: { backgroundColor: "$color3" },
        pressStyle: { backgroundColor: "$color4" },
      },
      ghost: {
        backgroundColor: "transparent",
        hoverStyle: { backgroundColor: "$color3" },
        pressStyle: { backgroundColor: "$color4" },
      },
    },
    size: {
      default: { minHeight: 40, paddingHorizontal: 16, paddingVertical: 8 },
      sm: { minHeight: 36, paddingHorizontal: 12, paddingVertical: 8 },
      lg: { minHeight: 44, paddingHorizontal: 24, paddingVertical: 8 },
    },
    disabled: {
      true: { opacity: 0.5, cursor: "not-allowed", pointerEvents: "none" },
    },
  } as const,

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const ButtonText = styled(Text, {
  name: "ButtonText",
  context: ButtonContext,
  fontFamily: "$body",
  fontSize: 14,
  fontWeight: "500",
  userSelect: "none",

  variants: {
    variant: {
      default: { color: "$color1" },
      secondary: { color: "$color12" },
      outline: { color: "$color12" },
      ghost: { color: "$color12" },
    },
  } as const,
});

export type ButtonProps = Omit<GetProps<typeof ButtonFrame>, "children"> & {
  children?: ReactNode;
};

function ButtonComponent({ children, ...props }: ButtonProps) {
  return (
    <ButtonFrame {...props}>
      {typeof children === "string" || typeof children === "number" ? (
        <ButtonText>{children}</ButtonText>
      ) : (
        children
      )}
    </ButtonFrame>
  );
}

export const Button = withStaticProperties(ButtonComponent, {
  Text: ButtonText,
});
