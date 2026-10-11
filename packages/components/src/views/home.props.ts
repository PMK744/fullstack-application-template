export interface HomeProps {
 onIncrement: () => void;
 onReset: () => void;
 value: number | null;
 isLoading?: boolean;
 error?: string;
}
