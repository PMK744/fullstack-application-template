import type { ButtonHTMLAttributes, ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";
import { buttonTextVariants, buttonVariants } from "./buttonVariants";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
    onPress?: () => void;
  };

export function Button({
  children,
  className,
  onPress,
  onClick,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ variant, size }),
        buttonTextVariants({ variant }),
        className,
      )}
      onClick={onClick ?? onPress}
      type={type}
    >
      {children}
    </button>
  );
}
