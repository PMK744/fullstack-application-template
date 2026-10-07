import type { ComponentProps, ComponentType } from "react";
import { Text, View } from "react-native";

import { Button } from "./Button";

type NativeViewProps = ComponentProps<typeof View> & {
  className?: string;
};
type NativeTextProps = ComponentProps<typeof Text> & {
  className?: string;
};
const NativeView = View as ComponentType<NativeViewProps>;
const NativeText = Text as ComponentType<NativeTextProps>;

export type CounterCardProps = {
  value: number | null;
  isLoading?: boolean;
  error?: string;
  onIncrement: () => void;
  onReset: () => void;
};

export function CounterCard({
  value,
  isLoading = false,
  error,
  onIncrement,
  onReset,
}: CounterCardProps) {
  return (
    <NativeView className="mt-8 w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <NativeText className="text-center text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
        Shared counter
      </NativeText>
      <NativeText className="mt-3 text-center text-5xl font-bold text-slate-50">
        {value ?? "--"}
      </NativeText>
      {error ? (
        <NativeText className="mt-3 text-center text-sm text-red-300">
          {error}
        </NativeText>
      ) : null}
      <NativeView className="mt-5 flex-row justify-center gap-3">
        <Button disabled={isLoading} onPress={onIncrement} size="sm">
          Increment
        </Button>
        <Button
          disabled={isLoading}
          onPress={onReset}
          size="sm"
          variant="outline"
          textClassName="text-slate-50"
        >
          Reset
        </Button>
      </NativeView>
    </NativeView>
  );
}
