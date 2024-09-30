import { cva, VariantProps } from "class-variance-authority";
import React, { PropsWithChildren } from "react";

const pageVariant = cva("", {
	variants: {
		width: {
			sm: "w-[900px]",
			md: "w-[1100px]",
			lg: "w-[1450px]",
		},
	},
	compoundVariants: [],
	defaultVariants: {
		width: "md",
	},
});

type PageVariant = VariantProps<typeof pageVariant>;
type pageProps = {
	className: string;
};

type PageProps = PageVariant & PropsWithChildren<pageProps>;

function Page({ width, className, children }: PageProps) {
	return (
		<div
			className={`m-auto ${className} ${pageVariant({
				width,
			})}`}
		>
			{children}
		</div>
	);
}

export default Page;
