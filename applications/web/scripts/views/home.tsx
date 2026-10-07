import { useCallback, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, CounterCard, Layout } from "@pmkerby/components";

import { isDefined } from "@pmkerby/utilities";

import "./home.css";

export function Home() {
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
    <Layout>
      <main className="app-shell">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-blue-300">
          PMK architecture template
        </p>
        <h1 className="text-4xl font-bold text-slate-50">{message}</h1>
        <p className="mt-4 max-w-xl text-slate-400">
          Shared shadcn-style components with NativeWind-compatible class names.
        </p>
        <Button className="mx-auto mt-6" onPress={() => undefined}>
          Continue
        </Button>
        <CounterCard
          error={error}
          isLoading={isLoading}
          onIncrement={() => void updateCounter("/increment")}
          onReset={() => void updateCounter("/reset")}
          value={value}
        />
      </main>
    </Layout>
  );
}

const root = document.getElementById("root");

if (!root) {
  throw new Error("The React root element was not found.");
}

createRoot(root).render(<Home />);