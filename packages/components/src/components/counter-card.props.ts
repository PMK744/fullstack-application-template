export interface CounterCardProps {
  value: number | null;
  isLoading?: boolean;
  error?: string;
  onIncrement: () => void;
  onReset: () => void;
};
