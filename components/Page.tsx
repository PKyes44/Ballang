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
	className?: string;
	title?: string;
};

type PageProps = PageVariant & PropsWithChildren<pageProps>;

function Page({ width, className, title, children }: PageProps) {
	return (
		<div
			className={`m-auto ${className} ${pageVariant({
				width,
			})}`}
		>
			{title && (
				<h1 className="font-extrabold text-3xl text-center w-full mt-24 mb-10">
					{title}
				</h1>
			)}
			{children}
		</div>
	);
}

export default Page;
