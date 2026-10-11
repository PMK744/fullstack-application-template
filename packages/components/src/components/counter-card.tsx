import { Button, Text, XStack, YStack } from "tamagui";

import type { CounterCardProps } from "./counter-card.props";


export function CounterCard({
  value,
  isLoading = false,
  error,
  onIncrement,
  onReset,
}: CounterCardProps) {
  return (
    <YStack
      render="section"
      marginTop="$8"
      width="100%"
      maxWidth={384}
      alignSelf="center"
      borderRadius="$6"
      borderWidth={1}
      borderColor="$borderColor"
      backgroundColor="$color2"
      padding="$6"
    >
      <Text
        textAlign="center"
        fontSize={12}
        fontWeight="700"
        textTransform="uppercase"
        letterSpacing={1.44}
        color="$color11"
      >
        Shared counter
      </Text>
      <Text
        marginTop="$3"
        textAlign="center"
        fontSize={48}
        lineHeight={48}
        fontWeight="700"
        color="$color12"
      >
        {value ?? "--"}
      </Text>
      {error ? (
        <Text marginTop="$3" textAlign="center" fontSize={14} color="$red11">
          {error}
        </Text>
      ) : null}
      <XStack marginTop="$5" justifyContent="center" gap="$3">
        <Button disabled={isLoading} onPress={onIncrement}>
          Increment
        </Button>
        <Button
          disabled={isLoading}
          onPress={onReset}
        >
          Reset
        </Button>
      </XStack>
    </YStack>
  );
}
