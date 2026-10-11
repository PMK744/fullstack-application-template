import { Button, H1, Paragraph, Text, YStack } from "tamagui";
import { isBrowser } from "@pmkerby/utilities";
import { CounterCard } from "../components";

import type { HomeProps } from "./home.props";


export function HomeView({
  onIncrement,
  onReset,
  value,
  isLoading,
  error,
}: HomeProps) {
  return (
    <YStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="$6"
    >
      <Text
        marginBottom="$3"
        textAlign="center"
        fontSize={12}
        fontWeight="700"
        textTransform="uppercase"
        letterSpacing={1.44}
        color="$blue11"
      >
        PMK architecture template
      </Text>
      <H1 textAlign="center" fontSize={36} fontWeight="700" color="$color12">
        Shared Tamagui components for web and native.
      </H1>
      <Paragraph
        marginTop="$4"
        maxWidth={576}
        textAlign="center"
        fontSize={16}
        lineHeight={24}
        color="$color11"
      >
        Shared Tamagui components for web and native.
      </Paragraph>
      <Button
        marginTop="$6"
        onPress={() => alert(`isBrowser: ${isBrowser()}`)}
      >
        Continue
      </Button>
      <CounterCard
        error={error}
        isLoading={isLoading}
        onIncrement={onIncrement}
        onReset={onReset}
        value={value}
      />
    </YStack>
  );
}