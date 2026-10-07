import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { Button, CounterCard, Layout } from "@pmkerby/components";
import { isDefined, isBrowser } from "@pmkerby/utilities";

const apiUrl = "http://localhost:5290";

export default function Home() {
  const message = isDefined("mobile") ? "Mobile application ready" : "";
  const [value, setValue] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const requestCounter = useCallback(async (path = "") => {
    const response = await fetch(`${apiUrl}/api/counter${path}`, {
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
    <Layout>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="mb-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-blue-300">
          PMK architecture template
        </Text>
        <Text className="text-center text-4xl font-bold text-slate-50">
          {message}
        </Text>
        <Text className="mt-4 max-w-xl text-center text-base leading-6 text-slate-400">
          Shared shadcn-style components with NativeWind-compatible class names.
        </Text>
        <Button
          className="mt-6"
          onPress={() => alert(`isBrowser: ${isBrowser()}`)}
          textClassName="text-white"
        >
          Continue
        </Button>
        <CounterCard
          error={error}
          isLoading={isLoading}
          onIncrement={() => void updateCounter("/increment")}
          onReset={() => void updateCounter("/reset")}
          value={value}
        />
        <StatusBar style="light" />
      </View>
    </Layout>
  );
}
