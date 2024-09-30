import React, { PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariant = cva("", {
	variants: {
		outline: {
			true: "border border-black",
			false: "border-none",
		},
		intent: {
			primary: "bg-black text-white",
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
		intent: "primary",
		outline: false,
		rounded: "none",
	},
});

type ButtonVariants = VariantProps<typeof buttonVariant>;
type ButtonProps = PropsWithChildren<ButtonVariants>;

function Button({ outline, intent, rounded, children }: ButtonProps) {
	return (
		<button className={`${buttonVariant({ outline, intent, rounded })}`}>
			{children}
		</button>
	);
}

export default Button;
