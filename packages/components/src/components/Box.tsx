import type { ComponentType } from "react";
import { View, type ViewProps } from "react-native";

type NativeViewProps = ViewProps & { className?: string };
const NativeView = View as ComponentType<NativeViewProps>;

export type BoxProps = ViewProps & {
  className?: string;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
};

export function Box({
  padding,
  paddingHorizontal,
  paddingVertical,
  className,
  style,
  ...props
}: BoxProps) {
  return (
    <NativeView
      {...props}
      className={className}
      style={[
        padding !== undefined && { padding },
        paddingHorizontal !== undefined && { paddingHorizontal },
        paddingVertical !== undefined && { paddingVertical },
        style,
      ]}
    />
  );
}
