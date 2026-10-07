import { Button } from "./Button";
import type { CounterCardProps } from "./CounterCard";

export function CounterCard({
  value,
  isLoading = false,
  error,
  onIncrement,
  onReset,
}: CounterCardProps) {
  return (
    <section className="mt-8 w-full max-w-sm justify-self-center rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-center text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
        Shared counter
      </p>
      <p className="mt-3 text-center text-5xl font-bold text-slate-50">
        {value ?? "--"}
      </p>
      {error ? (
        <p className="mt-3 text-center text-sm text-red-300">{error}</p>
      ) : null}
      <div className="mt-5 flex justify-center gap-3">
        <Button disabled={isLoading} onPress={onIncrement} size="sm">
          Increment
        </Button>
        <Button
          disabled={isLoading}
          onPress={onReset}
          size="sm"
          variant="outline"
        >
          Reset
        </Button>
      </div>
    </section>
  );
}
