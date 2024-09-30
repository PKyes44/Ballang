import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "BALLANG",
	description: "e-commerce market",
};

export default function HTMLLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className="antialiased">{children}</body>
		</html>
	);
}
