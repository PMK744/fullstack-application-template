import { useCallback, useEffect, useState } from "react";

import { Button, CounterCard } from "@pmkerby/components";

import { H1, Paragraph, Text, YStack } from "tamagui";

import { isDefined } from "@pmkerby/utilities";

export default function Home() {
  const message = isDefined("web") ? "Web application ready" : "";
  const [value, setValue] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const requestCounter = useCallback(async (path = "") => {
    const response = await fetch(`http://localhost:5290/api/counter${path}`, {
      method: path ? "POST" : "GET",
    });

    if (!response.ok) {
      throw new Error(`Counter request failed (${response.status}).`);
    }

    const counter = (await response.json()) as { value: number };
    setValue(counter.value);
  }, []);

  const updateCounter = useCallback(
    async (path = "") => {
      setIsLoading(true);
      setError("");

      try {
        await requestCounter(path);
      } catch (caughtError) {
        setError(
          caughtError instanceof Error
            ? caughtError.message
            : "Unable to reach the counter API.",
        );
      } finally {
        setIsLoading(false);
      }
    },
    [requestCounter],
  );

  useEffect(() => {
    void updateCounter();
  }, [updateCounter]);

  return (
    <YStack
      render="main"
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding="$8"
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
        {message}
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
      <Button marginTop="$6" onPress={() => undefined}>
        Continue
      </Button>
      <CounterCard
        error={error}
        isLoading={isLoading}
        onIncrement={() => void updateCounter("/increment")}
        onReset={() => void updateCounter("/reset")}
        value={value}
      />
    </YStack>
  );
}
