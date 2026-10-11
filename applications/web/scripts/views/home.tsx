import { useCallback, useEffect, useState } from "react";
import { HomeView } from "@pmkerby/components";

export default function Home() {
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
    <HomeView
      error={error}
      isLoading={isLoading}
      onIncrement={() => void updateCounter("/increment")}
      onReset={() => void updateCounter("/reset")}
      value={value}
    />
  );
}
