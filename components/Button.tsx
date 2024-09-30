import React, { PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariant = cva("", {
	variants: {
		size: {
			sm: "py-2 px-8 text-sm",
			md: "py-3 px-16",
			lg: "py-4 px-24 text-lg",
		},
		intent: {
			primary: "bg-black text-white",
		},
		outline: {
			true: "border border-black",
			false: "border-none",
		},
		rounded: {
			none: "rounded-none",
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
		},
	},
	compoundVariants: [{ outline: true, className: "text-black" }],
	defaultVariants: {
		size: "md",
		intent: "primary",
		outline: false,
		rounded: "none",
	},
});

type ButtonVariants = VariantProps<typeof buttonVariant>;
type ButtonProps = PropsWithChildren<ButtonVariants>;

function Button({ size, outline, intent, rounded, children }: ButtonProps) {
	return (
		<button
			className={`${buttonVariant({ size, outline, intent, rounded })}`}
		>
			{children}
		</button>
	);
}

export default Button;
