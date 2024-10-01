import React, { ComponentProps, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariant = cva("font-semibold", {
  variants: {
    size: {
      xs: "w-8 h-8",
      sm: "py-2 px-8 text-sm",
      md: "py-4 px-16",
      lg: "py-4 px-24 text-lg",
    },
    intent: {
      primary: "bg-black",
    },
    outline: {
      true: "border border-black",
      false: "border-none text-white",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  compoundVariants: [{ outline: true, className: "text-black bg-white" }],
  defaultVariants: {
    size: "md",
    intent: "primary",
    outline: false,
    rounded: "none",
  },
});

type ButtonVariants = VariantProps<typeof buttonVariant>;
type ButtonProps = PropsWithChildren<ButtonVariants> &
  Omit<ComponentProps<"button">, "className"> & {
    className?: string;
    errorText?: string | null;
  };

function Button({
  size,
  outline,
  intent,
  rounded,
  className,
  errorText,
  children,
  ...props
}: ButtonProps) {
  return (
    <>
      <button
        className={`${buttonVariant({
          size,
          outline,
          intent,
          rounded,
        })} ${className}`}
        {...props}
      >
        {children}
      </button>
      {errorText && <small className="text-sm text-red-500">{errorText}</small>}
    </>
  );
}

export default Button;
