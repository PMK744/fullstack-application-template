import type { ComponentType } from "react";
import { type VariantProps } from "class-variance-authority";
import {
  Pressable,
  Text,
  type PressableProps,
  type TextProps,
} from "react-native";

import { cn } from "../lib/utils";
import { buttonTextVariants, buttonVariants } from "./buttonVariants";

type NativePressableProps = PressableProps & { className?: string };
type NativeTextProps = TextProps & { className?: string };
const NativePressable = Pressable as ComponentType<NativePressableProps>;
const NativeText = Text as ComponentType<NativeTextProps>;

export type ButtonProps = PressableProps &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    textClassName?: string;
    textProps?: TextProps;
    children: string;
  };

export function Button({
  children,
  className,
  textClassName,
  textProps,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <NativePressable
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <NativeText
        {...textProps}
        className={cn(buttonTextVariants({ variant }), textClassName)}
      >
        {children}
      </NativeText>
    </NativePressable>
  );
}
