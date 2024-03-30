import * as React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";

import { cn } from "@/libs/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, containerClassName, ...props }, ref) => {
    return (
      <div
        className={cn(
          "border rounded-2xl bg-transparent overflow-hidden px-3 py-2 flex items-center gap-2",
          containerClassName
        )}
      >
        <span className="px-1.5 border-r">
          {type === "email" ? (
            <MdOutlineMailOutline className="text-green-100" />
          ) : (
            <AiOutlineUser className="text-green-100" />
          )}
        </span>
        <input
          className={cn("w-full focus:outline-none", className)}
          type={type}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
