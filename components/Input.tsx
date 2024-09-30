/* eslint-disable @typescript-eslint/no-explicit-any */
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const inputVariant = cva("focus-within:border-black", {
	variants: {
		size: {
			sm: "px-2 py-1",
			md: "px-6 py-3",
		},
		intent: {
			primary: "border border-gray-300",
		},
		rounded: {
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
		},
	},
	compoundVariants: [],
	defaultVariants: {
		size: "md",
		intent: "primary",
		rounded: "md",
	},
});

type InputVariant = VariantProps<typeof inputVariant>;
export type InputProps = InputVariant &
	ComponentProps<"input"> & {
		inputId: string;
		inputClassName?: string;
	};
function Input({
	size,
	intent,
	rounded,
	inputId,
	inputClassName,
	...props
}: InputProps) {
	return (
		<div
			className={`w-full ${inputVariant({
				size,
				intent,
				rounded,
			})} ${inputClassName}`}
		>
			<input
				id={inputId}
				className="outline-none w-full h-full"
				{...props}
			/>
		</div>
	);
}

export default Input;
