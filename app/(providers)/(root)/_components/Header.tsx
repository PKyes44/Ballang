"use client";

import api from "@/api/api";
import Page from "@/components/Page/Page";
import useAuthStore from "@/zustand/auth.store";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthNavigation from "./AuthNavigation";

function Header() {
  return (
    <header className="h-16 border-b">
      <Page width="lg" className="h-full flex items-center gap-x-20 mx-5">
        <Link href="/" className="text-2xl font-extrabold whitespace-nowrap">
          발랑
        </Link>
        <nav className="w-full">
          <ul className="w-full flex items-center justify-between font-semibold text-base">
            <li>
              <Link href="/brands">BRANDS</Link>
            </li>
            <li className="flex flex-row gap-x-5">
              <AuthNavigation />
            </li>
          </ul>
        </nav>
      </Page>
    </header>
  );
}

export default Header;
