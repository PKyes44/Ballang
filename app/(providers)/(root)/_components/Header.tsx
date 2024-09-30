"use client";

import api from "@/api/api";
import Page from "@/components/Page/Page";
import useAuthStore from "@/zustand/auth.store";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
	const router = useRouter();
	const isAuthinitialzed = useAuthStore((state) => state.isAuthinitialzed);
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
	const setIsShowLogInForm = useAuthStore(
		(state) => state.setIsShowLogInForm
	);

	const { mutate: logOut } = useMutation({
		mutationFn: () => api.auth.logOut(),
		onSuccess: () => {
			setIsLoggedIn(false);
		},
	});

	const handleShowLogInForm = () => {
		router.push("/");
		setIsShowLogInForm();
	};

	return (
		<header className="h-16 border-b">
			<Page width="lg" className="h-full flex items-center gap-x-20">
				<Link
					href="/"
					className="text-2xl font-extrabold whitespace-nowrap"
				>
					발랑
				</Link>
				<nav className="w-full">
					<ul className="w-full flex items-center justify-between font-semibold text-base">
						<li>
							<Link href="/brands">BRANDS</Link>
						</li>
						<li className="flex flex-row gap-x-5">
							{isAuthinitialzed ? (
								!isLoggedIn ? (
									<>
										<Link href="/sign-up">회원가입</Link>
										<button onClick={handleShowLogInForm}>
											로그인
										</button>
									</>
								) : (
									<>
										<Link href="/cart">장바구니</Link>
										<button onClick={() => logOut()}>
											로그아웃
										</button>
									</>
								)
							) : null}
						</li>
					</ul>
				</nav>
			</Page>
		</header>
	);
}

export default Header;
