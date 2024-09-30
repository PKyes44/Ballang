import React, { PropsWithChildren } from "react";
import Header from "./_components/Header";
import LogInModal from "@/components/LogIn/LogInModal";

function RootLayout({ children }: PropsWithChildren) {
	return (
		<>
			<LogInModal />
			<Header />
			{children}
		</>
	);
}

export default RootLayout;
