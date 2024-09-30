/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, PropsWithChildren, useId } from "react";
import Input, { InputProps } from "./Input";
import { cva, VariantProps } from "class-variance-authority";

const inputGroupVariant = cva("", {
	variants: {
		wrapOutline: {
			true: "border border-black",
			false: "border-none",
		},
		innerOutline: {
			true: "border border-black",
			false: "border-none",
		},
	},
	compoundVariants: [],
	defaultVariants: {
		wrapOutline: false,
		innerOutline: true,
	},
});

type InputGroup = {
	helpText?: string;
	errorText?: string | null;
	wrapperClassName?: string;
	inputClassName?: string;
	name?: string;
	label?: string;
};
type InputGroupProps = VariantProps<typeof inputGroupVariant> &
	PropsWithChildren<InputGroup> &
	Omit<InputProps, "inputId">;

export default forwardRef(function InputGroup(
	{
		wrapOutline,
		innerOutline,
		helpText,
		errorText,
		wrapperClassName,
		inputClassName,
		label,
		children,
		...props
	}: InputGroupProps,
	ref: any
) {
	const inputId = useId();
	return (
		<div
			className={`flex flex-col gap-y-2 ${wrapperClassName} ${inputGroupVariant(
				{
					wrapOutline,
				}
			)}`}
		>
			<label className="text-sm font-medium" htmlFor={inputId}>
				{label}
			</label>
			<Input
				inputId={inputId}
				ref={ref}
				inputClassName={inputClassName}
				{...props}
			/>
			{errorText ? (
				<small className="text-sm text-red-500">{errorText}</small>
			) : (
				helpText && (
					<small className="text-sm text-gray-500">{helpText}</small>
				)
			)}
		</div>
	);
});
