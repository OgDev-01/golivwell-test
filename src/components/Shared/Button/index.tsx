import React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/libs/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl h-11 py-2 px-8 text-sm font-medium hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        outlined:
          "bg-transparent font-chivo border border-green-100 text-green-100",
        filled: "bg-green-100 text-white ",

        highlight: "bg-green-10 text-green-100 ",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
