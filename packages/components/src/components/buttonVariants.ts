import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex-row items-center justify-center rounded-md px-4 py-2",
  {
    variants: {
      variant: {
        default: "bg-slate-900",
        secondary: "bg-slate-100",
        outline: "border border-slate-300 bg-transparent",
        ghost: "bg-transparent",
      },
      size: {
        default: "min-h-10",
        sm: "min-h-9 px-3",
        lg: "min-h-11 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const buttonTextVariants = cva("text-sm font-medium", {
  variants: {
    variant: {
      default: "text-white",
      secondary: "text-slate-900",
      outline: "text-slate-50",
      ghost: "text-slate-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
