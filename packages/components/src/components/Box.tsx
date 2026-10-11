import { styled, View, type GetProps } from "tamagui";

export const Box = styled(View, {
  name: "Box",
});

export type BoxProps = GetProps<typeof Box>;
